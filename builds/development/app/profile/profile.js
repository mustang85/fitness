;(function() {
	"use strict";
	angular
		.module('appFitness.profile', ['ngRoute'])
		.config(configProfile)
		.controller('ProfileCtrl', ProfileCtrl);

		ProfileCtrl.$inject = ['$scope', '$rootScope','profileMain'];

		function ProfileCtrl($scope, $rootScope, profileMain) {
			var vm = this;

			vm.page = 'account';
			vm.section = 'profile';
			vm.user = null;

			vm.add = function (_d) {
				vm.page = _d;
				console.log(vm.page);
			};

			profileMain.getUsers(function(_data) {
				vm.users = _data;
				// vm.user = vm.users;
			});

			vm.updateUser = function (_user) {
				console.log( angular.isDefined(_user) );
				console.log( angular.isDefined(_user.name) );
				console.log( angular.isDefined(_user.email) );
				console.log( angular.isDefined(_user.weight) );
				console.log( angular.isDefined(_user.growth) );
				console.log( angular.isDefined(_user.age) );

				if (angular.isDefined(_user) &&
					angular.isDefined(_user.name) &&
					angular.isDefined(_user.email) &&
					angular.isDefined(_user.weight) &&
					angular.isDefined(_user.growth) &&
					angular.isDefined(_user.age)) {
						profileMain.updateUser(_user).then(function() {
							vm.closeEdit();
						});
				}

				
			};

			vm.closeEdit = function () {
				vm.user = null;
			};

			vm.setEdit = function (_user) {
				vm.user = _user;
			};

			vm.resetEdit = function (_user) {
				_user.name = null;
				_user.age = null;
				_user.email = null;
				_user.weight = null;
				_user.growth = null;
			};


			console.log(vm.user);

			console.log($scope, vm);
			
		};

		configProfile.$inject = ['$routeProvider'];

		function configProfile($routeProvider) {
			$routeProvider.
				when('/profile', {
					templateUrl: 'app/profile/profile.html',
					controller: 'ProfileCtrl',
					controllerAs: 'vm'
				});
		};

})();