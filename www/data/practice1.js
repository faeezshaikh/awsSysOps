{
    "quiz": {
        "Id": 13,
        "name": "Certification Exam 2",
        "logo" : "data/img/exam.jpg"
    },
    "questions": [{
        "Id": 1,
        "Name": "With reference to DynamoDB, which of these is idempotent?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Atomic Counter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Conditional Writes", "IsAnswer": true }]

    },
    {
        "Id": 2,
        "Name": "DynamoDB supports cross-table joins.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "Which statement about DynamoDB is true?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB uses a pessimistic locking model ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB does not use optimistic concurrency control ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB uses conditional writes for consistency", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB restricts item access during reads", "IsAnswer": false }]

    },
     {
        "Id": 4,
        "Name": "You have an application that requires to read 10 items of 6 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "20 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "5 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 5,
        "Name": " You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "9 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire strongly consistent reads?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": true }]

    },
    {
        "Id": 7,
        "Name": "You have an application that requires to write 5 items of 10 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "8.5 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 8,
        "Name": "You have an application that requires to write 5 items of 10.5 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "11 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "55 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "Your app needs to push notifications to your user's mobile devices. Which of the following services will you use for that?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SNS", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "SAML stands for :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Assertion Markup Language", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Secured Assertive Markup Language.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Assertive Markup Language.", "IsAnswer": false }]
        
    },
     {
        "Id": 11,
        "Name": "With regard to IAM, MFA is an acronym for:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Multi-Form authentication", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Multi-Faceted authentication.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Multi-Factor authentication .", "IsAnswer": true }]
        
    },
     {
        "Id": 12,
        "Name": "You cannot change the IAM role on a running EC2 instance. You can change the permissions on the IAM role associated with a running instance, and the updated permissions will take effect almost immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 13,
        "Name": "You cannot associate an IAM role with an already running EC2 instance.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 14,
        "Name": "If you delete an IAM role that’s associated with a running EC2 instance, any application running on that instance that's using the role will be denied access immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 15,
        "Name": "Which of the following operation should be invoked when federating with Facebook?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AssumeRoleWithSAML", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentity", "IsAnswer": true }]
        
    },
     {
        "Id": 16,
        "Name": "In AWS, Templates and Stacks are related to:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
        "Name": "Your business has a requirement to setup a server in the cloud, install a RDMS on it and install and run Apache web server. This stack should also be quickly replicable. Which AWS service will you use for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Cloud Watch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Streaming API", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
        "Name": "In CloudFormation is it possible to save the data when a stack is deleted?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "No", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
        "Name": "You app involves processing payments and delivering music files to customers. You plan to use SQS to help facilitate this. You need to ensure that the payment process takes priority over the delivery of music files. What is the best way to achieve this.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use 2 SQS queues for the platform. Have  EC2  poll the payment SQS queue first. If this queue is empty, then poll the music files queue.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the HighPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the SetPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false}]
        
    },
     {
        "Id": 20,
        "Name": "Your EC2 instances download jobs from the SQS queue, however they are taking too long to process them. What API call can you use to extend the length of time to process the jobs?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AddMessageTime", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ChangeMessageVisibility", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "ExtendMessageTime", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "RenewMessageTime", "IsAnswer": false}]
        
    },
     {
        "Id": 21,
        "Name": "In SQS, maximum Long Poll timeout is: ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "60 seconds", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "60 minutes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "5 minutes", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "20 seconds", "IsAnswer": true}]
        
    },
     {
        "Id": 22,
        "Name": "Which language does the AmazonSQSBufferedAsyncClient support", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "PHP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Python", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Java", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "C#", "IsAnswer": false}]
        
    },
     {
        "Id": 23,
        "Name": "All messages have a globally unique ID that Amazon SQS returns when the message is delivered to the queue.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 24,
        "Name": "You wish to determine the time-in-queue for a message in SQS. Whats the best way to do this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Request the “SentTimestamp” attribute when receiving a message. Subtract that value from the current time.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Read the 'time-in-queue' attribute on the message", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You cannot determine this.", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
        "Name": "What is the “SenderId” attribute value of a message in the case of anonymous access", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "IP Address of the sender", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Login id of the user", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Indeterminate", "IsAnswer": false }]
        
    },
     {
        "Id": 26,
        "Name": "What is the  maximum limit for message visibility?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "12 hours", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "One week", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1 month", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1 day", "IsAnswer": false }]
        
    },
     {
        "Id": 27,
        "Name": "Amazon does not offer Dead Letter Queues (DLQs)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 28,
        "Name": "Amazon provides first-in-first-out (FIFO) access to messages", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 29,
        "Name": "Which of the following statements about SQS is true?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and messages will be delivered in First in, First out order ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and message delivery order is indeterminate", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and messages will be delivered in First in, First out order", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and message delivery order is indeterminate ", "IsAnswer": true }]
        
    },
     {
        "Id": 30,
        "Name": "While launching a RDS instance in Amazon VPC, what is the best practice keeping security in mind.", 
        
        "Options": [
                    { "Id": 1055, "QuestionId": 1010, "Name": "Launch the RDS in a public subnet so that clients can query the database from anywhere in the world.", "IsAnswer": false },
                    { "Id": 1056, "QuestionId": 1010, "Name": "Launch the RDS on-premise and connect it to the VPC using AWS Direct Connect.", "IsAnswer": false },
                    { "Id": 1057, "QuestionId": 1010, "Name": "Launch the RDS in a private subnet ", "IsAnswer": true },
                    { "Id": 1058, "QuestionId": 1010, "Name": "RDS should always reside on the same server as the EC2 instance.", "IsAnswer": false }]

            },
    {
        "Id": 31,
        "Name": "Which of the following is not true:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is possible to have private subnets in VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You may only have 1 internet gateway per VPC", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A subnet can be associated with multiple Access Control Lists", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "In Amazon VPC, an instance retains its private IP", "IsAnswer": false }]

    },
    {
        "Id": 32,
        "Name": "The max number of VPCs allowed in each AWS region is :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": true }]
        
    },
   {
        "Id": 33,
        "Name": "How many internet gateways can you attach to a VPC?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": false }]
    },
     {
        "Id": 34,
        "Name": "A corporate web application is deployed within an Amazon VPC, and is connected to the corporate data center via IPSec VPN. The application must authenticate against the on-premise LDAP server. Once authenticated, logged-in users can only access an S3 keyspace specific to the user. Which approach cannot satisfy the objectives?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The application authenticates against LDAP. The application then calls the IAM Security Service to login to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket. ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM Role. The application can use the temporary credentials to access the appropriate S3 bucket.  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Develop an identity broker which authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.", "IsAnswer": true }]
    },
     {
        "Id": 35,
        "Name": "Which of the following is not a valid S3 storage class:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Standard", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "RRS", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3-IA", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Glacier", "IsAnswer": false }]

    },
    {
        "Id": 36,
        "Name": "You attempt to store an object in the US-STANDARD region in Amazon S3, and receive a confirmation that it has been successfully stored. You then immediately make another API call and attempt to read this object. S3 tells you that the object does not exist. What could explain this behavior? ", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Objects in Amazon S3 do not become visible until they are replicated to a second region. ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "US-STANDARD imposes a 1 second delay before new objects are readable", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You exceeded the bucket object limit, and once this limit is raised the object will be visible. ", "IsAnswer": false }]

    },
    {
        "Id": 37,
        "Name": "You are hosting a static website in an S3 bucket which uses Javascript to reference assets in another S3 bucket. For some reason however these assets are not displaying when users browse to the site. What could be the problem?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You cannot use one S3 bucket to reference another S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3 does not support Javascript  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You haven't enabled Cross Origin Resource Sharing (CORS) on the bucket where the assets are stored.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "You need to open port 80 on the appropriate security group in which the S3 bucket is located.", "IsAnswer": false }]

    },
     {
        "Id": 38,
       "Name": "Your application is trying to upload a 6 GB file to Simple Storage Service and receive a 'Your proposed upload exceeds the maximum allowed object size.' error message. What is a possible solution for this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Contact support to increase your object size limit", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the large object upload API for this object  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the multi-part upload API for this object ", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None, Simple Storage Service objects are limited to 5 GB ", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Upload to a different region ", "IsAnswer": false }]

    },
    {
        "Id": 39,
        "Name": "What is the HTTP code you would see if once you successfully place a file in an S3 bucket?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "200", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "5xx", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4xx", "IsAnswer": false }]
        
    },
     {
        "Id": 40,
       "Name": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store photos on an EBS volume of the web server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Block the IPs of the offending websites in Security Groups.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use CloudFront distributions for static content", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Remove public read access and use signed URLs with expiry dates.", "IsAnswer": true }]
        
    },
     {
        "Id": 41,
      "Name": "For downloading private data directly from S3, you can insert a pre-signed URL into a web page before giving it to your users.",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 42,
        "Name": "A newly created S3 bucket is public by default:",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 43,
       "Name": "Domain, Workers, Deciders are associated with which of the following AWS services?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false }]
        
    },
     {
        "Id": 44,
         "Name": "Maintaining your application’s execution state (ie. which steps have completed, which ones are running, etc.) is a use case for which AWS service?.",    
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
     {
        "Id": 45,
       "Name": "What is a worker with respect to SWF?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Workers are programs that interact with Amazon SWF to get tasks, process received tasks, and return the results.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Workers are EC2 instances which can create S3 buckets and process SQS messages.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workers are the people in the warehouse processing orders for Amazon", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Workers are a component of IIS which run on windows platform under the w3wp.exe process.", "IsAnswer": false }]
        
    },
     {
        "Id": 46,
       "Name": "_______ allows you to deliver static and video content over edge locations.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "HTTP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SDS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFront CDN", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 47,
           "Name": "One EC2 instance can have these many Elastic IPs assigned to it (per ENI) :",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15", "IsAnswer": false }]
        
    },
     {
        "Id": 48,
       "Name": "Your organization has decided to move its entire data warehouse of 20 TB to the AWS cloud. What service would you recommend that would be the most time and cost effective for this purpose?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Megaupload Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Import/Export", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Streaming API", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Fulfilment Service", "IsAnswer": false }]
        
    },
     {
        "Id": 49,
       "Name": "Your current architecture stack consists of 3 EC2 instances, one load balancer, 1 route53, 5 S3 buckets and CloudFront CDN for content delivery for your offices in New York. Your company would like to quickly replicate this architecture for its Middle East offices, closer to that region. What would you suggest?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using the AWS SDK for Java write a program that will replicate the stack in another region.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Hire AWS certified staff in the Middle East offices to create a similar stack in another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudFormation JSON templates to quickly replicate the stack in another region..", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "You would have to manually create similar instances and other entities in another region.", "IsAnswer": false}]
        
    },
     {
        "Id": 50,
      "Name": "SWF provides consistent execution and ongoing visibility at each task level",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 51,
       "Name": "Amazon does not allow you to scan port under any circumstance, even on your own account?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True. This violates AWS security policy.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False. Customers may request permission to conduct vulnerability scans to meet their specific compliance requirements.", "IsAnswer": true}]
        
    },
     {
        "Id": 52,
       "Name": "AWS provides Ingress/Egress filtering on all incoming and outgoing data traffic.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False. VPC cannot support this.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True. VPC supports firewall solution enabling filtering on both ingress & egress instance traffic", "IsAnswer": true}]
        
    },
     {
        "Id": 53,
       "Name": "AWS provides DOS protection on the network layer as part of the shared security model.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 54,
       "Name": "What is the best way to move an EBS volume to another availability zone?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Import / Export.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Backup to S3 and then restore data from S3 to another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a snapshot of the volume and then create a volume based off the snapshot in the new availability zone.", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Submit a request to Amazon with a snapshot of the volume to be moved.", "IsAnswer": false }]
        
    },
     {
        "Id": 55,
       "Name": "You can attach one EBS volume to more than one instance at one time.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    },
     {
        "Id": 56,
       "Name": "One single EC2 instance can have multiple EBS volumes attached to it.",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 57,
       "Name": "Company B provides an online image recognition service and utilizes SQS to decouple system components for scalability. The SQS consumers poll the imaging queue as often as possible to keep endto-end throughput as high as possible. However, Company B is realizing that polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can Company B reduce the number of empty responses?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set the imaging queue VisibilityTimeout attribute to 20 seconds ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set the imaging queue MessageRetentionPeriod attribute to 20 seconds ", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Set the DelaySeconds parameter of a message to 20 seconds  ", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Set the imaging queue ReceiveMessageWaitTimeSeconds attribute to 20 seconds ", "IsAnswer": true}]
        
    },
     {
        "Id": 58,
     "Name": "EC2 instances are launched from Amazon Machine Images (AMIs). A given public AMI:",    
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same country as the AMI is stored ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "can be used to launch EC2 instances in any AWS region ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS region as the AMI is stored", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored", "IsAnswer": false }]
        
    },
     {
        "Id": 59,
      "Name": "You have reached your account limit for the number of CloudFormation stacks in a region. How do you increase your limit?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Make an API call ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Contact AWS ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the console ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You cannot increase your limit ", "IsAnswer": false }]
        
    },
     {
        "Id": 60,
      "Name": "The default limit on the CloudFormation stacks you can create is :",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "20", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "50", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "100", "IsAnswer": false }]
        
    }]
}

