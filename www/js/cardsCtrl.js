angular.module('starter').controller(
		'CardsCtrl',
		function($scope, $http, $ionicLoading, $ionicSideMenuDelegate,
				TDCardDelegate,$timeout) {
			
			console.log('CARDS CTRL11');
			$ionicSideMenuDelegate.canDragContent(false);
			var cardTypes = [];
			
			
			function loadSome() {
				console.log('LOAD CARD called');
				$scope.deckEmpty=false;
				$ionicLoading.show();
				
				$http.get('https://randomuser.me/api/?results=5').success(
						function(response) {
							angular.forEach(response.results, function(famous) {
								cardTypes.push(famous);
								// console.log(JSON.stringify(famous));
							});
							$ionicLoading.hide();
						}).error(function(err) {
					console.log(err);
				});
	
				// $scope.cards = Array.prototype.slice.call(cardTypes, 0);
				var obj = {};
				obj.user = {};
				obj.user.picture = {};
				obj.user.picture.medium = "https://s3.amazonaws.com/aws-exam-q/q1.png";
				cardTypes.push(obj);
				$scope.cards = cardTypes;
			}
			
			loadSome();
			$scope.cardDestroyed = function(index) {
				console.log('DESTROY card called');
				$scope.cards.splice(index, 1);
				console.log('Card count ', $scope.cards.length);
				if($scope.cards.length == 0) { $scope.deckEmpty=true;}
			};

			function addCard() {
				console.log('Add card called');
				var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
				newCard.id = Math.random();
				$scope.cards.push(angular.extend({}, newCard));
			}

			$scope.yesCard = function(index) {
				console.log('YES', index);
				$scope.cardDestroyed(index);
			};

			$scope.noCard = function(index) {
				console.log('NO',index);
				$scope.cardDestroyed(index);
			};
			$scope.toggleLeft = function() {
				$ionicSideMenuDelegate.toggleLeft();
			};
			
			$scope.refreshCards = function() {
			    // Set $scope.cards to null so that directive reloads
				console.log('Refresh reached');
			    $scope.cards = null;
			    $timeout(function() {
			      $scope.cards = cardTypes;
			    });
			    loadSome();
			  }
		}).controller('CardCtrl', function($scope, TDCardDelegate) {
	$scope.cardSwipedLeft = function(index) {
		console.log('LEFT SWIPE');
		addCard();
	};
	$scope.cardSwipedRight = function(index) {
		console.log('RIGHT SWIPE');
		addCard();
	};
})
