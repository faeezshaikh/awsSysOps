{
    "quiz": {
        "Id": 2,
        "name": "Practice Quiz 2",
        "description": "",
        "logo" : "data/img/RDS.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "The compliance department within your multi-national organization requires that all data for your customers that reside in the Middle East (ME) must not leave the ME and also data for customers that reside in the US must not leave the US without explicit authorization. In order to register, a user must include a residential address as part of the user profile.What must you do to comply with this requirement for a web-based application running on EC2?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Run Amazon EC2 instances in multiple regions, and leverage Route 53’s latency-based routing capabilities to route traffic to the appropriate region based on a user’s profile.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Run Amazon EC2 instances in multiple regions, and leverage an elastic load balancer with session stickiness to route traffic to the appropriate region based on a user’s profile.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run Amazon EC2 instances in multiple regions, and leverage a third-party data provider to determine whether a user should be redirected to the appropriate region based on that user’s profile.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Run Amazon EC2 instances in multiple AWS Availability Zones in a single region, and leverage an elastic load balancer with session stickiness to route traffic to the appropriate zone based on a user’s profile.", "IsAnswer": false}]
    },
    {
        "Id": 1011,
               "Name": "Which of the following is not true?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon RDS enables you to run a fully featured relational database while offloading database administration", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AMIs on Amazon EC2 allows you to operate your own relational database in the cloud.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AMIs on Amazon EC2 allows you to operate only the Aurora database in the cloud..", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": " Amazon DynamoDB is a fully managed NoSQL database service that offers fast and predictable performance with seamless scalability;", "IsAnswer": false }]
    
        
    },
    {
        "Id": 1012,
               "Name": "The Point-In-Time-Restore and Snapshot Restore features of Amazon RDS for MySQL require a crash-recoverable storage engine and are supported for _______ storage engine only.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MyISAM", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "InnoDB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false }]
        
    },
    {
        "Id": 1013,
               "Name": "You run a two-tiered web application with the following components: an elastic load balancer (ELB), three web/application servers on Amazon Elastic Compute Cloud (EC2), and one MySQL RDS database. With growing load, database queries take longer and longer and slow down the overall response time for user requests. What of the following options could speed up performance? (Choose 3 answers)",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an RDS read-replica and redirect half of the database read requests to it.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Cache database queries in Amazon ElastiCache.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup RDS in multi-Availability Zone mode.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Shard the database and distribute load between shards.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon CloudFront to cache database queries.", "IsAnswer": false }]
        
    },
    {
        "Id": 1014,
        "Name": "You are developing a new mobile application and are considering storing user preferences in AWS. This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be 50KB in size. Additionally 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly available, scalable and secure, how would you design a solution to meet the above requirements?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup an RDS MySQL instance in 2 availability zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize STS. Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup an RDS MySQL instance with multiple read replicas in 2 availability zones to store the user preference data .The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Store the user preference data in S3. Setup a DynamoDB table with an item for each user and an item attribute pointing to the user' S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly utilize STS, Web identity Federation, and S3 ACLs to authenticate and authorize access.", "IsAnswer": false }]
        
    },
    {
        "Id": 1015,
                "Name": "Which of the following is not the correct choice for the storage type:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "For High-performance OLTP workloads - Use Amazon RDS Provisioned IOPS (SSD) Storage", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "For Database workloads with moderate I/O requirements - Use Amazon RDS General Purpose (SSD) Storage", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "For Small database workloads with infrequent I/O - Use Amazon RDS General Purpose (SSD) Storage", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "For Small database workloads with infrequent I/O - Use Amazon RDS Magnetic Storage", "IsAnswer": false }]
        
    },
    {
        "Id": 1016,
               "Name": "Which of the following can you NOT use to access the capabilities of a production-ready relational database in minutes.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon RDS Command Line Interface, ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "API calls", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Bootstrap scripts", "IsAnswer": true }]
        
    },
    {
        "Id": 1017,
               "Name": "A company has configured and peered two VPCs: VPC-1 and VPC-2. VPC-1 contains only private subnets, and VPC-2 contains only public subnets. The company uses a single AWS Direct Connect connection and private virtual interface to connect their on-premises network with VPC-1. Which two methods increases the fault tolerance of the connection to VPC-1? Choose 2 answers",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Establish a hardware VPN over the internet between VPC-2 and the on-premises network", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Establish a hardware VPN over the internet between VPC-1 and the on-premises network.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1.", "IsAnswer": true }]
        
    },
    {
        "Id": 1018,
               "Name": "Where are your automated backups and DB Snapshots stored?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EBS volumes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "RDS instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Private EC2 instances", "IsAnswer": false }]
        
    },
    {
        "Id": 1019,
              "Name": "A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically. What AWS services should be used meet these requirements?",  
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Stateless instances for the web and application tier synchronized using Elasticache Memcached in an autoscaling group monitored with CloudWatch. And RDS with read replicas.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and RDS with read replicas.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch. And multi-AZ RDS.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch and multi-AZ RDS.", "IsAnswer": false }]
        
    }]
}