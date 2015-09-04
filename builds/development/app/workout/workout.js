;(function() {
	"use strict";
	angular
		.module('appFitness.workout', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('WorkoutCtrl', WorkoutCtrl);

	WorkoutCtrl.$inject = ['$scope','$rootScope'];

	function WorkoutCtrl($scope,$rootScope) {
		var vm = this;

		$rootScope.curPath = 'workout';
		$scope.title = 'Это наш первый scope title';
		console.log(this);
		vm.add = function (_d) {
			vm.page = _d;
			console.log(vm.page);
		}

		
	};

	function config($routeProvider) {
		$routeProvider.
			when('/workout', {
				templateUrl: 'app/workout/workout.html',
				controller: 'WorkoutCtrl',
				controllerAs: 'vm',
			});
	};

})();