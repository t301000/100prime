var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.data = [];
	for (var i = 0; i < 100; i++) {
		$scope.data.push({value: i+1, shown: 1});
	}

	$scope.hightlightMe = function(item){
		switch(item.shown){
			case 1:
				item.shown++;
				break;
			case 2:
				item.shown--;
				break;
		}
	};

	$scope.hideMe = function(item){
		switch(item.shown){
			case 0:
				item.shown++;
				break;
			default:
				item.shown = 0;
				break;
		}
	};

	$scope.toogleGroup = function(num){
		if(num === 'prime'){
			var maxDivisor = Math.sqrt(120);
			$scope.data[0].shown = 0;
			for(var i = 2; i <= maxDivisor; i++){
				angular.forEach($scope.data, function(item){
					if(item.value > i && item.shown && !(item.value % i)){
						item.shown = 0;
					}
				});
			}
		}else{
			angular.forEach($scope.data, function(item){
				if(item.value > num && item.shown && !(item.value % num)){
					item.shown = (item.shown+1)%3;
				}
			});
		}
	};

	$scope.resetAll = function(){
		angular.forEach($scope.data, function(item){ item.shown = 1;});
	};
}]);