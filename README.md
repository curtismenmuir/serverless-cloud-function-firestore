# serverless-cloud-function-firestore
Sample project for NodeJS GCP Cloud Function using Serverless framework. 

Creates sample collections and documents in connected Firestore DB. Creates 2 similar functions (createDB and createDB2) which
essentially create the same DB records and collections. Demonstrates running multiple functions from same project.

Update serverless.yml to include projectID  and path to keyfile for GCP project service account. 

Install Serverless framework (community edition) and deploy from root of project with "serverless deploy" command.

Remove online instance with "serverless remove" command.
