{
    "quiz": {
        "Id": 1,
        "name": "Practice Quiz 1",
        "description": "",
        "logo" : "data/img/Route53.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You run a web application in which application servers on EC2 instances are in an Auto Scaling group spread across two Availability Zones. Monitoring over the last six months shows that only one web server is necessary to handle the minimum load. During core business hours (8-8 M-F), generally six to eight servers are needed. Five to six days per year, the number of web servers required might go up to 20. Which of the following choices best reduces costs while providing full availability?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Six Reserved Instances (heavy utilization), the rest covered by Spot instances", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Six Reserved Instances (heavy utilization), the rest covered by on-demand instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Two Reserved Instances (heavy utilization), six on-demand instances, the rest covered by Spot Instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Two Reserved Instances (heavy utilization), four Reserved instances (medium utilization), the rest covered by on-demand instances", "IsAnswer": true }]
    },
    {
        "Id": 2,
               "Name": "Your web application is required to support the launch of a new feature that will allow users to upload photos of your companyˈs products. The users will be able to to share a link with others to view the photos and comment on them. It is important that the photos are highly available.What AWS storage option will offer the best scalability, cost, and reliability to store and share these pictures?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The instance store on each web server replicated across the application group", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Simple Storage Service (S3) accessed directly by the end users via signed URLs", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "An Amazon Elastic Block Store (EBS) volume attached to an instance shared to the web servers via NFS and snapshotted frequently", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "An EBS volume attached to each web server for the upload directory and synced continuously between web servers", "IsAnswer": false }]
    
        
    },
    {
        "Id": 3,
                "Name": "Your EC2 based multi-tier application includes a monitoring instance that periodically makes application level read only requests of various application components and if any of those fail more than three times 30 seconds calls CloudWatch to fire an alarm, and the alarm notifies your operations team by email and SMS of a possible application health problem. However, you also need to watch the 'watcher' - the monitoring instance itself - and be notified if it becomes unhealthy.Which of the following Is a simple way to achieve that goal?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Run another monitoring instance that pings the monitoring instance and fires a could watch alarm mat notifies your operations team should the primary monitoring instance become unhealthy.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set a Cloud Watch alarm based on EC2 system and instance status checks and have the alarm notify your operations team of any detected problem with the monitoring instance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set a Cloud Watch alarm based on the CPU utilization of the monitoring instance and nave the alarm notify your operations team if the CPU usage exceeds 50% for more than one minute. Then have your monitoring application go into a CPU-bound loop should it detect any application problems.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Have the monitoring instances post messages to an SQS queue and then dequeue those messages on another instance should  the queue cease to have new messages, the second instance should first terminate the original monitoring instance start another backup monitoring instance and assume the role of the previous monitoring instance and beginning adding messages to the SQS queue.", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
               "Name": "You have started a new job and are reviewing your company's infrastructure on AWS. You notice one web application where they have an Elastic Load Balancer (ELB) in front of web instances in an Auto Scaling Group. When you check the metrics for the ELB in CloudWatch you see four healthy instances In Availability Zone (AZ) A and zero in AZ B There are zero unhealthy instances.What do you need to fix to balance the instances across AZs? ",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set the ELB to only be attached to another AZ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Make sure Auto Scaling is configured to launch in both AZs", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Make sure your AMI is available in both AZs", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Make sure the maximum size of the Auto Scaling Group is greater than 4", "IsAnswer": false }]
        
    },
    {
        "Id": 5,
               "Name": "Your entire AWS infrastructure lives inside of one Amazon VPC. You have an Infrastructure monitoring application running on an Amazon instance in Availability Zone (AZ) A of the region, and another application instance running in AZ B. The monitoring application needs to make use of ICMP ping to confirm network reachability of the instance hosting the application.How can you configure the security groups for these instances to only allow the ICMP ping to pass from the monitoring instance to the application instance and nothing else?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Two instances in two different AZ's can't talk directly to each other via ICMP ping as that protocol is not allowed across subnet (ie. broadcast) boundaries.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Both the monitoring instance and the application instance have to be a part of the same security group, and that security group needs to allow inbound ICMP", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The security group for the monitoring instance needs to allow outbound ICMP and the application instance's security group needs to allow Inbound ICMP", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Both the monitoring instance's security group and the application instance's security group need to allow both inbound and outbound ICMP ping packets since ICMP is not a connection-oriented protocol", "IsAnswer": false }]
        
    },
    {
        "Id": 6,
        "Name": "You have been tasked with identifying an appropriate storage solution for a NoSQL database that requires random I/O reads of greater than 100,000 4kB IOPS. Which EC2 option will meet this requirement?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EBS provisioned IOPS ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SSD instance store ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "EBS optimized instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "High Storage instance configured in RAID 10 ", "IsAnswer": true }]
    },
    {
        "Id": 7,
               "Name": "The majority of your Infrastructure is on premises and you have a small footprint on AWS.Your company has decided to roll out a new application that is heavily dependent on low latency connectivity to LDAP for authentication. Your security policy requires minimal changes to the company's existing application user management processes.What option would you implement to successfully launch this application?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a second, independent LDAP server in AWS for your application to use for authentication.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Establish a VPN connection so your applications can authenticate against your existing on-premises LDAP servers.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Establish a VPN connection between your data center and AWS create a LDAP replica on AWS and configure your application to use the LDAP replica for authentication.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a second LDAP domain on AWS establish a VPN connection to establish a trust relationship between your new and existing domains and use the new domain for authentication.", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
               "Name": "A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? Choose 3 answers",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use a HTTPS GET to the Amazon S3 bucket where the files are located.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Restore by implementing a lifecycle policy on the Amazon S3 bucket.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Make an Amazon Glacier Restore API call to load the files into another Amazon S3 bucket within four to six hours.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Launch a new AWS Storage Gateway instance AMI in Amazon EC2, and restore from a gateway snapshot.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Create an Amazon EBS volume from a gateway snapshot, and mount it to an Amazon EC2 instance.", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot.", "IsAnswer": true }]
        
    },
    {
        "Id": 9,
              "Name": "What is the limit on the number of hosted zones you can manage using Route53?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "10", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "100", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "500", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "20", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
               "Name": "Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data In JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met.Provide the ability for real-time analytics of the inbound biometric data. Ensure processing of the biometric data is highly durable, elastic and parallel. The results of the analytic processing should be persisted for data mining.Which architecture outlined below win meet the initial requirements for the collection platform?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Utilize S3 to collect the inbound sensor data analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Utilize SQS to collect the inbound sensor data analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Utilize EMR to collect the inbound sensor data, analyze the data from EUR with Amazon Kinesis and save the results to DynamoDB.", "IsAnswer": false }]
        
    },
    {
        "Id": 11,
               "Name": "An enterprise customer would like to host some of their corporate servers in Amazon Web Services and have chosen to create a VPC deployment as an extension of their on-premises data center. The existing on-premises data center already has multiple redundant DNS servers. These DNS servers are hosting DNS records for several internal applications, such as mail servers and business applications. The corporate security policy specifies that the DNS names for the internal applications can only be resolved within the secure internal corporate network through the on-premises DNS server and cannot be resolved over the public internet or through a Public DNS server. The on-premises DNS servers can resolve Internet domain names through recursion. Secure network connectivity between the VPC and the on-premises data center has been established using IPSec VPN. The Amazon Elastic Compute Cloud (EC2) instances that are launched within this VPC will host applications that frequently connect to the corporate applications hosted in the on-premises data center. The enterprise policy mandates the use of domain names to connect to all internal applications. Select the option that is most effective for building a scalable DNS architecture:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a new Route 53 hosted zone for the internal domain and add all internal domain names as record sets in the Route 53 hosted-zone. Modify the default DHCP option set for the VPC to specify the domain name server value as Route 53.","IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a new Route 53 hosted-zone for the internal domain name, and configure Route 53 to forward all DNS queries for internal domain names to the on-premises DNS servers. Modify the default DHCP option set for the VPC to specify the domain name server value as Route 53.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a new DHCP option set that specifies the domain name server value as the on-premises DNS servers. Replace the default DHCP option set for the VPC with the newly created DHCP option set.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create two DHCP options sets, DHCPSetA and DHCPSetB. Configure DHCPSetA to specify the Amazon-provided DNS server as the domain name server to resolve all Internet domain names. Configure DHCPSetB to specify the on- premises DNS server as the domain name server to resolve all internal domain names. Apply both the DHCP options set to the VPC so that both Internet domain names and internal domain names can be resolved. ", "IsAnswer": false }]
        
    },
    {
        "Id": 12,
               "Name": "In reviewing the Auto Scaling events for your application you notice that your application is scaling up and down multiple times in the same hour. What design choice could you make to optimize for cost while preserving elasticity? Choose 2 answers ",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Modify the Auto Scaling policy to use scheduled scaling actions","IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Modify the Auto Scaling group termination policy to terminate the oldest instance first.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Modify the Auto Scaling group termination policy to terminate the newest instance first.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Modify the Auto Scaling group cool-down timers.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Modify the Amazon CloudWatch alarm period that triggers your Auto Scaling scale down policy. ", "IsAnswer": true }]
        
    }]
}