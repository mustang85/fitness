;(function (argument) {
	"use strict";

	angular
		.module('appFitness.profileMain.service', ['firebase'])
		.service('profileMain', profileMain);

		profileMain.$inject = ['$log', 'FIREBASE_URL', '$firebaseObject', '$firebaseArray'];

		function profileMain($log, FIREBASE_URL, $firebaseObject, $firebaseArray) {
			var self = this;

			var ref = new Firebase(FIREBASE_URL),
				refObj = $firebaseObject(ref),
				refArr = $firebaseArray(ref),
				usersRef = ref.child('users'),
				usersArr = $firebaseArray(usersRef);

			this.getUsers = function (cb) {
			 	return usersArr.$loaded(cb); // когда я загружусь я выполню cb, 
			 	// тоесть пока я не загружу все данные cb не будет вызван
			};

			this.updateUser = function (_user) {
				return usersArr.$save(_user);
			};

			refArr.$loaded(function() {
				self.dbArr = refArr;
			});

			
		}

})();