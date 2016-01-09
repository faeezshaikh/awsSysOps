{
    "quiz": {
        "Id": 400,
        "name": "Mini Quiz 1",
        "logo" : "data/img/S3.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You configured a standy for a RDS instance. Will the stand-by instance be in the same Availability Zone as the primary?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "No", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Only for MySql RDS instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Only if configured at launch", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "Which of the following is best suited for Database style apps that need frequent random reads and writes across datasets?", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "EBS", "IsAnswer": true },
             { "Id": 1057, "QuestionId": 1010, "Name": "S3 RRS", "IsAnswer": false },
             { "Id": 1058, "QuestionId": 1010, "Name": "Root device", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? Choose 2 answers", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Simple Email Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Notification Service", "IsAnswer": true }]
        
    },
    {
        "Id": 4,
        "Name": "Which of the following are best suited for Amazon DynamoDB? Choose 3 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Storing BLOB data.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Managing web sessions.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Storing JSON documents.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Storing metadata for Amazon S3 objects.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Running relational joins and complex updates.", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "Storing large amounts of infrequently accessed data.", "IsAnswer": false }] 
    },
    {
        "Id": 5,
        "Name": "A web-startup is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower overall CPU resources for the web tier?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EBS volume", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EC2 instance store", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS instance", "IsAnswer": false }]
    },
    {
        "Id": 6,
        "Name": "Which of the following services natively encrypts data at rest within an AWS region? Choose 2 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon CloudFront", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false }]
        
    },
    {
        "Id": 7,
        "Name": "The initial setting for the default security group is:", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
        "Name": "If your DB instance runs out of storage space or file system resources, its status will change to _____ and your DB Instance will no longer be available.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "storage-overflow", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "storage-full", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "storage-exceed", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "storage-overage", "IsAnswer": false}]
    },
    {
        "Id": 9,
        "Name": "For which of the following will you choose Provisioned IOPS over Standard RDS storage?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Production online transaction processing (OLTP) workloads.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Batch-oriented workloads", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workloads that are not sensitive to consistent performance", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "In the 'Detailed' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send _____ minute metrics to Amazon CloudWatch.", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "10", "IsAnswer": false }]
    }
     ]
}