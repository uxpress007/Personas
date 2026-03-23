# Deployment Skills Guide

This document explains how the Cursor deployment skills work in this repository and what options are available to you. All deployment operations are orchestrated through **Cursor AI skills** synced at runtime into `.cursor/skills/deployer-skills/` and executed via **GitHub Actions workflows**.

---

## Table of Contents

- [Overview](#overview)
- [Skill Management](#skill-management)
- [Available Skills](#available-skills)
  - [1. Deploy Application (Full Orchestration)](#1-deploy-application-full-orchestration)
  - [2. Dockerize Application](#2-dockerize-application)
  - [3. Move Secrets to Vault](#3-move-secrets-to-vault)
  - [4. Push to GitHub](#4-push-to-github)
  - [5. Execute Deployment Workflows](#5-execute-deployment-workflows)
  - [6. McKID Stack Management](#6-mckid-stack-management)
  - [7. Download v0 Project](#7-download-v0-project)
  - [8. Download Lovable App](#8-download-lovable-app)
  - [9. Convert Supabase to PostgreSQL](#9-convert-supabase-to-postgresql)
- [How It All Fits Together](#how-it-all-fits-together)
- [Important: Docker Build Requires `main` Branch](#important-docker-build-requires-main-branch)
- [Branch Protection](#branch-protection)
- [Supported Application Stacks](#supported-application-stacks)
- [Authentication & Edge Features](#authentication--edge-features)
  - [Cloudflare Access (Automatic)](#cloudflare-access-automatic)
  - [Cloudflare DNS CNAME Management](#cloudflare-dns-cname-management)
  - [Subdomain Prefix](#subdomain-prefix)
  - [Kyverno Ingress Host Restriction](#kyverno-ingress-host-restriction)
  - [McKinsey ID Integration](#mckinsey-id-integration)
  - [Managing User Access](#managing-user-access)
- [Known Issues & Gotchas](#known-issues--gotchas)
- [Quick Reference](#quick-reference)

---

## Overview

Deployment in this repository is **fully automated** through a pipeline of Cursor skills and GitHub Actions. You interact with the system by giving natural-language instructions to Cursor (e.g., "deploy my application"), and the AI orchestrates the entire process: containerizing your app, managing secrets, pushing code, building Docker images, and deploying to Kubernetes.

**Key concepts:**

- **Instance** — your application, identified by a directory name under `deployer-apps/`
- **Environment** — a deployment target (e.g., `dev-us-east-1`, `stg-us-east-1`, `prod-us-east-1`)
- **GitHub Environment** — the combined identifier used by GitHub Actions: `{instance}-{env}-{region}`

---

## Skill Management

Deployer skills are **not bundled statically** in this repository. Instead, they are fetched at runtime from the [Code Beyond AI DLC](https://github.com/McK-Internal/code-beyond-ai-dlc) repository and installed under `.cursor/skills/deployer-skills/`.

### How It Works

1. The `deployer-skill-sync` rule (always-applied) checks at conversation start whether skills need to be initialized or updated
2. On first run (no `.cursor/skills/deployer-skills/.version` file), skills are synced automatically
3. On subsequent runs, a version check runs only when the conversation involves deployer skills
4. The `deployer-skill-manager` skill in `.cursor/skills/deployer-skills/deployer-skill-manager/` handles the sync using the GitHub API via the `gh` CLI

### Prerequisites

- **GitHub CLI** (`gh`) must be installed and authenticated
- Access to the `McK-Internal/code-beyond-ai-dlc` repository

### Manual Sync

To manually trigger a skill sync or update:
- Say "sync skills", "update deployer skills", or "refresh skills"

### Installed Skills Location

After sync, skills are located at `.cursor/skills/deployer-skills/<skill-name>/SKILL.md`.

---

## Available Skills

> **Note:** The skills listed below are fetched at runtime by the `deployer-skill-manager` and are not bundled statically in this repository. They are installed under `.cursor/skills/deployer-skills/` after the first sync.

### 1. Deploy Application (Full Orchestration)

**Trigger phrases:** "Deploy application", "Deploy", "Deploy to production", "Deploy v0 application", "Deploy v0 project", "Deploy lovable application", "Deploy lovable project"

This is the **master skill** that chains all other skills together in the correct order. It walks you through the entire deployment lifecycle:

| Step | What Happens | Interactive? |
|------|-------------|--------------|
| 0. Source Acquisition (Conditional) | Downloads source from v0.dev or Lovable if mentioned in the request | Yes — token/URL required for v0; ZIP file for Lovable |
| 1. Discover Instance & Environment | Identifies which app and environment to deploy; validates the GitHub environment exists | Yes — you choose the environment if there are multiple |
| 2. Cloudflare Access Authentication | Verifies that Cloudflare Access resources were provisioned during instance creation | Automatic — no user action required |
| 3. Branch Protection Check | Ensures you're not modifying code on `main` | Yes — you can create a new branch or continue |
| 4. Move Secrets to Vault | Scans for hardcoded secrets and moves them to HashiCorp Vault | Yes — you confirm each secret |
| 5. Configure Database Migrations (Conditional) | Sets up automated schema migrations if `db/migrations/` exists | Automatic with summary |
| 6. Dockerize Application | Creates production Dockerfile(s), `.dockerignore`, and CI workflow | Yes — you approve generated files |
| 7. Validate Helm Values | Ensures `values.yaml` has all required Kubernetes configuration | Automatic with summary |
| 8. Push & Merge to `main` | Commits and pushes to the current branch | Automatic |
| 9. Execute Deployment Workflows | Builds Docker image, creates PR to main, waits for merge, then deploys | Yes — you merge the PR |

> **Note:** Cloudflare Access (McKinsey ID SSO) and DNS CNAME records are configured **automatically** by the control plane during instance creation. There is no manual authentication setup step in the deployment flow.

**What it produces:**
- Production-ready `Dockerfile`(s) (main app, migrations, additional services)
- A `.dockerignore` file
- A GitHub Actions CI workflow for building/scanning/pushing all Docker images to JFrog
- Updated `values.yaml` with correct Helm configuration (including `subdomainPrefix` and pinned image tags)
- Secrets written to HashiCorp Vault
- Database migration infrastructure (if applicable)
- A running deployment on Kubernetes

---

### 2. Dockerize Application

**Trigger phrases:** "Dockerize application", "Dockerize my application", "Containerize my app"

Creates a production-ready Docker setup for your application. Can be run independently of the full deploy flow.

**What it does:**

1. **Auto-detects your tech stack** by inspecting files in `deployer-apps/<instance>/src/`
2. **Validates and fixes dependencies** — scans source code imports and ensures every third-party package is declared in the dependency manifest (`requirements.txt`, `package.json`, or `go.mod`)
3. **Generates Dockerfile(s)** with:
   - Multi-stage builds (builder + production stages)
   - Pinned base image versions
   - Non-root user for security
   - Health check endpoint
   - Optimized layer caching
   - BuildKit cache mounts
4. **Creates a `.dockerignore`** tailored to your stack
5. **Discovers all Dockerfiles** in the `src/` directory (including `Dockerfile.migrations`, `Dockerfile.<service>`, etc.) and generates a single CI workflow that builds all of them
6. **Generates a GitHub Actions CI workflow** (`<instance>-lrah-docker-build-and-publish.yml`) that:
   - Detects the package manager (npm/yarn for Node.js)
   - Installs dependencies
   - Runs unit tests (if present)
   - Generates semver version tags
   - Builds **all** discovered Docker images
   - Scans each for vulnerabilities with JFrog Xray
   - Pushes to JFrog with versioned tags

**Supported stacks:**

| Stack | Detection | Default Port |
|-------|-----------|--------------|
| Node.js (Next.js) | `package.json` + `next.config.*` | 3000 |
| Node.js (React/Vite) | `package.json` + `vite.config.*` | 3000 |
| Node.js (generic) | `package.json` | 3000 |
| Python (FastAPI/Flask) | `requirements.txt` or `pyproject.toml` | 8000 |
| Go | `go.mod` | 8080 |

**Multi-Dockerfile support:**

| Dockerfile | Image Name |
|------------|------------|
| `Dockerfile` | `<instance>-app` |
| `Dockerfile.migrations` | `<instance>-migrations` |
| `Dockerfile.<suffix>` | `<instance>-<suffix>` |

**Output files:**
- `deployer-apps/<instance>/src/Dockerfile` (and any additional `Dockerfile.*` files)
- `deployer-apps/<instance>/src/.dockerignore`
- `.github/workflows/<instance>-lrah-docker-build-and-publish.yml`

---

### 3. Move Secrets to Vault

**Trigger phrases:** "Move sensitive variables into secrets", "Parameterize secrets", "Move secrets to vault"

Extracts hardcoded secrets from your code and configures them to be injected at runtime via HashiCorp Vault.

**What it does:**

1. **Scans your codebase** for hardcoded secrets (API keys, tokens, passwords, credentials)
2. **Replaces hardcoded values** with environment variable references:
   - Python: `os.getenv('API_KEY')`
   - Node.js: `process.env.API_KEY`
3. **Configures Kubernetes ExternalSecrets** in `values.yaml` to pull from Vault
4. **Updates the deployment template** to inject secrets as environment variables
5. **Writes secret values to HashiCorp Vault** via a GitHub Actions workflow

**Secret flow:**
```
HashiCorp Vault → ExternalSecret → K8s Secret → Env Var → Your Application
```

**Important:** Frontend secrets must never use build-time env vars. The skill enforces runtime injection via the backend API.

---

### 4. Push to GitHub

**Trigger phrases:** "Push changes to GitHub", "Commit and push", "Push my work"

Commits all staged changes using **Conventional Commits** format and pushes to the current branch.

**Commit types available:**

| Type | Use When |
|------|----------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation changes only |
| `style` | Formatting, no code change |
| `refactor` | Restructuring code |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `perf` | Performance improvements |
| `ci` | CI/CD pipeline changes |
| `build` | Build system changes |

The skill automatically analyzes your staged changes to determine the appropriate commit type and writes a descriptive commit message.

---

### 5. Execute Deployment Workflows

**Trigger phrases:** "Execute deployment action", "Run deployment workflows", "Trigger deploy"

Triggers the Docker build on the current branch, creates a pull request to `main`, waits for the user to merge it, then triggers the Kubernetes deployment workflow on `main`.

| Step | Action | Branch | Purpose |
|------|--------|--------|---------|
| 1 | Trigger Docker build | Current branch | Build & scan Docker image(s) |
| 2 | Wait for build to complete | Current branch | Verify CI passes |
| 3 | Update `values.yaml` image tag | Current branch | Pin image to the exact semver+hash from the build (e.g., `0.1.0-fee4554a`) |
| 4 | Create PR to `main` | Current → main | Merge changes (including pinned tag) into main |
| 5 | Wait for user to merge PR | — | User reviews and merges in GitHub |
| 6 | Trigger Kubernetes deployment | `main` | Deploy to Kubernetes via ArgoCD |
| 7 | Monitor and report | `main` | Watch until deployment completes |

**What happens:**
1. Triggers the Docker build workflow on the **current branch** to validate the image builds and passes security scanning
2. After the build succeeds, extracts the semver+hash tag and updates `values.yaml` (`image.tag`)
3. Creates a pull request from the current branch to `main`
4. Informs the user to review and merge the PR (the user can say "done" after merging to proceed immediately, or the skill polls automatically)
5. Once merged, triggers the Kubernetes deployment workflow on `main`
6. Reports the final result with the application URL

Both workflows can also be triggered manually from the GitHub Actions UI via `workflow_dispatch`.

> **Important:** The deployment platform only deploys code from the `main` branch, so the PR-merge step is required. See [Docker Build Requires `main` Branch](#important-docker-build-requires-main-branch) for details.

---

### 6. McKID Stack Management

**Trigger phrases:** "Configure auth", "Manage McKID stack", "Add users to my app", "Add user to my application"

Manages the McKinsey ID (McKID) authentication stack provisioned for your application. All operations run via the `*-LRAH manage McKID stack` GitHub Actions workflow.

**Available operations:**

| Operation | Description | Key Parameters | Batch Support |
|-----------|-------------|----------------|---------------|
| `grant-app-access` | Add user(s) as stack members and to the app access group in a single run | `member_email`, `group_name` | Yes |
| `revoke-app-access` | Remove user(s) from the app access group | `member_email`, `group_name` | Yes |
| `list-stack-details` | View all assets, groups, and members | None | — |
| `update-asset-redirect-uris` | Set OAuth callback URLs and CORS origins | `redirect_uris`, `cors_origins` (optional) | — |
| `create-pkce-asset` | Create an additional OIDC PKCE client | `asset_name` | — |
| `add-stack-member` | Add user(s) to the stack (dashboard visibility only) | `member_email` | Yes |
| `remove-stack-member` | Remove user(s) from the stack entirely | `member_email` | Yes |
| `add-group-member` | Add user(s) to a group (also adds as stack member automatically) | `member_email`, `group_name` | Yes |
| `remove-group-member` | Remove user(s) from a group | `member_email`, `group_name` | Yes |

**Batch operations:** All email-based operations accept multiple comma-separated emails in a single workflow run (e.g., `jane@mckinsey.com,john@mckinsey.com`).

**McKID resources provisioned for your app:**

| Resource | GitHub Variable | Purpose |
|----------|----------------|---------|
| Stack ID | `MCKID_STACK_ID` | Unique stack identifier (UUID) |
| OIDC Client ID | `MCKID_CLIENT_ID` | PKCE asset client_id for your app |
| OIDC Discovery URL | `MCKID_PROVIDER_CONFIG_URL` | OIDC discovery endpoint |
| Users Group Name | `MCKID_GROUP_NAME` | Access group for application users |
| API URL | `MCKID_API_URL` | McKID GraphQL API endpoint |
| Auth Protocol URL | `MCKID_AUTH_PROTOCOL_URL` | Auth realm protocol URL (used by workflow for token exchange) |

**McKID dashboard URL:** Stack owners can access the dashboard directly at `https://dashboard.mckinsey.id/stack-detail/{STACK_ID}/`. Ask "Get my McKID dashboard URL" to have the skill construct the full link.

---

### 7. Download v0 Project

**Trigger phrases:** "Download v0 project", "Pull v0 project", "Import from v0"

Downloads a v0.dev project into the `deployer-apps/<instance>/src/` directory via the Vercel deployment API.

**What it does:**

1. **Accepts flexible input** — v0 chat ID, v0 chat URL (`https://v0.app/chat/...`), or a published Vercel deployment URL (`https://*.vercel.app`)
2. **Authenticates via API token** — reads the user's Vercel or v0 API token securely from the clipboard (never displayed in chat)
3. **Resolves the deployment** — if given a chat ID, searches the user's Vercel projects and deployments to find the matching deployment
4. **Downloads all source files** — retrieves the file tree from the Vercel deployment API and downloads each file (handling JSON+base64 encoding)
5. **Fixes binary files** — double-decodes binary assets (images, fonts, SVGs) that are double base64-encoded by the API
6. **Cleans up** — removes nested `.git` directory and temporary files

**Accepted inputs:**

| Input | Example |
|-------|---------|
| v0 chat ID | `dark-green-colors-jy0YIK3AEiJ` |
| v0 chat URL | `https://v0.app/chat/dark-green-colors-jy0YIK3AEiJ` |
| Vercel deployment URL | `https://my-app-zeta.vercel.app` |

**API token options:**

| Token Type | Where to Generate |
|------------|-------------------|
| Vercel API Token (recommended) | [vercel.com/account/settings/tokens](https://vercel.com/account/settings/tokens) |
| v0 API Token | [v0.app/chat/settings/keys](https://v0.app/chat/settings/keys) |

**Fallback:** If the API method fails, the skill guides you through manually downloading a ZIP from v0.dev.

> **Note:** v0 projects are typically Next.js with React, Tailwind CSS, and shadcn/ui.

---

### 8. Download Lovable App

**Trigger phrases:** "Download lovable app", "Download lovable project", "Import lovable app", "Import from lovable"

Downloads a Lovable-exported application into the project and automatically detects whether database conversion is needed.

**What it does:**

1. **Guides ZIP export** — instructs you to export your app as a ZIP from the Lovable UI
2. **Opens a file picker** — uses a native macOS file dialog to select the downloaded ZIP
3. **Extracts and flattens** — unzips into `deployer-apps/<instance>/app/`, handling wrapper folders that Lovable often creates
4. **Scans for database code** — searches the extracted source for Supabase, Prisma, Drizzle, or other database client usage
5. **Triggers database conversion** — if Supabase or other database code is detected, automatically invokes the [Convert Supabase to PostgreSQL](#9-convert-supabase-to-postgresql) skill

> **Note:** Lovable apps are typically React + Vite + TypeScript applications. Most Lovable apps that use data persistence will use Supabase.

---

### 9. Convert Supabase to PostgreSQL

**Trigger phrases:** "Convert supabase to postgresql", "Convert to postgres", "Migrate database", "Switch to RDS"

Converts an application's database layer from Supabase (or other databases) to PostgreSQL 16.8 running on the Deployer K8s PaaS shared RDS cluster.

**What it does:**

1. **Discovers current database usage** — scans for Supabase, SQLite, DynamoDB, Prisma, or other database client code
2. **Generates PostgreSQL schema** — converts schemas to PostgreSQL 16.8-compatible DDL, removing Supabase-specific features (RLS policies, `auth.role()`)
3. **Replaces database client code** — swaps the old client (e.g., `@supabase/supabase-js`) with a standard `pg` driver (Node.js) or `psycopg2` (Python)
4. **Adds backend API layer** — for frontend-only apps that used Supabase client-side, creates an Express/FastAPI backend that proxies database queries
5. **Configures Terraform** — adds `postgresql_databases` block to `main.tf` for RDS provisioning
6. **Wires Helm values** — configures `values.yaml` with ConfigMap and Secret references for database connection details (`RDS_DB_*` env vars)

**Database connection environment variables:**

| Variable | Source |
|----------|--------|
| `RDS_DB_NAME` | ConfigMap |
| `RDS_DB_OWNER` | ConfigMap |
| `RDS_DB_WRITER_ENDPOINT` | ConfigMap |
| `RDS_DB_READER_ENDPOINT` | ConfigMap |
| `RDS_DB_PASSWORD` | Secret |

**Limitations:**
- Max 5 PostgreSQL databases per namespace/instance
- Databases run on a shared RDS cluster (PostgreSQL 16.8)
- Only `us-east-1` region supported

---

## How It All Fits Together

```
┌─────────────────────────────────────────────────────────────────┐
│              Instance Creation (Control Plane)                   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Automatic — no user action needed:                      │    │
│  │  • Cloudflare Access (IdP + Policy + App)               │    │
│  │  • Cloudflare DNS CNAME (proxied)                       │    │
│  │  • McKID stack provisioning                             │    │
│  │  • Kyverno namespace annotations                       │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    "Deploy Application"                          │
│                  (Cursor skill orchestrator)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  0. ┌──────────────────────────┐ (if v0 or Lovable detected)   │
│     │  Source Acquisition      │──► Download v0 / Lovable app   │
│     └──────────────────────────┘   ► Convert Supabase (if any)  │
│           │                                                     │
│  1. Discover instance & environment                             │
│           │                                                     │
│  2. Cloudflare Access (automatic, verified)                     │
│           │                                                     │
│  3. Branch Protection Check                                     │
│           │                                                     │
│  4. ┌─────┴──────────────────┐                                  │
│     │  Move Secrets to Vault │──► Vault Write Workflow          │
│     └────────────────────────┘                                  │
│           │                                                     │
│  5. ┌─────┴──────────────────┐ (if db/migrations/ exists)       │
│     │  Configure DB Migrations│──► migrate.sh + Dockerfile      │
│     └────────────────────────┘                                  │
│           │                                                     │
│  6. ┌─────┴──────────────────┐                                  │
│     │  Dockerize Application │──► Dockerfile(s) + CI Workflow   │
│     └────────────────────────┘                                  │
│           │                                                     │
│  7. Validate Helm values.yaml                                   │
│           │                                                     │
│  8. ┌─────┴──────────────────┐                                  │
│     │  Push to GitHub        │──► git commit + push             │
│     └────────────────────────┘                                  │
│           │                                                     │
│  9. ┌─────┴──────────────────┐                                  │
│     │ Execute Deploy Actions │──► Docker Build (branch)         │
│     └────────────────────────┘   ► Update image tag             │
│                                  ► Create PR → merge to main    │
│                                  ► K8s Deploy (main)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Each skill can also be invoked **independently** by using its trigger phrase. For example, you can just say "Dockerize my application" without running the full deployment.

---

## Important: Docker Build Requires `main` Branch

The Docker build and publish workflow authenticates to JFrog using **OIDC token exchange**. The JFrog identity mapping is configured to **only trust tokens from the `main` branch**. This means:

- Docker builds triggered from feature branches will fail with `403 Forbidden` at the JFrog CLI setup step.
- You **must merge your changes to `main`** before the Docker build workflow can succeed.
- The CI workflow will auto-trigger on push to `main` when files in `deployer-apps/<instance>/src/**` change.
- You can also manually trigger it from `main` via `workflow_dispatch` in the GitHub Actions UI.

> **CRITICAL — Per-Instance Values:** The `OIDC Provider` name and `Docker Registry` URL shown below are **per-instance** and differ for every deployed application. Never copy these values from another instance's workflow. Look up the correct values from the instance's `values.yaml` (label `app.kubernetes.io/lrah-user-product-id` for the product ID, `image.repository` for the JFrog repo) or from the existing rendered Docker build workflow.

**JFrog configuration:**

| Setting | Value |
|---------|-------|
| JFrog URL | `https://mckinsey.jfrog.io` |
| OIDC Provider | `svc-<PRODUCT_ID>-rw` (per-instance; product ID is in `values.yaml` label `app.kubernetes.io/lrah-user-product-id`) |
| OIDC Audience | `rw` |
| Docker Registry | `mckinsey-<instance>-docker-local.jfrog.io` |
| Image Name | `<instance>-app` (main), `<instance>-migrations` (migrations), `<instance>-<suffix>` (others) |

---

## Branch Protection

Code-modifying skills enforce branch protection:

| Skill | Modifies Code? | Branch Check? |
|-------|---------------|---------------|
| Deploy Application | Yes | Yes |
| Dockerize Application | Yes | Yes |
| Move Secrets to Vault | Yes | Yes |
| Push to GitHub | No (only commits) | No |
| Execute Deployment Workflows | No (only triggers) | No |
| Download v0 Project | Yes | No |
| Download Lovable App | Yes | No |
| Convert Supabase to PostgreSQL | Yes | No |

If you are on `main`/`master`, the skill will warn you and offer to create a deployment branch. Branches follow **conventional commit-style naming**:

```
<type>/<instance>-<short-description>
```

| Type | When to Use | Example |
|------|-------------|---------|
| `deploy` | Initial or full deployment | `deploy/cz-pilot-6-initial-deploy` |
| `feat` | Adding a new feature | `feat/cz-pilot-6-add-mckid-auth` |
| `fix` | Bug fixes | `fix/cz-pilot-6-helm-values` |
| `chore` | Maintenance tasks | `chore/cz-pilot-6-vault-secrets` |
| `ci` | CI/CD changes only | `ci/cz-pilot-6-update-docker-build` |
| `refactor` | Restructuring without functional change | `refactor/cz-pilot-6-config` |

---

## Supported Application Stacks

The Dockerize skill auto-detects your stack and tailors all generated artifacts accordingly:

| Stack | Dockerfile Pattern | CI Workflow Extras | Test Detection |
|-------|-------------------|-------------------|----------------|
| **Node.js (Next.js)** | `node:20-alpine`, standalone output | npm/yarn detection, `setup-node` | `test:ci` in `package.json` |
| **Node.js (Vite) + Python** | Two-stage: UI builder + Python runtime | npm/yarn + pip setup | `test:ci` or `pytest` |
| **Python** | `python:3.12-slim`, user install | `setup-python`, pip cache | `tests/` directory + pytest |
| **Go** | `golang:1.21-alpine` + distroless | Go module cache | Go test |

All generated Dockerfiles include: multi-stage builds, non-root users, health checks, BuildKit cache mounts, and optimized layer ordering.

---

## Authentication & Edge Features

Authentication and edge networking are handled automatically by the control plane during instance creation. Three systems work together: **McKinsey ID (McKID)** provides the identity provider (OIDC), **Cloudflare Access** acts as the gateway that protects your application's URL, and **Cloudflare DNS** manages the CNAME record that routes traffic to your cluster. Together they ensure only **explicitly authorized users** can reach your app — access is not open to all McKinsey employees by default.

### How the Pieces Fit Together

```
User visits your app URL
        │
        ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────┐
│ Cloudflare DNS   │     │ Cloudflare Access │     │              │
│ (CNAME → cluster)│────►│  (gateway/proxy)  │────►│   Your App   │
└──────────────────┘     └──────────────────┘     │ (Kubernetes) │
                                │                  └──────────────┘
                                │
                         ┌──────────────────┐
                         │   McKinsey ID    │
                         │  (OIDC provider) │
                         └──────────────────┘
                                │
                    Issues OIDC tokens
                    Manages users/groups
```

1. Cloudflare DNS resolves the app's subdomain (`{subdomainPrefix}.{cloudflareZone}`) to the cluster ingress via a proxied CNAME record
2. Cloudflare Access intercepts the request and redirects the user to McKinsey ID for login
3. McKinsey ID authenticates the user and issues an OIDC token
4. Cloudflare Access validates the token against the configured policy
5. If the user belongs to the required McKID group (e.g., `{instance}-users`), access is granted
6. Your app can optionally read the OIDC token for user identity (email, name, groups)

> **Important:** Users must be explicitly added to your application's McKID group before they can access it. Use the [McKID Stack Management](#6-mckid-stack-management) skill to add users (e.g., "Add jane@mckinsey.com to my application").

### Cloudflare Access (Automatic)

Cloudflare Access is provisioned **automatically** by the control plane during instance creation — there is no manual workflow or user action required. The `cloudflare-access-setup.yml` workflow has been removed; all Access configuration is now handled natively by the control plane's Go code (`SetupCloudflareAccess`).

**What gets created:**

| Resource | Naming Pattern | Description |
|----------|----------------|-------------|
| **OIDC Identity Provider** | `{eks-namespace-name}-idp-{hex4}` | Registers McKinsey ID as an OIDC provider with PKCE enabled |
| **Access Policy** | `{eks-namespace-name}-policy-{hex4}` | An "allow" policy matching the instance's McKID user group |
| **Access Application** | `{eks-namespace-name}-app-{hex4}` | A self-hosted app bound to the app's FQDN, with instant auth enabled |

If the resources already exist (e.g., from a previous provisioning run), the setup adopts them without modification.

**On instance termination**, the control plane automatically cleans up all three Cloudflare Access resources (`DeleteCloudflareAccess`).

### Cloudflare DNS CNAME Management

DNS CNAME records are managed **automatically** by the control plane — not by `external-dns` annotations on the Kubernetes ingress. The `external-dns` hostname and TTL annotations have been removed from the ingress templates.

**During instance creation**, the control plane:
1. Resolves the Cloudflare zone ID for the configured `cloudflareZone`
2. Creates (or adopts) a proxied CNAME record: `{subdomainPrefix}.{cloudflareZone}` → cluster ingress endpoint
3. Enables Cloudflare proxy (orange cloud) on the record for DDoS protection and WAF

**During instance termination**, the control plane deletes the CNAME record (`DeleteCloudflareDNS`).

**On re-runs**, if the CNAME record already exists, the control plane patches it to ensure the proxy is enabled.

### Subdomain Prefix

Each instance has a `subdomainPrefix` value that determines the application's subdomain. This value is:
- Set during instance creation via Platform McKinsey (PMcK)
- Stored in `values.yaml` as `subdomainPrefix:`
- Used by the ingress template to generate the hostname: `{{ .Values.subdomainPrefix }}.{{ .Values.cloudflareZone }}`
- Annotated on the Kubernetes namespace: `lrah.mckinsey.com/subdomain-prefix`

**When a user changes their subdomain prefix via PMcK**, the control plane automatically:
1. Updates the Cloudflare DNS CNAME record
2. Updates the Kubernetes namespace annotation
3. Updates the `subdomainPrefix:` value in the resource-plane `values.yaml`
4. Dispatches the "Deploy all" workflow to trigger an ArgoCD sync

**If the automatic update fails** (e.g., instances provisioned before this feature, or GitHub API errors), see the [Subdomain Prefix Mismatch](#2-subdomain-prefix-mismatch) known issue for manual remediation steps.

### Kyverno Ingress Host Restriction

Kyverno cluster policies enforce that ingress hosts match the namespace's assigned subdomain and Cloudflare zone. This prevents accidental or malicious hostname collisions across tenants.

**What the policies enforce:**
- The ingress `host` must equal `{subdomain-prefix}.{cloudflare-zone}` as defined in the namespace annotations
- Only the namespace's assigned subdomain prefix and zone are allowed

**If your ingress is rejected** with a message like `Ingress host does not match the assigned subdomain and zone for this namespace`, check that:
1. `values.yaml` → `subdomainPrefix` matches the namespace annotation `lrah.mckinsey.com/subdomain-prefix`
2. `values.yaml` → `cloudflareZone` matches the namespace annotation `lrah.mckinsey.com/cloudflare-zone`

See the troubleshooting section in the [deploy-application skill](./.cursor/skills/deployer-skills/deployer-deploy-application/SKILL.md) for step-by-step diagnosis commands.

### McKinsey ID Integration

When your deployer instance was created, the platform provisioned a McKID stack with these resources (stored as GitHub environment variables):

| Resource | GitHub Variable | Purpose |
|----------|----------------|---------|
| Stack ID | `MCKID_STACK_ID` | Unique identifier for your tenant in McKinsey ID |
| OIDC Client ID | `MCKID_CLIENT_ID` | The OAuth client your app uses for PKCE authentication |
| Provider Config URL | `MCKID_PROVIDER_CONFIG_URL` | OIDC discovery endpoint (`.well-known/openid-configuration`) |
| Users Group Name | `MCKID_GROUP_NAME` | Access group for application users |
| API URL | `MCKID_API_URL` | McKID GraphQL API endpoint |
| Auth Protocol URL | `MCKID_AUTH_PROTOCOL_URL` | Auth realm protocol URL |

You do **not** need to create these manually — they already exist.

**Integrating McKID OIDC in your app code:**

If your app needs to know **who** the user is (not just that they're authenticated), you can integrate the McKID OIDC client directly in your frontend or backend.

**React (with `oidc-client-ts`):**

```typescript
const config = {
  authority: process.env.MCKID_PROVIDER_CONFIG_URL,
  client_id: process.env.MCKID_CLIENT_ID,
  redirect_uri: "https://myapp.mckinsey.cloud/callback",
  response_type: "code",
  scope: "openid profile email",
};
```

**Next.js (with `next-auth`):**

```typescript
providers: [
  {
    id: "mckid",
    name: "McKinsey ID",
    type: "oidc",
    issuer: process.env.MCKID_PROVIDER_CONFIG_URL,
    clientId: process.env.MCKID_CLIENT_ID,
  },
],
```

After configuring your app, you must register the callback URL with McKID:

```
"Update redirect URIs to https://myapp.mckinsey.cloud/callback"
```

This triggers the `update-asset-redirect-uris` operation, which sets both the OAuth redirect URI and the CORS origin on your PKCE asset.

### Managing User Access

**You must explicitly add users** before they can access the application. No one has access by default — not even `@mckinsey.com` email holders. Use the McKID Stack Management skill to grant access:

| What You Want | What To Say | Effect |
|---------------|-------------|--------|
| Give someone application access | "Add jane@mckinsey.com to my application" | User is added as stack member and to the access group |
| Give multiple people access | "Add jane@mckinsey.com and john@mckinsey.com to my app" | Both users added in a single workflow run |
| Remove application access | "Remove jane@mckinsey.com from my application" | User removed from access group |
| Remove access entirely | "Remove jane@mckinsey.com from the stack" | User loses all group memberships and dashboard visibility |
| See who has access | "List my McKID stack details" | Shows all members, groups, and assets |
| Get dashboard link | "Get my McKID dashboard URL" | Returns the direct link with your stack ID |

**Group-based authorization in your app:**

The OIDC token issued by McKID includes a `groups` claim. Your app can check this to implement role-based access:

```python
# Python example — check if user is an admin
user_groups = token_payload.get("groups", [])
is_admin = f"{instance}-admins" in user_groups
```

### McKID Dashboard

For advanced stack management beyond what the workflow supports, stack **owners** can use the McKID dashboard directly:

| Environment | Dashboard URL |
|-------------|--------------|
| Production | https://dashboard.mckinsey.id/ |
| Integration | https://dashboard.int.mckinsey.id/ |

You can also get your stack-specific dashboard URL by saying "Get my McKID dashboard URL" — the skill constructs the link using your `MCKID_STACK_ID`.

### Authentication & Edge Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| User can't log in | User not added to the app's McKID group | Add the user via the McKID Stack Management skill: "Add jane@mckinsey.com to my application" |
| "Redirect URI is not valid" | Callback URL not registered | Run `update-asset-redirect-uris` with the correct URL |
| OIDC token missing groups claim | User not in any group | Add the user to a group via `grant-app-access` or `add-group-member` |
| "401 Unauthorized" from McKID API | Wrong audience on PKCE asset | The asset needs `audienceSource: McKinseyIdApiV2` (set during provisioning) |
| "Failed to obtain McKID API token" | Per-stack service account credentials missing | Verify secrets exist: `gh secret list --env "$GH_ENVIRONMENT"` should show `MCKID_SVC_ACC_CLIENT_ID` and `MCKID_SVC_ACC_CLIENT_SECRET`. If missing, contact the platform team |
| Can't access McKID dashboard | Not a stack owner | Contact [get-help](https://platform.mckinsey.com/get-help) to be added as a stack owner |
| Token expired / stale session | Cached token in macOS Keychain | Clear with: `security delete-generic-password -s "mckid-mcp" -a "mckid-mcp-default"` |
| Kyverno rejects Ingress | `subdomainPrefix` or `cloudflareZone` in `values.yaml` doesn't match namespace annotations | Update `values.yaml` to match the namespace annotations (see [Kyverno Ingress Host Restriction](#kyverno-ingress-host-restriction)) |
| App unreachable after subdomain change | `values.yaml` not updated with new `subdomainPrefix` | See [Subdomain Prefix Mismatch](#2-subdomain-prefix-mismatch) |

---

## Known Issues & Gotchas

These are lessons learned from actual deployments of this application:

### 1. Ingress Host Must Match Namespace Annotations

**Symptom:** Kyverno rejects the Ingress resource with `Ingress host does not match the assigned subdomain and zone for this namespace`.

**Cause:** The ingress hostname is generated from `{{ .Values.subdomainPrefix }}.{{ .Values.cloudflareZone }}` in the Helm template. Kyverno cluster policies validate that this matches the namespace annotations `lrah.mckinsey.com/subdomain-prefix` and `lrah.mckinsey.com/cloudflare-zone`. If `values.yaml` has stale or incorrect values, the Ingress is rejected.

**Fix:** Update `values.yaml` so that `subdomainPrefix` and `cloudflareZone` match the namespace annotations:
```bash
# Check what the namespace expects
kubectl get ns <NAMESPACE> -o jsonpath='{.metadata.annotations.lrah\.mckinsey\.com/subdomain-prefix}'
kubectl get ns <NAMESPACE> -o jsonpath='{.metadata.annotations.lrah\.mckinsey\.com/cloudflare-zone}'

# Update values.yaml to match, then commit and push to main
```

### 2. Subdomain Prefix Mismatch

**Symptom:** Application becomes unreachable after changing the subdomain prefix in Platform McKinsey (PMcK), or ArgoCD sync fails.

**Cause:** The control plane automatically updates the `subdomainPrefix:` value in `values.yaml` when a subdomain change is detected. However, for instances provisioned before this feature was deployed, or if the GitHub API update fails, `values.yaml` may still have the old prefix.

**Fix:**
1. Check the namespace's assigned subdomain prefix:
   ```bash
   kubectl get ns <NAMESPACE> -o jsonpath='{.metadata.annotations.lrah\.mckinsey\.com/subdomain-prefix}'
   ```
2. Update `values.yaml` to match:
   ```yaml
   subdomainPrefix: <value from step 1>
   ```
3. Commit, push to `main`, and wait for ArgoCD to sync.

### 3. Missing Python Dependencies in requirements.txt

**Symptom:** Docker build or runtime fails with `ModuleNotFoundError` for `fastapi`, `uvicorn`, or other framework packages.

**Cause:** The `requirements.txt` may not list all packages that the application imports (e.g., `fastapi` and `uvicorn` are used in `api.py` but weren't originally in `requirements.txt`).

**Fix:** The Dockerize skill now validates dependencies by scanning source imports before building. If you still encounter import errors, add the missing packages to `requirements.txt` and redeploy.

### 4. Image Tag Set to `latest` or `SET_BY_CI_PIPELINE`

**Symptom:** Kubernetes pods are stuck in `ImagePullBackOff` or are running a stale image version.

**Cause:** The `image.tag` in `values.yaml` was never updated from its placeholder value, or was set to `latest` (a mutable tag that can silently serve stale images).

**Fix:** The Execute Deployment Workflows skill now automatically updates the image tag to the exact semver+commit-hash (e.g., `0.1.0-fee4554a`) after a successful Docker build. If the tag is still a placeholder, re-run the deployment workflow. Never use `tag: latest`.

---

## Quick Reference

| What You Want To Do | What To Say |
|---------------------|-------------|
| Full end-to-end deployment | "Deploy application" or "Deploy" |
| Deploy a v0 project | "Deploy v0 application" or "Deploy v0 project" |
| Deploy a Lovable app | "Deploy lovable application" or "Deploy lovable project" |
| Just containerize your app | "Dockerize application" |
| Secure hardcoded secrets | "Move sensitive variables into secrets" |
| Commit and push changes | "Push changes to GitHub" |
| Trigger CI/CD pipelines | "Execute deployment action" |
| Download a v0 project (without deploying) | "Download v0 project" or "Import from v0" |
| Download a Lovable app (without deploying) | "Download lovable app" or "Import from lovable" |
| Convert database to PostgreSQL | "Convert supabase to postgresql" or "Migrate database" |
| Manage users / OAuth | "Manage McKID stack" |
| Add a user to your app | "Add user@mckinsey.com to my application" |
| Add multiple users at once | "Add user1@mckinsey.com and user2@mckinsey.com to my app" |
| Remove a user from your app | "Remove user@mckinsey.com from my application" |
| View stack details | "List my McKID stack details" |
| Get McKID dashboard link | "Get my McKID dashboard URL" |
| Update OAuth redirect URIs | "Update redirect URIs for my app" |
| Troubleshoot ingress / subdomain | "My ingress is rejected" or "Subdomain prefix changed" |
