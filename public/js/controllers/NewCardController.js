

app.controller('NewCardController', function($scope, $http, FlashCardsFactory){
	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node',
	    'Reset'
	];
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};

	$scope.sendNewCard = function (){
			return $http.post('/cards', {
				question: $scope.newCard.question,
				category: $scope.newCard.category,
				answers: $scope.newCard.answers
			}).then(function(response){
				FlashCardsFactory.localFlashcards.push(response.data);
				return response.data;
			}).then(function(response){
				// $scope.newCardForm.categoryField.$setPristine();		
				$scope.newCard.question = null;
				$scope.newCard.category = null;
				$scope.newCard.answers = [
		        { text: null, correct: false },
		        { text: null, correct: false },
		        { text: null, correct: false }
		    	]
		    	$scope.submitted= false;

			})
		}
	$scope.optionClick = function(num){
		var target = $scope.newCard.answers[num].correct
		target = true;
	}

});

