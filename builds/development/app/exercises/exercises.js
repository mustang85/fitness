;(function() {
	"use strict";
	angular
		.module('appFitness.exercises', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('ExercisesCtrl', ExercisesCtrl);

		ExercisesCtrl.$inject = ['$scope','$rootScope','exercisesProfile'];

		function ExercisesCtrl($scope, $rootScope, exercisesProfile) {
			var vm = this;
			vm.section = 'exercises';

			exercisesProfile.getUsers(function(_data) {
				vm.users = _data;
			});
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