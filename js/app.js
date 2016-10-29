(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	var todoApp = angular.module('todoApp',['ngRoute','todoApp.controller']);

	todoApp.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.
		when('/',{
			templateUrl:'todo.html',
			controller:'MainCtrl'
		}).when('/:status',{
			templateUrl:'todo.html',
			controller:'MainCtrl'
		});

	}]);

})(window);
