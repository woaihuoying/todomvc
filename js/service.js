/**
 * Created by Alice on 16/10/22.
 */

//服务模块  数据的添加,删除,修改,保存,更新  查询

(function () {
	var serviceModule = angular.module('todoApp.service',[]);
	//创建服务
	serviceModule.service('MainService',['$window',function ($window) {

		// var todos = [
		// 	{text:"相亲",completed:true,id:1},
		// 	{text:"结婚",completed:false,id:2},
		// 	{text:"生猴子",completed:false,id:3},
		// ];

		//angular.fromJson  字符串转换成对象
		var todos = $window.localStorage['todo'] ? angular.fromJson($window.localStorage['todo']) : [];

		console.log(angular.fromJson($window.localStorage['todo']));

		//接口获取数据
		this.getTodos = function () {
			return todos;
		}

		//保存
		this.save = function () {
			$window.localStorage['todo'] = angular.toJson(todos);
		}


		//添加
		this.addTodo = function (text) {
			//时间戳
			var id = new Date().getTime();
			todos.push({text:text,completed:false,id:id});

			this.save();
		}

		//删除
		this.removeTodo = function (index) {
			todos.splice(index,1);

			this.save();
		}

		//获取未完成的条数
		this.leftCount = function () {
			var count = 0;

			for(var i=0;i<todos.length;i++) {
				if(todos[i].completed != true) {
					count++;
				}
			}

			return count;
		}

		//点击按钮,全选的事件
		this.toggleAllCompleted = function (status) {
			for(var i=0;i<todos.length;i++) {
				todos[i].completed = !status;
				//$scope.todos[i].completed = all;
			}

			this.save();
		}

		//是否显示山删除已完成事件的按钮
		this.exitCompleted = function () {
			for(var i=0;i<todos.length;i++) {
				if(todos[i].completed) {
					return true;
				}
			}
			return false;
		}

		//删除已完成事件
		this.clearCompleted = function () {
			//var temp = [];


			/*
			* [a,c,d]
			*
			*i = 1 i =2
			* */

			for(var i=0;i<todos.length;i++) {
				if(todos[i].completed) {
					//拿到所有未完成的事件
					//temp.push(todos[i]);
					todos.splice(i,1);
					i--;
				}
			}
			//todos = temp;

			this.save();
		}

	}])

})();
