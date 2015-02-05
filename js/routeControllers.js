var routeControllers = angular.module('RouteControllers', []);

routeControllers.controller('AccueilController', ['$rootScope', function($rootScope) {
}]);

routeControllers.controller('ConnexionIscriptionController', function() {});

routeControllers.controller('ComplexeController',['$routeParams', '$rootScope', function($routeParams, $rootScope) {
	$rootScope.complexeCourant = {};
	$rootScope.complexeCourant.id = $routeParams.complexeId;
}]);