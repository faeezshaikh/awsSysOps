{
    "quiz": {
        "Id": 6,
        "name": "Practice Quiz 6",
        "logo" : "data/img/VPC.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "Network ACLs perform __________ filtering while security groups perform __________ filtering. ",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "stateless , stateful", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "stateful, stateless", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "VPC allows you to assign IP addresses for multiple instances simultaneously?", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 3,
        "Name": "For IP Networking Purposes, Amazon reserves these in evey subnet. (Choose 2 answers)", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "First Four IP addresses", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Last Two IP addresses", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Last One IP address", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "First Five IP addresses", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
        "Name": "If an Amazon EC2 instance is stopped within a VPC, is it possible to launch another instance with the same IP address in the same VPC?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes. You can only if the earlier instance is not running.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "No. An IP address assigned to a running instance can only be used again by another instance once that original running instance is in a “terminated” state. ", "IsAnswer": true }]
        
    },
    {
        "Id": 5,
        "Name": "You cannot change a VPC's size. To change the size of a VPC you must terminate your existing VPC and create a new one. ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 6,
        "Name": "In AWS, you may use a third party software VPN to create a site to site or remote access VPN connection with your VPC via the Internet Gateway. ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 7,
        "Name": "A user has created a VPC with CIDR 20.0.0.0/16 using the wizard. The user has created a public subnet CIDR 20.0.0.0/24. and VPN only subnets CIDR 20.0.1.0/24. along with the VPN gateway vgw-12345  to connect to the user’s data centre. Which of the below mentioned options is a valid entry for the main route table in this scenario?", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Destination: 20.0.0.0/24 and Target: vgw-12345", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Destination: 20.0.0.0/16 and Target: ALL", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Destination: 20.0.1.0/16 and Target: vgw-12345", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Destination: 0.0.0.0/0 and Target: vgw-12345", "IsAnswer": true }]
        
    },
    {
        "Id": 8,
        "Name": "Which of this is not an option when configuring a VPC using the wizard:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "VPC with a Single Public Subnet only", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "VPC with Multiple Public Sunets only", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "VPC with Public and Private Subnets", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "VPC with Public and Private Subnets and Hardware VPN Access", "IsAnswer": false},
            { "Id": 1059, "QuestionId": 1010, "Name": "VPC with a Private Subnet Only and Hardware VPN Access", "IsAnswer": false}]
    },
    {
        "Id": 9,
        "Name": "In AWS, an instance that provides Port Address Translation for non-EIP instances to access the Internet via the Internet Gateway is called:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Address Translation instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A Network instance", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A NAT instance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Translation service", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "Security groups act like a firewall at the instance level whereas _______ are an additional layer of security that act at the subnet level",
        
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DB Security Groups", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Internet Gateways", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Route Tables", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Network ACLS", "IsAnswer": true }]
    }
     ]
}