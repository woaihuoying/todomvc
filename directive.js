/**
 * Created by Alice on 16/10/23.
 */

(function () {

	angular.module('todoApp.directive',[]).directive('focus',['$timeout',function ($timeout) {

		return {
			link: function (scope,ele,attr) {

				//console.log(ele[0]);
				//ele[0].focus();

				//console.log(attr.focus);

				scope.$watch(attr.focus,function (now) {
					if(now) {
						//alert(123);
						$timeout(function () {
							ele[0].focus();
						},0);
					}
				})

			}
		}

	}]);;

})()
