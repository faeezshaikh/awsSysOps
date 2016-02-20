{
    "quiz": {
        "Id": 9,
        "name": "Practice Quiz 9",
        "logo" : "data/img/SNS.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "Your customers get receive notifications on their mobile devices and their emails. But the format of the message will have to remain the same for both protocols.",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 1011,
        "Name": "Which of the following is a true statement. (Choose 2 answers)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SQS follows the the 'publish-subscribe' (pub-sub) messaging paradigm", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SNS is based on push mechanism and not pull mechanism.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "SNS and SWF can be used to fan-out", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS and SQS can be used to fan-out", "IsAnswer": true }]
        
    },
    {
        "Id": 1012,
        "Name": "Which of the following devices is not supported by SNS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Apple", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Google", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "BlackBerry", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Fire OS", "IsAnswer": false }]
        
    },
    {
        "Id": 1013,
        "Name": "Your CIO has requested that the company should be able to track all changes made to the company's AWS environment, by all users and at all times, in all regions. Which AWS service should you use to achieve this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudAudit", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudWatch", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudTrail", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "CloudTrace", "IsAnswer": false }]
        
    },
    {
        "Id": 1014,
        "Name": "Which of the following protocols are not supported by SNS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "HTTP", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "FTP", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Email", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "HTTPS", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Email-JSON", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1061, "QuestionId": 1010, "Name": "Custom App", "IsAnswer": false }]
        
    },
    {
        "Id": 1015,
        "Name": "Which of the following is NOT a valid SNS subscribers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Email", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "HTTPS", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "SMS", "IsAnswer": false }]
        
    },
    {
        "Id": 1016,
        "Name": "The members of your subscription service would like to receive notifications about the latest updates to your service periodically. You have their email addresses. What would you use for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A Queue", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A Topic", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A Newsletter", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A Stack", "IsAnswer": false }]
        
    },
    {
        "Id": 1017,
        "Name": "If there is a requirement to fan a single message to several queues, what services would you use in AWS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF and SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS and SNS", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "SNS and S3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SQS and S3", "IsAnswer": false }]
    },
    {
        "Id": 1018,
        "Name": "The latest protocol added to the list of supported protocols for SNS is:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS IoT", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Mobile Hub", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Cognito", "IsAnswer": false }]
        
    },
    {
        "Id": 1019,
        "Name": "A _______ is an 'access point' for allowing recipients to dynamically subscribe to identical copies of the same notification",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Queue", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Database", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Message", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Topic", "IsAnswer": true }]
        
    }
     ]
}