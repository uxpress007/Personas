module "lrah" {
  source  = "terraform.mckinsey.cloud/FIRM-TF-MODULES/lrah/aws"
  version = "0.17.0"

  // PLATFORM CONFIGURATION **DO NOT EDIT**
  // The following variables are automatically populated by the platform
  eks_oidc_provider_url = var.eks_oidc_provider_url
  user_environment_id   = var.user_environment_id
  pmck_instance_id      = var.pmck_instance_id
  subdomain_prefix      = var.subdomain_prefix

  // USER CONFIGURATION
  // WARNING: replacing the name of the database will result in data loss as the database will be recreated
  postgresql_databases = {
    // create a database 'mydb' with an `owner` role as owner
    # "mydb" : {
    #   owner = "owner"
    #   roles = {
    #     "owner" : {
    #       generate_password = true
    #     }
    #   }
    # }
  }

  // WARNING: replacing the name of the database will result in data loss as the database will be recreated
  mysql_databases = {
    // create a MySQL database 'mydb' with an owner and app user
    # "mydb" : {
    #   owner = {
    #     name = "dbowner"
    #   }
    #   app_users = {
    #     "appuser" : {
    #       privileges = ["SELECT", "INSERT", "UPDATE", "DELETE"]
    #       tables     = ["*"]
    #     }
    #   }
    # }
  }

  // WARNING: replacing the name of the bucket will result in data loss as the bucket will be recreated
  s3_buckets = {
    // create an s3 bucket 'mybucket' with default configuration
    # "mybucket" : {}
  }
}
