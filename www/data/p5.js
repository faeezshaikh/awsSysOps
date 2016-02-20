{
    "quiz": {
        "Id": 5,
        "name": "Practice Quiz 5",
        "logo" : "data/img/S3.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "The backup policy of your company dicatates that backed up data should be quickly accessible within minutes for the first 6 months. After that, the data should be archived. Is this possible in AWS. If yes, how?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data can only be backed up once. so this is not possible.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a life cycle policy that automatically moves the data to Glacier after 6 months", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set a SWF workflow to send a reminder after 6 months for manually moving the data to Glacier.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using SWF, set a task to automatically backup data to Glacier after 6 months", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "A user is trying to setup a security policy for ELB. The user wants ELB to meet the cipher supported by the client by configuring the server order preference in ELB security policy. Which of the below mentioned preconfigured policies supports this feature?", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "ELBSecurity Policy-2014-01", "IsAnswer": true },
             { "Id": 1056, "QuestionId": 1010, "Name": "ELBSecurity Policy-2011-08", "IsAnswer": false },
             { "Id": 1057, "QuestionId": 1010, "Name": "ELBDefault Negotiation Policy", "IsAnswer": false },
             { "Id": 1058, "QuestionId": 1010, "Name": "ELBSample- OpenSSLDefault Cipher Policy", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "You need to delete a large number of objects from your S3 bucket. Whats the best way to do this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Delete objects one by one from the AWS console.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Multi-Object Delete to delete large numbers of objects from Amazon S3. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write a query to delete all objects in CLI", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
        "Name": "Objects smaller than 128KB will incur charges for S3-IA storage class:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }] 
    },
    {
        "Id": 5,
        "Name": "A user is using the AWS EC2. The user wants to make so that when there is an issue in the EC2 server, such as instance status failed, it should start a new instance in the user’s private cloud. Which AWS service helps to achieve this automation?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS CloudWatch + Cloudformation", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS CloudWatch + AWS AutoScaling + AWS ELB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudWatch + AWS VPC", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS CloudWatch + AWS SNS", "IsAnswer": false }]
    },
    {
        "Id": 6,
        "Name": "A user is trying to connect to a running EC2 instance using SSH. However, the user gets a connection time out error. Which of the below mentioned options is not a possible reason for rejection?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The access key to connect to the instance is wrong", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The security group is not configured properly", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The private key used to launch the instance is not correct", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The instance CPU is heavily loaded", "IsAnswer": true }]
        
    },
    {
        "Id": 7,
        "Name": "Individual Amazon S3 objects can range in size from _____ to ______", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1 bytes to 5 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "100 Kb to 10 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "0 byte to 5 Terabytes", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 byte to 5 TB", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
        "Name": "S3 uses this type of encryption for its buckets:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data Encryption Standard (DES)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Advanced Encryption Standard (AES) 256", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Advanced Encryption Standard (AES) 128", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "MDH 256", "IsAnswer": false}]
    },
    {
        "Id": 9,
        "Name": "The URL for a static hosting website in a bucket call 'cloudinstitute' inside New York would be: ", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "http://www.cloudinstitute.s3-website-ap-northeast-1.amazonaws.com", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://cloudinstitute.s3-website-ap-northeast-1.amazonaws.com", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "http://s3-website-ap-cloudinstitute.northeast-1.amazonaws.com", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://s3-website-ap-northeast-1.cloudinstitute.amazonaws.com", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "A user has configured ELB with three instances. The user wants to achieve High Availability as well as redundancy with ELB. Which of the below mentioned AWS services helps the user achieve this for ELB?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route 53", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Mechanical Turk", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Auto Scaling", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS EMR", "IsAnswer": false }]
    }
     ]
}