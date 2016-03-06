(function() {
    'use strict';

    angular
        .module('app', [
        	'app.todo-list',
        	'restangular',
        	'ui.router'
        ])
        .config(config);

        function config($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/todo');

			$stateProvider
			.state('todo-list', {
				url: '/todo',
				controller : 'TodoListCtrl',
                controllerAs : 'vm',
				templateUrl: 'app/todo-list/views/todo-list.html'
			});
        }
})();