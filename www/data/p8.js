{
    "quiz": {
        "Id": 8,
        "name": "Practice Quiz 8",
        "logo" : "data/img/SQS.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "Using the access policy language, you wish to restrict access to a SQS queue by IP address and time of day. How can you do this?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Contact AWS support team", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SetQueueAttributes with JSON objects", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set SNS properties", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "This is not possible in SQS but in SNS.", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "Elastic Beanstalk itself is not free AND you must also pay for the resources it provisions.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 3,
        "Name": "How long can you keep messages in Amazon SQS queues?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Anywhere from 1 minute to 2 weeks", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 hours", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "24 hours", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Anywhere from 1 minute to 1 month", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
        "Name": "What happens if you issue a DeleteMessage request on a previously deleted message in SQS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Error", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS returns a 'success' response", "IsAnswer": true },
             { "Id": 1057, "QuestionId": 1010, "Name": "SQS returns a fault response", "IsAnswer": false },
             { "Id": 1058, "QuestionId": 1010, "Name": "No response is returned", "IsAnswer": false }]
        
    },
    {
        "Id": 5,
        "Name": " The __________ client supports prefetching of messages into a local buffer, which allows your application to immediately process messages from SQS without waiting for them to be retrieved from SQS.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AmazonSQSAsync", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AmazonSQSBufferedAsync", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "SQSAsync", "IsAnswer": false }]
        
    },
    {
        "Id": 6,
        "Name": "Your webservice is burning costly CPU cycles by constantly polling SQS queues for messages. How can you avoid this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Modify web service code to only poll a few minutes.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS automatically pushes messages to the webservice, so this should not be a problem.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Elasticache to cache the messages, rather than SQS.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enable SQS Long Polling.", "IsAnswer": true }]
        
    },
    {
        "Id": 7,
        "Name": "With regard to Amazon SQS, which of the following is a true statement. ", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "In SQS, a message is delivered only once.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "In SQS, a message can be delivered at least once but also multiple times.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "In SQS, messages are delivered in First In First Out (FIFO) method.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "In SQS, messages are delivered in Last In First Out (LIFO) method.", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
        "Name": "The default visibility time out setting for a message in SQS is:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1 hour", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 day", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "5 minutes", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "30 seconds", "IsAnswer": true }]
    },
    {
        "Id": 9,
        "Name": "A SQS message can be this large:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "64Kb", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "128Kb", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "256Kb", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "512Kb", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "A company has moved to AWS because of the ability to use 'scripted infrastructure'. They would like to apply version control on their infrastructure (similar to software development) so that they can roll back infrastructure to a previous stable version if needed. They would also like to to quickly deploy testing and staging environments in multiple regions. What services should you use to achieve this?",
        
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Opsworks & a version control system such as GitHub.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic BeanStalk & a version control system such as GitHub.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudWatch & a version control system such as GitHub.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFormation & a version control system such as GitHub.", "IsAnswer": true }]
    }
     ]
}