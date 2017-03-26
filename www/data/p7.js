{
    "quiz": {
        "Id": 7,
        "name": "Practice Quiz 7",
        "logo" : "data/img/ElasticBeanstalk.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "AWS Elastic Beanstalk is not currently supported for which of the following servers?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Apache", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Nginx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Passenger", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "IIS", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Websphere", "IsAnswer": true }]
                
       
    },
    {
        "Id": 2,
        "Name": "What is the default period for which messages will stay in SQS queues:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1 hr", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "4 days", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 days", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1 week", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "AWS Elastic Beanstalk is not currently supported for which of the following languages?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Java", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Go", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Docker", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Scala", "IsAnswer": true }]
        
    },
    {
        "Id": 4,
        "Name": "AWS Elastic Beanstalk can have multiple versions of an application running at the same time.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }] 
    },
    {
        "Id": 5,
        "Name": "A company has decided to use a Bastion host to restrict access to their network for security purposes. Their network admins will SSH in to the bastion host and then on to other EC2 instances in a private subnet. The bastion hosts should be highly available. How should you build this environment?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create 2 EC2 instances in separate availability zones. Place these instances behind and elastic load balancer and then ask the SysAdmins to connect to the ELB's public DNS name via SSH.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create 2 EC2 instances in the same subnet. Create a DNS entry in Route53 which uses Round Robin DNS and points to each instance. Tell the SysAdmins to connect using the new DNS entry.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create 2 EC2 instances in different subnets. Create a DNS entry in Route53 which uses Round Robin DNS and points to each instance. Tell the SysAdmins to connect using the new DNS entry.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Create 1 EC2 instance in a private subnet. Connect to this EC2 instance using a site to site VPN. Configure your router to automatically reconnect if the VPN is dropped.", "IsAnswer": false}]
    },
    {
        "Id": 6,
        "Name": "With respect to taking snapshots of EBS volumes, which of the below is true?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The EBS Volume cannot be attached or detached until the snapshot has been completed.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The EBS volume will be read only until the snapshot completes.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The EBS volume will be unusable until the snapshot completes", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The EBS volume can continue to be used while the snaphot is taking place.", "IsAnswer": true }]
        
    },
    {
        "Id": 7,
        "Name": "An application uses Elasticache to cache database queries. CloudWatch metrics are used to monitor the Memcached performance.  Two metrics, Evictions (The number of non-expired items the cache evicted to allow space for new writes.) and GetMisses (The number of get requests the cache has received where the key requested was not found.) are getting very high. What should you do to scale the environment further?", 
        
      "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "Increase the number of nodes in the memcached cluster or increase the size of each node in your cluster.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Decrease the number of nodes in the memcached cluster or decrease the size of each node in your cluster.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Migrate from Memcached to Redis.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use CloudFront as an alternative caching engine.", "IsAnswer": false }] 
        
    },
    {
        "Id": 8,
        "Name": "By default, applications created in ElasticBeanstalk are publicly accessible for anyone to access?", 
        
        "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
              { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }] 
    },
    {
        "Id": 9,
        "Name": "Which of the following can you use to make your application private when you first create it in ElasticBeanstalk?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon VPC", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amaozn IAM roles", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "A company is hosting their blogging site on-premise.  You are migrating this application to AWS so that it can be scaled further. The company would like to implement chef recipes to configure their infrastructure  in a scripted fashion. What AWS service would let you do this while reducing administrative over heads?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Opsworks", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFront", "IsAnswer": false }]
    }
     ]
}