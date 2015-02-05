var routeControllers = angular.module('RouteControllers', []);

routeController.controller('AccueilController', function() {

});

routeControllers.controller('BonitoController',['$routeParams',  function($routeParams) {
	alert('je suis dans le complexe ' + $routeParams.complexeId);
}]);