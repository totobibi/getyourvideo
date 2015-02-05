var appUtilisateur = angular.module('Utilisateur', ['ngCookies']);

var utilisateur = {
	id: 'arigold',
	email: 'airgold@gmail.com',
	password: 'SolidSnak7731',
	logged: false
};

appUtilisateur.controller('UtilisateurController', ['$http', '$rootScope', '$location', '$cookies', function($http, $rootScope, $location, $cookies) {
	//$rootScope.utilisateurCourant = {};
	this.utilisateur = {};

	this.connexion = function() {
		// On appelle le service http pour vérifier l'utilisateur

		// En cas de succès de la méthode post, on enregistre l'utilisateur courant dans la variable utilisateur du rootScope
		this.utilisateur.logged = true;
		$rootScope.utilisateurCourant = this.utilisateur;
		$cookies.utilisateurCourant = JSON.stringify(this.utilisateur);

		this.utilisateur = {}; // l'utilisateur en cours


		$location.path('accueil'); // Redirection vers l'accueil
	};

	this.inscription = function() {

	};
}]);


// Ici nous le tranformormerons en directive
appUtilisateur.controller('TabConnexionInscriptionController', function() {
	this.current = 1;

	this.setTab = function(newValue) {
		this.current = newValue;
	};

	this.isSet = function(evaluatedValue) {
		return this.current === evaluatedValue;
	};

	this.clickTab = function(tabClicked, event) {
		this.setTab(tabClicked);
		if(event) event.preventDefault();
	};
});

