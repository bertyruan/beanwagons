var cmpscStorage = angular.module('courseService', ['ngStorage']);

cmpscStorage.factory('data', ['$localStorage', function($localStorage){

	function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	};

	var courses = {
		core: [
			{
				'name': 'Introduction to Programming Techniques',
				'number': '121',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Intermediate Programming',
				'number': '122',
				'credits': 3,
				'completed': false,
				'scheduled': false
			},
			{
				'name': 'Object Oriented Programming with Web-Based Applications',
				'number': '221',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Introduction to Systems Programming',
				'number': '311',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Discrete Mathematics for Computer Science',
				'number': '360',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Programming Language Concepts',
				'number': '461',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Data Structures and Algorithms',
				'number': '465',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Introduction to the Theory of Computation',
				'number': '464',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Operating Systems Design & Construction',
				'number': '473',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'CMPEN: Introduction to Digital Systems',
				'number': '271',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'CMPEN: Computer Organization and Design',
				'number': '331',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			}
		]
	};

	
	var defaults = $localStorage = $localStorage.$default(courses);
	var store = {
		get: function(item) {
			if(angular.isUndefined($localStorage.core))
				defaults = $localStorage =  $localStorage.$default(courses);
			return $localStorage[item];
		},

		reset: function() {
			$localStorage.$reset();
			$localStorage.$reset(courses);
		
			console.log("cmpscStorage.js: reset()");
		
		},

		init: function() {
			defaults = $localStorage =  $localStorage.$default(courses);
		}
	};

	return store;

}]);