{
    "quiz": {
        "Id": 3,
        "name": "Practice Quiz 3",
        "logo" : "data/img/IAM.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "When authenticating with external Identity Providers (eg. Google) which of the following are the correct sequence of steps?",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1) A user logs in to the AWS platform using their Google credentials. 2) AWS authenticate with Google to check the credentials. 3) Temporary Security Access is granted to AWS.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1) A user authenticates with Google first. They are then given an ID token by Google. An API call called AssumeRoleWithWebIdentity is then used in conjunction with the ID token. A user is then granted temporary security credentials.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Google users cannot use their credentials to access the AWS platform.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "1) A user makes the AssumeRoleWithWebIdentity API Call. 2) The user is then redirected to Google to authenticate. 3) Once authenticated the user is given an ID token. 4) The user is then granted temporary access to the AWS platform.", "IsAnswer": false }]
    },
    {
        "Id": 1011,
        "Name": "The AWS sign-in endpoint for SAML is https://signin.aws.amazon.com/saml", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 1012,
        "Name": "When federating with Active Directory for single-sign on, which of the following is the correct sequence of steps?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's web browser receives a SAML assertion from the AD server, 4) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the GiveUserSAMLAccess API request is used to request temporary security credentials. 5) The user is then able to access the AWS Console.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1) The user navigates to the AWS console, 2) The user enter in their active directory single sign on credentials in to AWS, 3) The user's web browser receives a SAML assertion from AWS, 4) The user is then able to access the AWS Console.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's web browser receives a SAML assertion from the AD server, 4) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the AssumeRoleWithSAML API request is used to request temporary security credentials. 5) The user is then able to access the AWS Console.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the AssumeRoleWithSAML API request is used to request temporary security credentials. 4) The user's web browser receives a SAML assertion from the AD server. 5) The user is then able to access the AWS Console.", "IsAnswer": false }]
        
    },
    {
        "Id": 1013,
        "Name": "An autoscaling group is launched with a cluster of EC2 instances. These EC2 instances will need to write custom metric to Cloud Watch and will need the appropriate permissions in which to do this. What is the most secure way to enable this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a unique user in IAM with CloudWatch permissions and modify the autoscaling group to include a boot strap script that passes the EC2 instance that users credentials.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a unique user in IAM with CloudWatch permissions and store these credentials in GitHub. Have the EC2 instances pull these credentials when they need to log to CloudWatch", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM role with CloudWatch permissions and modify the autoscaling launch configuration to use EC2 instances that have been assigned the new role.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM role with CloudWatch permissions and assign this to RDS. The existing EC2 instances will automatically be able to report to CloudWatch via RDS.", "IsAnswer": false }]
        
    },
    {
        "Id": 1014,
        "Name": "Which operation should you call to request temporary security credentials from the AWS platform when federating with Active Directory", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GetRoleWithSAML", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AssumeRoleWithSAML", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRole", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SAMLObtainRole", "IsAnswer": false}]
        
    },
    {
        "Id": 1015,
        "Name": "You have to call this API to obtain temporary security credentials when authenticating with external Identity Providers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GetRoleWithWebIdentity", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "GetRole", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentityProvider", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentity", "IsAnswer": true }]
        
    },
    {
        "Id": 1016,
        "Name": "{ 'Version': '2012-10-17', 'Statement': [ { 'Action': [ 'autoscaling:Describe*', 'cloudwatch:*', 'logs:*', 'sns:*' ], 'Effect': 'Allow', 'Resource': '*' } ] } ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "This policy Allows full access to RDS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "This policy Allows Read Only Access to CloudWatch", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "This policy Allows Write & Read Access to Cloudwatch only. ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "This policy Allows full access to CloudWatch", "IsAnswer": true }]
        
    },
    {
        "Id": 1017,
        "Name": "Your EC2 instance needs to access the image files in your S3 bucket. What is the best way to arrange access for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use CLI and save the security id and key in an encrypted file under the /etc folder on your EC2 instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write a java client using the AWS Java SDK and access the security id and key from a properties file stored under the /etc folder", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM role that has full access to S3 and assign this role to the EC2 instance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "An EC2 instance cannot access files in a S3 bucket", "IsAnswer": false }]
    },
    {
        "Id": 1018,
        "Name": "A stateless web application runs on a m4.10xlarge EC2 instance. The application is both memory and CPU intensive and is not performing well when under heavy load. Users are reporting long delays in the application's performance. The application itself maintains its state in DynamoDB. The DynamoDB table is properly provisioned and responses are returning really fast. What option below will best resolve this issue?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a DynamoDB read replica to further scale the database out.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DyanmoDB is not performing fast enough due to the amount of load. Cache the queries using Elasticache.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The latency issue is being caused because the EC2 instance and the DynamoDB table are not in the same availability zone. Move the EC2 instance to same AZ as the DynamoDB table.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "There is obviously an issue with the memory/CPU load. Provision another m4.10xlarge EC2 instance and place both EC2 instances behind an Elastic Load Balancer to help even the load.", "IsAnswer": true }]
        
    },
    {
        "Id": 1019,
        "Name": "Which of these best describes IAM.",
        
        "Options": [
         { "Id": 1055, "QuestionId": 1010, "Name": "IAM allows you to manage users passwords only. AWS staff must create new users for your organisation. This is done by raising a ticket.", "IsAnswer": false },
         { "Id": 1056, "QuestionId": 1010, "Name": "IAM stands for Innovative Application Management and it allows you to deploy and manage applications in the AWS Cloud.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "IAM allows you to manage permissions for AWS resources only.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "IAM allows you to manage users, groups and roles and their corresponding level of access to the AWS Platform.", "IsAnswer": true }]
        
    }
     ]
}