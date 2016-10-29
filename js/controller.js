/**
 * Created by Alice on 16/10/22.
 */

(function () {

	var controllerModule = angular.module('todoApp.controller',['ngRoute','todoApp.service','todoApp.directive']);

	controllerModule.controller('MainCtrl',['$scope','$location','$routeParams','MainService',function ($scope,$location,$routeParams,MainService) {


		//绑定输入框的信息
		$scope.text = "";

		//所有信息的列表数据
		$scope.todos = MainService.getTodos();

		//保存
		$scope.saveValue = function () {
			MainService.save();
		}

		//添加数据
		$scope.addTodo = function (event) {
			//console.log(event);
			//alert(123);
			if($scope.text == 0) {return}

			MainService.addTodo($scope.text);

			//清空输入框
			$scope.text = '';
		}

		//删除数据
		$scope.removeTodo = function (index) {
			MainService.removeTodo(index);
		}

		//编辑状态
		$scope.editIndex = -10;   //确保跟$index 不重复
		$scope.editTodo = function (index) {
			$scope.editIndex = index;
		}

		//保存编辑的数据
		$scope.saveTodo = function () {

			//判断是否是回车  13
			//if(event.keyCode == 13) {
				//编辑完成
				$scope.editIndex = -10;   //确保跟$index 不重复
			//}
		}

		//获取未完成的条数
		$scope.leftCount = function () {
			var count = MainService.leftCount();
			$scope.allChecked = !count;

			return count;
		}

		//点击按钮,全选的事件
		//var all = true;
		$scope.toggleAll = function () {

			MainService.toggleAllCompleted($scope.allChecked);
			//all = !all;
		}


		//是否显示山删除已完成事件的按钮
		$scope.exitCompleted = function () {

			return MainService.exitCompleted();
		}

		//删除已完成事件
		$scope.clearCompleted = function () {
			MainService.clearCompleted()
		}

		//切换状态

		//第一种方式
		// $scope.all = function () {
		// 	$scope.search = '';
		// }
		// $scope.active = function () {
		// 	$scope.search = {completed:false};
		// }
		// $scope.completed = function () {
		// 	$scope.search = {completed:true};
		// }


		//console.log($location.$$path);
		//console.log($location.path());   //getter
		//console.log($location.path('1243'));   //setter
		//第二种方式
		// $scope.location = $location;
		// $scope.$watch('location.path()',function () {
		//
		// 	//alert('ee');
		// 	switch($location.path()) {
		// 		case '/active':
		// 			$scope.search = {completed:false};
		// 			break;
		// 		case '/completed':
		// 			$scope.search = {completed:true};
		// 			break;
		// 		default:
		// 			$scope.search = '';
		// 			break;
		// 	}
		// });

		//第三种方式(路由)
		//$routeParams
		//console.log($routeParams.status);
		$scope.status = $routeParams.status || '';

		switch ($routeParams.status) {
			case 'active':
				$scope.search = {completed:false};
				break;
			case 'completed':
				$scope.search = {completed:true};
				break;
			default:
				$scope.search = '';
				break;
		}

		console.log("我是控制器");


	}]);

})();
