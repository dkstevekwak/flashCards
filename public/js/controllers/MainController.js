app.controller('MainController', function($scope, FlashCardsFactory){
	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node',
    'Reset'
];

	$scope.categorySelected;

	$scope.getCategoryCards = function(category){
		if(category === 'Reset'){ 
		$scope.flashCards = [];
		FlashCardsFactory.getFlashCards().then(function (receivedCards){
		$scope.flashCards = FlashCardsFactory.localFlashcards;
	
	})
	}
		$scope.flashCards = [];
		$scope.categorySelected = category;
		FlashCardsFactory.getFlashCards(category).then(function (receivedCards){
		$scope.flashCards = FlashCardsFactory.localFlashcards;
	})

	}

	FlashCardsFactory.getFlashCards().then(function (receivedCards){
		$scope.flashCards = FlashCardsFactory.localFlashcards;
	})




	



});

app.controller('StatsController', function($scope, ScoreFactory){
	$scope.scores = ScoreFactory;
});







// app.controller('FlashCardController', function($scope, ScoreFactory){
// 	$scope.answeredCorrectly = false;
// 	$scope.answered = false;
// 	$scope.alreadyAnswered = false;
		
// 		$scope.answerQuestion =function (answer){
// 			if(!$scope.answered) {
// 				$scope.answered = true;
				
// 				if(answer.correct){ 
// 					$scope.answeredCorrectly = true; 
// 					ScoreFactory.correct++;
// 				}
// 				else {
// 					$scope.answeredCorrectly = false;	
// 					ScoreFactory.incorrect++;
// 					}	
// 			} else {
				
// 				$scope.alreadyAnswered = true;		
// 			}

// 		}

// })