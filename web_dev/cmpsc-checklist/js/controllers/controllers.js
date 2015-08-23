var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('courses', ['$scope', 'data',
	function($scope, data){
		var self = this;
		var courses = $scope.courses = data.get('core');
		
		var init = function(){
			$scope.toggleCompleted();
			$scope.toggleScheduled();
			sumCredits();
		};

		var sum = function(list, key, countCredits) {
			var marker = 0;

			angular.forEach(list, function(value){
				marker += value['credits'] *  (countCredits * value[key] + !countCredits * 1);
			})	

			$scope[key] = marker;
		};

		$scope.toggleCompleted = function() {
			sum(courses, 'completed', true);
		}

		$scope.toggleScheduled = function() {
			sum(courses, 'scheduled', true);
		}
		
		var sumCredits = function() {
			sum(courses, 'credits', false);
		};

		$scope.reset = function() {
			data.reset();
			courses = $scope.courses = data.get('core');
			console.log(data.get('core'));
			init();
			//courses = $scope.courses = data.get('core');
		};


		init();
		/*
		var audit = [0,0,0];
		angular.forEach(data.dummyData, function(value, key) {
			this[0] += value['credits'];
			this[1] += value['completed'];
			this[2] += value['scheduled'];
		}, audit);


		$scope.credits = audit[0];
		$scope.completed = audit[1];
		$scope.scheduled = audit[2];

		$scope.change = function() {
			console.log('here');
		};

		$scope.c = true;
		*/		
	}]);
