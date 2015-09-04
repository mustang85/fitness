// initialize material design js
$.material.init();

;(function() {
	'use strict';

	angular
		.module('appFitness', [
				'ngRoute', 
				'appFitness.main',
				'appFitness.about', 
				'appFitness.contact',
				'appFitness.workout'
		])
		.config(Config)

		Config.$inject = ['$routeProvider', '$locationProvider'];

		function Config($routeProvider, $locationProvider,$logProvider) {
			$routeProvider.
				otherwise({ redirectTo: '/' });
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
			// $logProvider.debugEnabled(true);
		};
		

})();


