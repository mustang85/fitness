;(function (argument) {
	"use strict";

	angular
		.module('appFitness.exercisesProfile.service', ['firebase'])
		.service('exercisesProfile', exercisesProfile);

		exercisesProfile.$inject = ['FIREBASE_URL', '$firebaseObject', '$firebaseArray'];

		function exercisesProfile(FIREBASE_URL, $firebaseObject, $firebaseArray) {
			var self = this;

			var ref = new Firebase(FIREBASE_URL),
				usersArr = $firebaseArray(ref.child('exercises').child(1));

			this.getUsers = function (cb) {
			 	return usersArr.$loaded(cb); // когда я загружусь я выполню cb, 
			 	// тоесть пока я не загружу все данные cb не будет вызван
			};

			this.updateUser = function (_user) {
				return usersArr.$save(_user);
			};



			
		}

})();