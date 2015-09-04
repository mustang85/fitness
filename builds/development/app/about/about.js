;(function() {
	"use strict";
	angular
		.module('appFitness.about', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['$scope','$rootScope'];

	function AboutCtrl($scope,$rootScope) {
		$rootScope.curPath = 'about';
		$scope.title = 'Это наш первый scope title';
	};

	function config($routeProvider) {
		$routeProvider.
			when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'vm'
			});
	};

})();
