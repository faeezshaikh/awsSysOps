﻿'use strict';
angular.module('starter')
.service('helperService', function () {
    this.hello = function () {
        return "Hello World";
    };
    this.toBool = function (val) {
        if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
            return false;
        else if (val == true || val == 'true' || val == 'True')
            return true;
        else
            return 'unidentified';
    };
    this.shuffle = function (array) {
        var currentIndex = array.length, temp, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }
    this.extend = function (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }
        return out;
    };
})


.service('awsService',function(localStorageService){
 var topics = [
                { title: 'Practice Set 1', desc:'', id: 1 ,url:'data/img/Route53.png'},
                { title: 'Practice Set 2', desc:'', id: 2 ,url:'data/img/RDS.png'},
                { title: 'Practice Set 3', desc:'', id: 3 ,url:'data/img/IAM.png'},
                { title: 'Practice Set 4', desc:'', id: 4 ,url:'data/img/EC2.png'},
                { title: 'Practice Set 5',desc:'',  id: 5 ,url:'data/img/S3.png'},
                { title: 'Practice Set 6', desc:'', id: 6 ,url:'data/img/VPC.png'},
                { title: 'Practice Set 7', desc:'', id: 7 ,url:'data/img/ElasticBeanstalk.png'},
                { title: 'Practice Set 8',desc:'',  id: 8 ,url:'data/img/SQS.png'},
                { title: 'Practice Set 9',desc:'',  id: 9 ,url:'data/img/SNS.png'},
                { title: 'Practice Set 10', desc:'', id: 10 ,url:'data/img/SWF.png'}
              ];

    var mockExams = [
                { title: 'Certification Exam 1', id: 400 ,url:'data/img/certified.png'},
                { title: 'Certification Exam 2', id: 100 ,url:'data/img/certified.png'},
                { title: 'Certification Exam 3', id: 300 ,url:'data/img/certified.png'}
               
              ];

 var timerSetting;

 function getPreviousScore(topicId,score) {

            var arr = localStorageService.get('scoreRecord');
            var oldScore = -1;
            if(arr) {
               arr.forEach(function(obj,index) {
                    if(obj.topicId === topicId) {
                         oldScore = obj.bestScore;
                         
                    }
               });
            }
            return oldScore;
 }

 function updateLocalStorage(topicId,score){


                         var arr = localStorageService.get('scoreRecord');
                         if(arr) {
                            var scoreUpdated = false;
                            arr.forEach(function(obj,index) {
                                if(obj.topicId === topicId) {
                                     obj.bestScore = score;
                                     scoreUpdated = true;
                                }
                            });

                             if(scoreUpdated) {
                                localStorageService.set('scoreRecord',arr);
                             } else {
                                  var obj = {};
                                  obj.topicId = topicId;
                                  obj.bestScore = score;
                                  arr.push(obj);
                                  localStorageService.set('scoreRecord',arr);
                             }
                         } else {
                                  var scoreList = [];
                                  var obj = {};
                                  obj.topicId = topicId;
                                  obj.bestScore = score;
                                  scoreList.push(obj);
                                  localStorageService.set('scoreRecord',scoreList);

                         }
 }
  return {
            getTopics: function () {
                  var scoreList =   localStorageService.get('scoreRecord');
                  if(scoreList) {
                     topics.forEach(function(topic,index) {
                        scoreList.forEach(function(scoreRecord, i) {
                            if(topic.id == scoreRecord.topicId) {
                                topic.bestScore = scoreRecord.bestScore;
                                topic.bestScore+='%';
                            }
                        });
                     });
                  }
                 
              return topics;
               
            },
            getMockExams: function () {
                  var scoreList =   localStorageService.get('scoreRecord');
                  if(scoreList) {
                     mockExams.forEach(function(mockExam,index) {
                        scoreList.forEach(function(scoreRecord, i) {
                            if(mockExam.id == scoreRecord.topicId) {
                                mockExam.bestScore = scoreRecord.bestScore;
                                mockExam.bestScore+='%';
                            }
                        });
                     });
                  }
                 
              return mockExams;
               
            },

       
               updateScoreForTopics : function(topicId,score) {
                    
                   topics.forEach(function(topic,index) {
                     if(topic.id == topicId) {
                          var oldScore = getPreviousScore(topicId,score);
                          if(oldScore == -1) {
                              topic.bestScore = score;
                              topic.bestScore+='%';
                              updateLocalStorage(topicId,score);
                          } else {
                            if(oldScore < score) {
                                topic.bestScore = score;
                                topic.bestScore+='%';
                                updateLocalStorage(topicId,score);
                            }
                          }

                           
                        
                     }

                  });

                    mockExams.forEach(function(mockExam,index) {
                     if(mockExam.id == topicId) {
                          var oldScore = getPreviousScore(topicId,score);
                           if(oldScore == -1) {
                               mockExam.bestScore = score;
                               mockExam.bestScore+='%';
                               updateLocalStorage(topicId,score);
                           } else {
                              if(oldScore < score) {
                                 mockExam.bestScore = score;
                                 mockExam.bestScore+='%';
                                 updateLocalStorage(topicId,score);
                            }
                         }
                     }

                  });
            },
            setTimerSettings: function(val) {
                if(val) timerSetting = 'on';
                else timerSetting = 'off';

            },
            getTimerSettings: function() {
                return timerSetting;
            }
            
            
        };

})

;
