# Deployer Platform Steering

Read-only reference guide for Deployer Cursor skills. This file is never modified --
it tells the agent where to find platform identity values and how to map them.

## Required Platform Identity Values

Deployer skills need three platform identity values at runtime:

| Key | Description |
|-----|-------------|
| `account-id` | AWS workload account ID |
| `env-id` | Deployer environment identifier |
| `region` | AWS region |

## Source of Truth

The actual values live in the `values.yaml` header comments of the instance's
environment directory:

```
deployer-apps/{instance}/{env}-{region}/manifests/values.yaml
```

To discover the path, scan `deployer-apps/` for the instance directory, then
locate the `{env}-{region}/` subdirectory within it.

## Value Mapping

Extract the values from the `values.yaml` header comment block using this mapping:

| `values.yaml` comment key | Maps to |
|---------------------------|---------|
| `AWSWorkloadAccountID` | `account-id` |
| `EnvironmentID` | `env-id` |
| `AWSWorkloadRegion` | `region` |

## Agent Instructions

1. Read this steering file to learn the mapping above.
2. Discover the instance path by scanning `deployer-apps/`.
3. Read `values.yaml` and parse the header comments to extract the three values.
4. Use those values for all naming formula substitutions throughout the skill session.
5. Never hardcode these values in skill files, rules, or steering documents.

---

## Platform Commands

> Read-only reference. Skills use these templates to build commands at runtime
> by substituting platform identity values. No skill modifies this section.

| Command | Template |
|---------|----------|
| SA role ARN lookup | `kubectl get configmap sa-role-{account-id}-{env-id} -n {env-id} -o jsonpath='{.data.arn}'` |
| Pipeline trigger | `gh workflow run {instance}-{env}-{region}-lrah-deploy-infra --ref main` |

---

## File Paths

> Read-only reference. Skills resolve concrete paths at runtime by substituting
> platform identity values. No skill modifies this section.

| Resource | Path template |
|----------|--------------|
| Terraform IaC | `deployer-apps/{instance}/{env}-{region}/iac/main.tf` |
| Helm values | `deployer-apps/{instance}/{env}-{region}/manifests/values.yaml` |
| IRSA key in values | `deployer.saReadWriteRoleARN` |
