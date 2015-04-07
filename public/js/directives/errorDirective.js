app.directive('error', function(){
	return {
		restrict: 'E',
		template: "<span style='red' ng-transclude></span>",
		transclude: true
	}
})