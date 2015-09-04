;(function() {
	"use strict";
	angular
		.module('appFitness.exercises', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('ExercisesCtrl', ExercisesCtrl);

		ExercisesCtrl.$inject = ['scope','rootScope'];

		function ExercisesCtrl($scope, $rootScope) {

		};

		function config($routeProvider) {
			$routeProvider.
				when('/exercises', {
					templateUrl: 'app/exercises/exercises.html',
					controller: 'ExercisesCtrl',
					controllerAs: 'vm'
				});
		}	

})();