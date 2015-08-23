var tableTemplate = angular.module('tableTemplate', []);

/*tableTemplate.directive('requiredCourse', function () {
  return {
    scope: {
      item: '=requiredCourse'
    },
    restrict: 'EA',
    templateUrl: 'partials/table-contents.html'
    };
});*/

tableTemplate.directive('headers', function () {
  return {
    restrict: 'EA',
    template: '<td>name</td><td>number</td><td>credits</td><td>completed</td><td>scheduled</td>'
    };
});

tableTemplate.directive('degreeAudit', function() {
	return {
		restrict: 'EA',
		template: '<td></td><td>Total:</td><td>{{credits}}</td><td>{{completed}}</td><td>{{scheduled}}</td>'
	}

})