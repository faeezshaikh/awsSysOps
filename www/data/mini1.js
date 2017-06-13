{
    "quiz": {
        "Id": 400,
        "name": "Certification Exam 1",
        "logo" : "data/img/S3.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "An EC2 instance requires programmatic access to AWS API so that it can access files from S3. Which of the following is the most secure way to do this?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup an IAM user for the instance to restrict access to AWS API and assign it at launch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Setup an IAM group with restricted AWS API access and put the instance in the group at launch.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Launch an instance with a IAM role to restrict AWS API access for the instance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Pass the AWS credentials in the User Data field when the instance is launched.", "IsAnswer": false }]

    },
    {
        "Id": 2,
        "Name": "A web app running on AWS uses cookie-based sessions to track logged-in users. Its running on EC2 instances in an auto-scaling group and the instances are fronted by a Elastic Load Balancer. When the load increases, autoscaling launches new instances, but the load on the other instances is not decreasing, causing the end-users to have a slow experience. Why is this happening?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The ELB DNS record's TTL is set too high.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The new instances are not being added to the ELB during the Autoscaling cooldown period.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The website uses dynamic content feature of Cloudfront which is keeping connections alive to the ELB", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The ELB is continuing to send requests with the previously established sessions to the same backend instances rather than spreading them out to the new instances.", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "With regard to AWS Direct Connect and IPSec VPN, which of the following is true?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Direct Connect provides greater redundancy than an internet-based VPN connection", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Direct Connect provides greater resiliency than an internet-based VPN connection", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Direct Connect provides greater bandwidth than an internet-based VPN connection", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Direct Connect provides greater control of network provider selection than an internet-based VPN connection", "IsAnswer": false }]
    },
     {
        "Id": 4,
        "Name": "A mobile app has already been downloaded several thousands of times. Which authentication solution will let clients access images in S3 and provide with the highest flexibility to rotate credentials?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use ACL to restrict access to AWS resources", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use S3 bucket policies with conditional statements restricted by IP address", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use IAM user per registered client with an IAM policy granting S3 access to the corresponding bucket", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Web Identity Federation based on AWS Security Token Service using an AWS IAM policy for the corresponding bucket", "IsAnswer": true }]
    },
     {
        "Id": 5,
        "Name": "As part of the failover process for a Multi-AZ RDS instance, which of the following is true?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The DNS record of the RDS endpoint is changed from primary to standby.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The IP of the primary DB instance is switched to the standby DB instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The failed RDS DB instance reboots.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A new DB instance is created in the standby availability zone.", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "While maintaning the Webserver component of a LAMP application, how can you grant developers in your group access to app log files to debug issues. The instances are in an AutoScaling group that frequently undergoes scaling.", 

        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "The developers should periodically poll events on the app instances via an API", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Connect each instance to an AutoScaling group and create a crontab entry to send logs to S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use a central logging server or service to archive logs to S3, and grant the developers access to the S3 buckets.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Share the AutoScaling Launch Config keypair with the developers and provide them with a list of app instances.", "IsAnswer": false }]
    },
    {
        "Id": 7,
        "Name": "An AWS VPC network uses a single m3.medium NAT instance to allow internal hosts to reach out to the internet without being directly accessible via the internet. Over time the load has increased and the traffic going through the NAT instance is extremely high, affecting the overall performance. How can you improve the available bandwidth. (Choose 2 answers)", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add a new IGW to the VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Increase the class size of the NAT instance from m3.medium to m3.xlarge", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Direct Connect to route all traffic through VPC and back to the internet instead of a NAT instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add another NAT instance and configure the subnet route tables to spread across 2 NAT instances.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Leverage ELB's ability to scale and route outbound traffic through an ELB instead of a NAT", "IsAnswer": false }]

    },
     {
        "Id": 8,
       "Name": "You have an RDS instance that because of extra load is failing to meet with the performance SLAs. What two options are best to increase performance.", 
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "Increase the size of the RDS instance ", "IsAnswer": true },
             { "Id": 1056, "QuestionId": 1010, "Name": "Enable multiple AZ ", "IsAnswer": false },
             { "Id": 1057, "QuestionId": 1010, "Name": "Add Read Replicas.", "IsAnswer": true },
             { "Id": 1058, "QuestionId": 1010, "Name": "Decrease the size of the RDS instance", "IsAnswer": false },
             { "Id": 1059, "QuestionId": 1010, "Name": "Create a standby RDS instance", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "A buggy application code running on EC2 instances in an autoscaling group is causing the CPU utilization to go up to 95%. This is triggering autoscaling events unnecessarily. You want to to find the root cause of this issue.What is the most efficient way to trouble shoot this issue with the minimum amount of down time.?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Take a snapshot of your EC2 instance. Delete the autoscaling group and the associated EC2 instances. Create a new EC2 instance with your snapshot and then begin trouble shooting. Once you have figured out the cause of the problem, take a new snapshot and use that snapshot as the base AMI for your new autoscaling group.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Suspend Autoscaling. SSH in to the EC2 instance and begin trouble shooting. Once you have fixed the problem, resume Autoscaling.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Delete the autoscaling group and the associated EC2 instances. Create a new EC2 instance from scratch and reinstall your application. Once you have figured out the cause of the problem, take a new snapshot and use that snapshot as the base AMI for your new autoscaling group.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Delete Autoscaling all together and rely on manual scaling based off SNS notifications sent to your SysOps team from the appropriate CloudWatch Metric.", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "A VPC has the CIDR block of 10.0.0.0/16. It has 2 subnets, 10.0.1.0/24 (public subnet) and 10.0.2.0/24 (private subnet). You deploy a NAT instance with the name i-9c3309ab into 10.0.1.0 and assign it a public IP address.  The source/destination checks on the NAT are disabled. Only the route table needs to be updated to complete the setup. What should the route table be updated to?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Destination:10.0.1.0/16 Target:i-9c3309ab", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Destination: 10.0.0.0/16 Target:i-9c3309ab", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Destination: 10.0.2.0/24 Target:i-9c3309ab", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Destination: 0.0.0.0/0 Target:i-9c3309ab", "IsAnswer": true }]
        
    },
     {
        "Id": 11,
        "Name": "ELB does not support which of the following?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "TLS 1.0", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "TLS 1.1", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "TLS 1.2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SSL 1.0", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "SSL 2.0", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "SSL 3.0", "IsAnswer": false }]
        
    },
     {
        "Id": 12,
        "Name": "A new VPC is created with the CIDR block of 10.0.0.0/16. A new internet gateway called IGW-00872345 is created and attached to this VPC. You now need to create a route out to the newly attached internet gateway. What should you update the route table to?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Destination:10.0.0.0/16 Target: IGW-00872345", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Destination:0.0.0.0/16 Target: IGW-00872345", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Destination:10.0.0.0/24 Target: IGW-00872345", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Destination:0.0.0.0/0 Target: IGW-00872345", "IsAnswer": true }]
        
    },
     {
        "Id": 13,
        "Name": "A CloudWatch custom metric is needed for which of the following?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CPU Utilization of an Amazon EC2 instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Disk usage activity of the ephemeral volumes of an Amazon EC2 instance", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Disk full percentage of an Elastic Block Store Volume.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Disk usage activity of an EBS volume attached to an Amazon EC2 instance", "IsAnswer": false }]
        
    },
     {
        "Id": 14,
        "Name": "An instance status check is used to check which of the following?", 
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Check the VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Check the EC2 instance", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Check the EC2 Host", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Check the weather", "IsAnswer": false }]
        
    },
     {
        "Id": 15,
       "Name": "When an EBS Volume Status check shows a warning, what does it mean?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "That the volume is degraded or severely degraded.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "That the volume is stalled or not available.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "That there is insufficient data.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "That the volume is performing as normal, but may need pre-warming.", "IsAnswer": false }]
        
    },
     {
        "Id": 16,
       "Name": "The instance status check shows a failure and you are unable to connect to your instance. What is the correct way to troubleshoot this situation?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Terminate the instance and then delete the VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Stop the instance", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Restart the instance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Contact AWS support", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
       "Name": "A company plans to run a proprietary application on EC2 instances. All the company data is confidential and so root access to the database is critical. The company wants to use the best storage type possible for the database. The anticipated load at peak will need 20,000 IOPS and an average of 8,000 - 10,000 IOPS. What storage medium will you recommend?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Magnetic Storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "General Purpose SSD", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Provisioned IOPS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Mulit-AZ RDS", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
       "Name": "________ is used to monitor the lag between the primary RDS instance and the read replica.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DatabaseConnections", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ReadReplicaLag", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "ReplicaQueueLength", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "ReplicaLag", "IsAnswer": true }]
        
    },
     {
        "Id": 19,
       "Name": "A company is already using CloudWatch to monitor traffic patterns for their applications in AWS. They are now designing a new Autoscaling Config group and would like to create a  new alarm using which they will trigger autoscaling actions to spin up more EC2 instances to support heavy web traffic. Which of the below ELB metric should be used to trigger autoscaling events?",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "SurgeQueueLength", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "HTTPCode_BackEnd_3XX", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "HTTPCode_BackEnd_4XX", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "HTTPCode_BackEnd_5XX", "IsAnswer": false }]
    },
     {
        "Id": 20,
      "Name": "With respect to Disaster Recovery, RTO means?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Recovery Test Objective", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Resilience Time Objective", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Recovery Time Objective", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Recovery Time Operation", "IsAnswer": false}]
        
    },
    {
        "Id": 21,
        "Name": "You configured a standy for a RDS instance. Will the stand-by instance be in the same Availability Zone as the primary?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "No", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Only for MySql RDS instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Only if configured at launch", "IsAnswer": false }]
                
       
    },
    {
        "Id": 22,
        "Name": "Which of the following is best suited for Database style apps that need frequent random reads and writes across datasets?", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "EBS", "IsAnswer": true },
             { "Id": 1057, "QuestionId": 1010, "Name": "S3 RRS", "IsAnswer": false },
             { "Id": 1058, "QuestionId": 1010, "Name": "Root device", "IsAnswer": false }]
        
    },
    {
        "Id": 23,
        "Name": "A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? Choose 2 answers", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Simple Email Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Notification Service", "IsAnswer": true }]
        
    },
    {
        "Id": 24,
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
        "Id": 25,
        "Name": "A web-startup is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower overall CPU resources for the web tier?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EBS volume", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EC2 instance store", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS instance", "IsAnswer": false }]
    },
    {
        "Id": 26,
        "Name": "Which of the following services natively encrypts data at rest within an AWS region? Choose 2 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon CloudFront", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false }]
        
    },
    {
        "Id": 27,
        "Name": "The initial setting for the default security group is:", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false }]
        
    },
    {
        "Id": 28,
        "Name": "If your DB instance runs out of storage space or file system resources, its status will change to _____ and your DB Instance will no longer be available.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "storage-overflow", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "storage-full", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "storage-exceed", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "storage-overage", "IsAnswer": false}]
    },
    {
        "Id": 29,
        "Name": "For which of the following will you choose Provisioned IOPS over Standard RDS storage?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Production online transaction processing (OLTP) workloads.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Batch-oriented workloads", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workloads that are not sensitive to consistent performance", "IsAnswer": false }]
        
    },
    {
        "Id": 30,
        "Name": "In the 'Detailed' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send _____ minute metrics to Amazon CloudWatch.", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "10", "IsAnswer": false }]
    },
    {
        "Id": 31,
        "Name": "You are not able to RDP to a Windows Server 2010 EC2 instance from your corporate desktop. Which of the following is not a valid reason for this?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "The IP of your desktop is being blocked by your corporate proxy server", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "The EC2 instance does not have a route to an Internet Gateway.", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "The EC2 instance's security group does not support ingress to port 3389.", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "The EC2 instance's security group does not support ingress to port 22", "IsAnswer": true }]
          
      },
      {
        "Id": 32,
        "Name": "S3 supports which of the following object encryption?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Server-Side Encryption with Amazon Managed Keys (SSE-S3, SSE-KMS)", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "Server-Side Encryption with Customer-Provided Keys (SSE-C)", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Client-Side Encryption with WS KMS-managed customer master key", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Client-Side Encryption with client side master key", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": true }]
          
      },
      {
        "Id": 33,
        "Name": "With regard to AWS RDS which of the following is true?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "MySQL, Postgres, and DB2 are supported", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "RDS can be deployed within a VPC", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "RDS features are identical across database types", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Aurora is no longer supported by Amazon", "IsAnswer": false }]
          
      },
      {
        "Id": 34,
        "Name": "What HTTP response code indicates a client side error when a REST call is made?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "2xx", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "4xx", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "500", "IsAnswer": false }]
          
      },
      {
        "Id": 35,
        "Name": "What is not a valid section in a CloudFormation template?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Parameters", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "Resources", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Declarations", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "Outputs", "IsAnswer": false }]
          
      },
      {
        "Id": 36,
        "Name": "In the shared-responsibility model, what is Amazon's responsibility?",  
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Managing security groups", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "Managing customer's key pairs for EC2 instances.", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Physical security of data centers.", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "IAM roles", "IsAnswer": false }]
          
      },
      {
          "Id": 37,
          "Name": "To be prepared for a security assessment, an organization should implement which two configuration management practices? Choose 2 answers", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Determine whether remote administrative access is performed securely.", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "Verify that all Amazon Simple Storage Service (S3) bucket policies and ACLs correctly implement your security policies.", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "Determine whether unnecessary users and services have been identified on all Amazon-published AMIs.", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "Verify that AWS Trusted Advisor has identified and disabled all unnecessary users and services on your Amazon Elastic Compute Cloud (EC2) instances.", "IsAnswer": false }]

      },
       {
          "Id": 38,
          "Name": " In DynamoDB each table can have ________ local indexes and _______ global indexes:", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "5, 10 ", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "5, 5 ", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "10, 5", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "10, 10 ", "IsAnswer": false }]

      },
       {
          "Id": 39,
          "Name": " Both the Hash and Hash & Range attributes of the primary key in DynamoDB are _______ long.", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "256 KB ", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "64 KB  ", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "10 bytes", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "1 KB ", "IsAnswer": false }]

      },
       {
          "Id": 40,
          "Name": "To have reliable snapshots what storage engine must MySQL tables be configured with:", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "InnoDB", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "CouchDB ", "IsAnswer": false }]

      },
      {
          "Id": 41,
          "Name": "Does S3 provide read-after-write consistency?", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "No, not for any region", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "Yes, but only for certain regions", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Yes, but only for certain regions and for new objects", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Yes, for all regions", "IsAnswer": false }]

      },
      {
          "Id": 42,
         "Name": "What is the maximum size of a single S3 object?", 
          
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "No such limit", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "5 TB", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "5 GB", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "100 GB", "IsAnswer": false }]
          
      },
     {
          "Id": 43,
         "Name": "Is data stored in S3 is always encrypted?", 

          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Yes, S3 always encrypts data for security", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "No, there is no such feature", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Yes, but only when right APIs are called", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Yes, but only in Gov Cloud datacenters", "IsAnswer": false }]

      },
       {
          "Id": 44,
        "Name": "What is true for S3 buckets (Choose 3 answers)?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Bucket namespace is shared and is global among all AWS users.", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "Bucket names can contain alpha numeric characters", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "Bucket are associated with a region, and all data in a bucket resides in that region", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Buckets can be transferred from one account to another through API", "IsAnswer": false }]

      },
       {
          "Id": 45,
         "Name": "EBS can always tolerate an Availability Zone failure?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "No, all EBS volumes are stored in a single Availability Zone", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "Yes, EBS volume has multiple copies so it should be fine", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Depends on how it is setup", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "Depends on the Region where EBS volume is initiated", "IsAnswer": false }]

      },
       {
          "Id": 46,
         "Name": "Which of the following benefits does adding Multi-AZ deployment in RDS provide (choose 2 answers)?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "MultiAZ deployed database can tolerate an Availability Zone failure", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "Decrease latencies if app servers accessing database are in multiple Availability zones", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Make database access times faster for all app servers", "IsAnswer": false },
              { "Id": 1058, "QuestionId": 1010, "Name": "Make database more available during maintenance tasks", "IsAnswer": true }]

      },
       {
          "Id": 47,
         "Name": "Which of the following Auto scaling CANNOT do (Choose 2 answers)?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Start up EC2 instances when CPU utilization is above threshold", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "Release EC2 instances when CPU utilization is below threshold", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "Increase the instance size when utilization is above threshold", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Add more Relational Database Service (RDS) read replicas when utilization is above threshold", "IsAnswer": true }]

      },
       {
          "Id": 48,
         "Name": "What happens to data when an EC2 instance terminates (Choose 3 answers)?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "For EBS backed AMI, the EBS volume with operation system on it is preserved", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "For EBS backed AMI, any volume attached other than the OS volume is preserved", "IsAnswer": true },
              { "Id": 1057, "QuestionId": 1010, "Name": "All the snapshots of the EBS volume with operating system is preserved", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "For S3 backed AMI, all the data in the local (ephemeral) hard drive is deleted", "IsAnswer": true }]

      },
       {
          "Id": 49,
         "Name": "For an EC2 instance launched in a private subnet in VPC, which of the following are the options for it to be able to connect to the internet (assume security groups have proper ports open)?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Simply attach an elastic IP", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "If there is also a public subnet in the same VPC, a ENI (Elastic Network Interface) can be attached to the instance with the ip address range of the public subnet", "IsAnswer": false },
              { "Id": 1057, "QuestionId": 1010, "Name": "If there is a public subnet in the same VPC with a NAT instance attached to internet gateway, then a route can be configured from the instance to the NAT", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "There is no way for an instance in private subnet to talk to the internet", "IsAnswer": false }]

      },
       {
          "Id": 50,
         "Name": "When an ELB is setup, what is the best way to route a website’s traffic to it?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Resolve the ELB name to an ip address  and point the website to that ip address", "IsAnswer": false },
              { "Id": 1056, "QuestionId": 1010, "Name": "There is no direct way to do so, Route53 has to be used", "IsAnswer": false},
              { "Id": 1057, "QuestionId": 1010, "Name": "Generate a CNAME record for the website pointing to the DNS name of the ELB", "IsAnswer": true }]

      },
       {
          "Id": 51,
         "Name": "An instance is launched into the public subnet of a VPC. Which of the following must be done in order for it to be accessible from the Internet?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Attach an Elastic IP to the instance", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "Nothing. The instance is accessible from the Internet", "IsAnswer": false},
              { "Id": 1057, "QuestionId": 1010, "Name": "Launch a NAT instance and route all traffic to it", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "Make an entry in the route table passing all traffic going outside the VPC to the NAT instance", "IsAnswer": false}]

      },
       {
          "Id": 52,
         "Name": "In VPCs with private and public subnets, database servers should ideally be launched into:", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "The public subnet", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "The private subnet", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "Either of them", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "Not recommended, they should ideally be launched outside VPC", "IsAnswer": false}]

      },
       {
          "Id": 53,
         "Name": "An instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens when you attach an ENI of a different subnet to this instance?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "The instance follows the rules of the older subnet", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "The instance follows the rules of both the subnets", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "The instance follows the rules of the newer subnet", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "Not possible cannot be connected to 2 ENIs", "IsAnswer": false}]

      },
       {
          "Id":54,
         "Name": "You want to use Route53 to direct your www sub-domain to an elastic load balancer fronting your web servers. What kind of record set should you create?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "A", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "AAAA", "IsAnswer": false},
              { "Id": 1057, "QuestionId": 1010, "Name": "NS", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "CNAME", "IsAnswer": true}]

      },
       {
          "Id": 55,
         "Name": "You have created 4 weighted resource record sets with weights 1, 2, 3 and 4. the 3rd record set is selected by Route53:", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "1/7th of the  time", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "3/10th of the time", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "3/7th of the time", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "1/4th of the time", "IsAnswer": false}]

      },
       {
          "Id":56,
         "Name": "You have created a Route 53 latency record set from your domain to a machine in Shanghai and a similar record to a machine in Seattle. When a user located in Beijing visits your domain he will be routed to:", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Shanghai", "IsAnswer": true},
              { "Id": 1056, "QuestionId": 1010, "Name": "Seattle", "IsAnswer": false},
              { "Id": 1057, "QuestionId": 1010, "Name": "Depends on the load on each machine", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "Both, because 2 requests are made, 1 to each machine", "IsAnswer": false}]

      },
       {
          "Id":57,
         "Name": "Which of the following can be used as an origin server in CloudFront?(Choose 3)", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "A webserver running on EC2", "IsAnswer": true},
              { "Id": 1056, "QuestionId": 1010, "Name": "A webserver running in your own datacenter", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "A RDS instance", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "An Amazon S3 bucket", "IsAnswer": true}]

      },
       {
          "Id": 58,
         "Name": "In CloudFront what happens when content is NOT present at an Edge location and a request is made to it?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "An Error 404 not found is returned", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "CloudFront delivers the content directly from the origin server and stores it in the cache of the edge location", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "The request is kept on hold till content is delivered to the edge location", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "The request is routed to the next closest edge location", "IsAnswer": false}]

      },
       {
          "Id": 59,
         "Name": "What happens when RDS fails over from one availability zone to another?", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "You need to update the connection string in your application to point to the new RDS IP address.", "IsAnswer": false},
              { "Id": 1056, "QuestionId": 1010, "Name": "Failover is handled by AWS and the the failover mechanism automatically changes the DNS record of the DB instance to point to the standby DB instance.", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "Your application that is hosted on EC2 instances will failover automatically to the same AZ that your RDS instances have failed over to, so you do not need to do anything.", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "You need to contact AWS for advice as to how to set up your application in the new failed over availability zone.", "IsAnswer": false}]

      },
       {
          "Id": 60,
         "Name": "Which of the following is true with respect to serving private content through CloudFront? (Ony one incorrect answer)", 
          "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "Signed URLs can be created to access objects from CloudFront edge locations", "IsAnswer": true},
              { "Id": 1056, "QuestionId": 1010, "Name": "Direct access to S3 URLs can be removed therefore allowing access only through CloudFront URLs", "IsAnswer": true},
              { "Id": 1057, "QuestionId": 1010, "Name": "Mark the S3 bucket private and allow access to CloudFront by means of Roles", "IsAnswer": false},
              { "Id": 1058, "QuestionId": 1010, "Name": "Mark the S3 bucket private and and create an Origin Access Identity to access the objects", "IsAnswer": true}]

      },
    {
        "Id": 61,
              "Name": "A user has created a VPC with the public and private subnets using the VPC wizard. The VPC has CIDR 20.0.0.0/16. The public subnet uses CIDR 20.0.1.0/24. The user is planning to host a web server in the public subnet (port 80) and a DB server in the private subnet (port 3306). The user is configuring a security group for the public subnet (WebSecGrp) and the private subnet (DBSecGrp). Which of the below mentioned entries is required in the web server security group (WebSecGrp)?",  
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Configure Destination as DB Security group ID (DbSecGrp. for port 3306 Outbound).", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure port 80 for Destination 0.0.0.0/0 Outbound", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure port 3306 for source 20.0.0.0/24 InBound.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure port 80 InBound for source 20.0.0.0/16.", "IsAnswer": false }]
        
    }
     ]
}