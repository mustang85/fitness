// angular.module('ngFit.contact', ['ngRoute'])

// .config(['$routeProvider', function ($routeProvider) {
// 	$routeProvider.
// 		when('/contact', {
// 			templateUrl: 'app/contact/contact.html',
// 			controller: 'ContactCtrl'
// 		});
// }])

// .controller('ContactCtrl', ['$scope', function($scope) {
		
// }]);

;(function() {
	"use strict";

	angular
		.module('appFitness.contact', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('ContactCtrl', ContactCtrl);

	ContactCtrl.$inject = ['$scope', '$rootScope'];

	function ContactCtrl($scope, $rootScope) {
		$rootScope.curPath = 'contact';
		$scope.title = 'contact';
		console.log( $rootScope.curPath );
	};

	function config($routeProvider) {
		$routeProvider.
			when('/contact', {
				templateUrl: 'app/contact/contact.html',
				controller: 'ContactCtrl'
			});
	};
})();