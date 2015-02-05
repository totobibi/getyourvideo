// Chargement de foundation
$(document).foundation();

// Décalration de l'application
var app = angular.module('getyourvideo', ['ngRoute', 'ngCookies', 'RouteControllers', 'Utilisateur']);

app.run(function($rootScope, $cookies) {
	if($cookies.utilisateurCourant) $rootScope.utilisateurCourant = JSON.parse($cookies.utilisateurCourant);
	else $rootScope.utilisateurCourant = {};
});

// Objet Complexes
var complexes = [
	{
		id: 'bonito',
		nom: 'Bonito Foot',
		nbTerrains: 4,		
		logoUrl: 'logoBonito.png',
		ouverture: '7j/7'
	},
	{
		id: 'classico',
		nom: 'Classico Foot',
		nbTerrains: 3,
		logoUrl: 'logoClassico.png',
		ouverture: '6j/7'
	}
];


// Configuration des routes de l'application
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/accueil', {
      	templateUrl: '/modules/accueil/accueil.html',
      	controller: 'AccueilController'
      }).
      when('/connexion-inscription', {
      	templateUrl: '/modules/utilisateur/connexion-inscription.html',
      	controller: 'ConnexionIscriptionController'
      }).
      when('/:complexeId', {
        templateUrl: '/modules/complexe/complexes.html',
        controller: 'ComplexeController'
      }).
      otherwise({
        redirectTo: '/accueil'
      });
  }]
);

app.controller('HeaderController', function() {

});


app.controller('LiensComplexesController', function() {
	this.complexes = complexes;
});


// Directive pour le panel controller
app.directive('panelComplexes', function() {
	return {
		restrict : 'E',
		templateUrl: '/modules/accueil/panel-complexes.html',
		controller: function() {
			this.complexes = complexes;
		},
		controllerAs: 'panelComplexeCtrl'
	};
});

