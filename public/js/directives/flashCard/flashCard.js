app.directive('flashCard', function(ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashCard/flashCard.html',
		scope: {
			card : '='
		},
		link: function(scope, element, attrs){
			scope.answeredCorrectly;
			scope.answered;
			scope.alreadyAnswered = false;
				
				scope.answerQuestion =function (answer){
					if(!scope.answered) {
						scope.answered = true;
						
						if(answer.correct){ 
							scope.answeredCorrectly = true; 
							ScoreFactory.correct++;
						}
						else {
							scope.answeredCorrectly = false;	
							ScoreFactory.incorrect++;
							}	
					} else {
						
						scope.alreadyAnswered = true;		
					}

				}
		}
	};

});