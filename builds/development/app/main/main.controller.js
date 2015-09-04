;(function() {
	"use strict";

	angular
		.module('appFitness.main', ['ngRoute'])
		.config(configMain)
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope', '$rootScope'];

	function MainCtrl($scope, $rootScope) {
		$rootScope.curPath = 'main';
		$scope.title = 'Это приветственная страница';
		$scope.name = 'Kir';
		$scope.clickFunction = function(name) {
			alert('Hi, ' + name);
		}
	};

	configMain.$inject = ['$routeProvider'];

	function configMain($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			})
	};

})();