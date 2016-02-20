{
    "quiz": {
        "Id": 15,
        "name": "Certification Exam 3",
        "logo" : "data/img/certified.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You can select a specific Availability Zone in which to place your DynamoDB Table", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]

    },
    {
        "Id": 2,
        "Name": "Amazon SWF is useful for automating workflows that include long-running human tasks (e.g. approvals, reviews, investigations, etc.) Amazon SWF reliably tracks the status of processing steps that run up to several days or months.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
   {
        "Id": 3,
        "Name": "In order to enable encryption at rest using EC2 and Elastic Block Store you need to", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Mount the EBS volume in to S3 and then encrypt the bucket using a bucket policy.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure encryption using X.509 certificates", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure encryption using the appropriate Operating Systems file system", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure encryption when creating the EBS volume", "IsAnswer": true }]
    },
     {
        "Id": 4,
        "Name": "Ephemeral storage is temporary block level storage that only lives during the life of an instance", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
     {
        "Id": 5,
        "Name": "A decider (with regard to SWF) is:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The decider is a systems administrator who must decided on how an SWF is designed.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The decider is a person in the Amazon warehouse who must decide on what products to deliver.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The decider is a program that controls the coordination of tasks, i.e. their ordering, concurrency, and scheduling according to the application logic.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "The decider is an EC2 instance which monitors SWF and decides whether to delete a message in SWF or not.", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "Which service allows you to send a physical data device to Amazon in order to transfer data to the AWS cloud?", 

        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Transfer Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Import/Export", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Upload API", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Fulfilment Service", "IsAnswer": false }]
    },
    {
        "Id": 7,
        "Name": "Elastic Beanstalk automatically provisions and configures deployment environments for developers.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]

    },
     {
        "Id": 8,
       "Name": "Port scanning is only allowed if a request is submitted to Amazon and Amazon grants permissions to the account owner.", 
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]

    },
    {
        "Id": 9,
        "Name": "What is the HTTP code you would see if once you successfully place a file in an S3 bucket?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "200", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "5xx", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "4xx", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "You have 2 CloudFormation templates. One is for spinning up an architecture stack for enterprise apps and the other for gaming apps. Which of the following describes best when it comes to cost.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The template for spinning up enterprise architecture will cost more since enterprise apps typically demand a large & complex framework.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The template for spinning up gaming architecture will cost more since gaming apps require intensive CPU cycles.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The cost of both the templates will be the same.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFormation is free but you are only charged for the underlying resources it builds.", "IsAnswer": true }]
        
    },
     {
        "Id": 11,
        "Name": "EBS volumes snapshots are backed by S3 storage type:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 12,
        "Name": "The maximum size of a General Purpose or SSD EBS  storage device is:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "100 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 TB", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "500 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 TB", "IsAnswer": false }]
        
    },
     {
        "Id": 13,
        "Name": "What happens to the an instance's Ephemeral storage when the instance is stopped.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data persists on the storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Data is backed to S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "All data is lost.", "IsAnswer": true }]
        
    },
     {
        "Id": 14,
        "Name": "What feature would you utilize to categorize your EC2 instances by application/groups/or purpose? ", 
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Tags", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Labels", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Folders", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Categories", "IsAnswer": false }]
        
    },
     {
        "Id": 15,
       "Name": "What is the default region in AWS?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "us-west-2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-east-1", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-northeast-1", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-southwest-1", "IsAnswer": false }]
        
    },
     {
        "Id": 16,
       "Name": "Which command would you use to create a snapshot using the AWS CLI?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "create-snapshot", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-snapshot", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "ec2-create-snapshot", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "ec2 create ss", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
       "Name": "RDS snapshots are automatically stored in",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "RDBMS", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
       "Name": "The base URI for all instance metadata requests is:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/meta-data", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/user-data", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "http://169.254.169.254/meta-data", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://169.254.169.254/user-data", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
       "Name": "The URL for getting user-data in EC2 is:",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/meta-data", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/user-data", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "http://169.254.169.254/meta-data", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://169.254.169.254/user-data", "IsAnswer": false }]
    },
     {
        "Id": 20,
      "Name": "A __________ can be used to create server resources of different instance types. You can think of it as a virtual machine image/template.",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Stack", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Template", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AMI", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "EC2 bootstrap script", "IsAnswer": false}]
        
    },
     {
        "Id": 21,
       "Name": "You need this to customize your AMI and install custom software components on startup of your EC2 instances.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A Python script", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A Javascript program", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run a bootstrap script as soon as the instance is launched.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A Java program", "IsAnswer": false}]
        
    },
     {
        "Id": 22,
       "Name": "Currently there are ______ regions in AWS.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "20", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "11", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "40", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "30", "IsAnswer": false}]
        
    },
     {
        "Id": 23,
       "Name": "There are __________ edge locations:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "45", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "35", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "52", "IsAnswer": true }]
        
    },
     {
        "Id": 24,
       "Name": "Which of the following languages does not have an officially supported AWS SDK?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "C", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Ruby", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "C#", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Objective C (iOS)", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
       "Name": "Which of the following cannot be used to deploy systems to AWS?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Elastic Beanstalk", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "OpsWorks", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Kinesis", "IsAnswer": true }]
        
    },
     {
        "Id": 26,
       "Name": "Which of the following can be used to host a static website?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false }]
        
    },
     {
        "Id": 27,
       "Name": "User, Group, Role are associated with which of the following services?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "IAM", "IsAnswer": true }]
        
    },
     {
        "Id": 28,
     "Name": "You need a service that records AWS API calls for your account and delivers log files to you. Which would you use?",    
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudWatch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AppStream", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudTrail", "IsAnswer": true }]
        
    },
     {
        "Id": 29,
      "Name": "What command would you use from CLI to attach an EBS volume to a EC2 instance?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "attach-volume", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-mount-volume ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-attach-volume", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-connect-volume ", "IsAnswer": false }]
        
    },
     {
        "Id": 30,
      "Name": "Which of the following is not associated with SWF?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Worker", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Initiator", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Decider", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Activity", "IsAnswer": false }]
        
    },
    {
        "Id": 31,
        "Name": "Per the AWS Acceptable Use Policy, penetration testing of EC2 instances:", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "may be performed by the customer against their own instances, only if performed from EC2 instances.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "may be performed by AWS, and is periodically performed by AWS.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "may be performed by AWS, and will be performed by AWS upon customer request. ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "are expressly prohibited under all circumstances.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "may be performed by the customer against their own instances with prior authorization from AWS", "IsAnswer": true }]
    },
    {
        "Id": 32,
        "Name": "When working with Amazon RDS, by default AWS is responsible for implementing which two management-related activities? (Pick 2 correct answers)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Importing data and optimizing queries ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Installing and periodically patching the database software ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Creating and maintaining automated database backups with a point-in-time recovery of up to five minutes", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Creating and maintaining automated database backups in compliance with regulatory long-term retention requirements", "IsAnswer": true }]
    },
    {
        "Id": 33,
        "Name": "You maintain an application on AWS to provide development and test platforms for your developers. Currently both environments consist of an m1.small EC2 instance. Your developers notice performance degradation as they increase network load in the test environment. How would you mitigate these performance issues in the test environment?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Upgrade the m1.small to a larger instance type ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add an additional ENI to the test instance ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the EBS optimized option to offload EBS traffic ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure Amazon Cloudwatch to provision more network bandwidth when network utilization exceeds 80% ", "IsAnswer": false }]
    },
    {
        "Id": 34,
        "Name": "You have been tasked with identifying an appropriate storage solution for a NoSQL database that requires random I/O reads of greater than 100,000 4kB IOPS. Which EC2 option will meet this requirement?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EBS provisioned IOPS ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SSD instance store ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "EBS optimized instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "High Storage instance configured in RAID 10 ", "IsAnswer": true }]
    },
    {
        "Id": 35,
        "Name": "Instance A and instance B are running in two different subnets A and B of a VPC. Instance A is not able to ping instance B. What are two possible reasons for this? (Pick 2 correct answers)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The routing table of subnet A has no target route to subnet B", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The security group attached to instance B does not allow inbound ICMP traffic ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "The policy linked to the IAM role on instance A is not configured correctly ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The NACL on subnet B does not allow outbound ICMP traffic", "IsAnswer": true }]
    },
    {
        "Id": 36,
        "Name": "Which features can be used to restrict access to data in S3? (Pick 2 correct answers)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a CloudFront distribution for the bucket. ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set an S3 bucket policy. ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use S3 Virtual Hosting. ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Set an S3 ACL on the bucket or the object. ", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Enable IAM Identity Federation. ", "IsAnswer": false }]
    },
    {
        "Id": 37,
        "Name": "You need to establish a backup and archiving strategy for your company using AWS. Documents should be immediately accessible for 3 months and available for 5 years for compliance reasons. Which AWS service fulfills these requirements in the most cost effective way?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use StorageGateway to store data to S3 and use life-cycle policies to move the data into Redshift for long-time archiving", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use DirectConnect to upload data to S3 and use IAM policies to move the data into Glacier for longtime archiving", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Upload the data on EBS, use life-cycle policies to move EBS snapshots into S3 and later into Glacier for long-time archiving ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Upload data to S3 and use life-cycle policies to move the data into Glacier for long-time archiving", "IsAnswer": true }]
    },
    {
        "Id": 38,
        "Name": "Your web application is using Auto Scaling and Elastic Load Balancing. You want to monitor the application to ensure that it maintains a good quality of service for your customers, defined by the applicationˈs page load time. What metric in Amazon CloudWatch can best be used for this?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Latency reported by the elastic load balancer (ELB)", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "RequestCount reported by the ELB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Aggregate NetworkIn for the web tier", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Aggregate CPUUtilization for the web tier", "IsAnswer": false }]
    },
    {
        "Id": 39,
        "Name": "You have an Amazon VPC with one private subnet and one public subnet with a Network Address Translator (NAT) server. You are creating a group of Amazon Elastic Cloud Compute (EC2) instances that configure themselves at startup via downloading a bootstrapping script from Amazon Simple Storage Service (S3) that deploys an application via GIT. Which setup provides the highest level of security?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EC2 instances in private subnet, no EIPs, route outgoing traffic via the NAT", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EC2 instances in public subnet , no EIPs, route outgoing traffic via the Internet Gateway (IGW)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EC2 instances in private subnet, assign EIPs, route outgoing traffic via the Internet Gateway (IGW)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon EC2 instances in public subnet, assign EIPs, route outgoing traffic via the NAT", "IsAnswer": false }]
    },
    {
        "Id": 40,
        "Name": "You manage your companyˈs VPC in an AWS region and give other teams access to create instances and modify security groups inside subnets dedicated to their teams. You need to make sure the development team canˈt do anything in their subnets that could allow their instances to impact the production environment instances in the production subnets. How can you separate parts of your VPC so the instances for development canˈt interfere with the ones from production?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Make sure the subnets only allow routing via an IGW and not the local router.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up NACLs that restrict what subnets can talk to each other.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Put the two subnets into CIDR blocks that are very far apart.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Make sure the development subnets are in one Availability Zone and the production is in another", "IsAnswer": false }]
    },
    {
        "Id": 41,
        "Name": "Which of the following is an example of a good Amazon DynamoDB hash key schema for provisioned throughput efficiency?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Student ID, where every student has a unique identification number", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "College ID, where there are two colleges in the university", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Class ID, where every student is in one of four classes", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Tuition Plan, where the vast majority of students are in-state and the rest are out-of-state", "IsAnswer": false }]
    },
    {
        "Id": 42,
        "Name": "A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources they consume and keep those resources separate from the resources of other divisions. Which of the following options, when used together will support the autonomy/control of divisions while enabling corporate IT to maintain governance and cost oversight? Choose 2 answers:", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use AWS Consolidated Billing and disable AWS root account access for the child accounts.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Enable IAM cross-account access for all corporate IT administrators in each child account.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create separate VPCs for each division within the corporate IT AWS account.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS Consolidated Billing to link the divisions' accounts to a parent corporate account.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account's Amazon S3 'Log' bucket.", "IsAnswer": true }]
    },
    {
        "Id": 43,
        "Name": "A customer wants to leverage Amazon Simple Storage Service (S3) and Amazon Glacier as part of their backup and archive infrastructure. The customer plans to use third-party software to support this integration. Which approach will limit the access of the third party software to only the Amazon S3 bucket named 'thirdparty-backup'?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A custom bucket policy limited to the Amazon S3 API in the Amazon Glacier archive 'thirdparty-backup'", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A custom bucket policy limited to the Amazon S3 API in 'thirdparty-backup'", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A custom IAM user policy limited to the Amazon S3 API for the Amazon Glacier archive 'thirdparty-backup'", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A custom IAM user policy limited to the Amazon S3 API in 'thirdparty-backup'", "IsAnswer": true }]
    },
    {
        "Id": 44,
        "Name": "A comp. has a workflow that sends video files from their on-premise system to AWS for transcoding.They use EC2 worker that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario.", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SQS guarantees the order of the messages.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS synchronously provides transcoding output.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SQS checks the health of the worker instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SQS helps to facilitate horizontal scaling of encoding tasks.", "IsAnswer": true }]
    },
    {
        "Id": 45,
        "Name": "As your web application has increased in popularity, reports of performance issues have grown. The current configuration initiates scaling actions based on Average CPU utilization; however during reports of slowness, CloudWatch graphs have shown that average CPU utilization remains steady at 30%. This is well below the alarm threshold of 55%. Your developers have discovered that performance degradation occurs on an instance when it is processing more than 300 threads and that this is due to the special way the application is programmed. What is the best way to ensure that your application scales to match demand?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Launch 3 to 7 additional instances outside of the autoscaling group to handle the additional load", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Empirically determine the expected CPU use for 300 concurrent sessions and adjust the CloudWatch alarm threshold to be that CPU use.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Populate a custom CloudWatch metric for concurrent sessions and initiate scaling actions based on that metric instead of on CPU use.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add a script to each instance to detect the number of concurrent sessions. If the number of sessions remains over 300 for five minutes, have the instance increase the desired capacity of the AutoScaling group by one.", "IsAnswer": false }]
    },
    {
        "Id": 46,
        "Name": "You are using ElastiCache to cache your web application. The caching seems be running slower and slower and you want to diagnose the cause of this issue. You are using Memcached as your caching engine. What metric should you use to determine whether or not the amount of memory reserved for Memcached connections and other miscellaneous overhead, does not exceed 50Mb?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Memcached-Memory-Overhead", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Memcached_Connections_Overhead", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Reddis_Connections_Overhead", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Reddis-Memory-Overhead.", "IsAnswer": false }]
    },
    {
        "Id": 47,
        "Name": "In order to force a failover from one AZ to another using RDS, you should...", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Right click on the RDS instance and select 'Force Failover'", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Using the API call 'RDSForceFailover'", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You can't force a failover. A failover will only occur if something naturally goes wrong with the AWS estate.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "By manually rebooting your RDS instance.", "IsAnswer": true }]
    },
    {
        "Id": 48,
        "Name": "In which of the following scenarios should you use a read replica? (Choose 3 answers)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Scale beyond the compute or I/O capacity of a single DB Instance for read-heavy database workloads. This excess read traffic can be directed to one or more Read Replicas.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use read replica to povide greater redundancy via automatic failovers.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Serve read traffic while the source DB Instance is unavailable. If your source DB Instance cannot take I/O requests (e.g. due to I/O suspension for backups or scheduled maintenance), you can direct read traffic to your Read Replica(s).", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Business reporting or data warehousing scenarios; you may want business reporting queries to run against a Read Replica, rather than your primary, production DB Instance.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "With Multi-AZ RDS you automatically get a Read replica to handle excess traffic", "IsAnswer": false }]
    },
    {
        "Id": 49,
        "Name": "Which of the following is true?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You can have read replica's of read replicas.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Read Replica's can have also have multiple AZ's for redundancy.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 50,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 51,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 52,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 53,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 54,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 55,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 56,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 57,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 58,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 59,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    },
    {
        "Id": 60,
        "Name": "", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    }
    ]
}

