;(function() {
	"use strict";
	angular
		.module('appFitness.statistics', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('StatisticsCtrl', StatisticsCtrl);

		StatisticsCtrl.$inject = ['$scope','$rootScope'];

		function StatisticsCtrl($scope, $rootScope) {
			var vm = this;
			vm.section = "statistics";

		};

		function config($routeProvider) {
			$routeProvider.
				when('/statistics', {
					templateUrl: 'app/statistics/statistics.html',
					controller: 'StatisticsCtrl',
					controllerAs: 'vm'
				});
		}	

})();