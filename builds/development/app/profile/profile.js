;(function() {
	"use strict";
	angular
		.module('appFitness.profile', ['ngRoute'])
		.config(['$routeProvider', config])
		.controller('ProfileCtrl', ProfileCtrl);

		ProfileCtrl.$inject = ['$scope', '$rootScope'];

		function ProfileCtrl($scope, $rootScope) {
			var vm = this;
			vm.page = 'account';

			vm.add = function (_d) {
				vm.page = _d;
				console.log(vm.page);
			}

			
			
		};

		function config($routeProvider) {
			$routeProvider.
				when('/profile', {
					templateUrl: 'app/profile/profile.html',
					controller: 'ProfileCtrl',
					controllerAs: 'vm'
				});
		}	

})();