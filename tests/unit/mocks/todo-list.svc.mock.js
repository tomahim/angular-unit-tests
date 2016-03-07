(function() {
    'use strict';

    angular
        .module('app.todo-list.mocks', [
            'app.todo-list'
        ]);

    angular
        .module('app.todo-list.mocks')
        .factory('TodoListSvcMock', TodoListSvcMock);

    TodoListSvcMock.$inject = ['$q'];

    function TodoListSvcMock($q) {
        var service = {
            getTodoList: getTodoList,
            addTask : addTask,
            removeTask : removeTask
        };

        var mockTasks = [{
            id : 1,
            nom : 'Faire les courses'
        }, {
            id : 2,
            nom : 'Lire la doc de Jasmine'
        }];

        return service;

        function getTodoList() {
            var defer = $q.defer();
            defer.resolve(mockTasks);
            return defer.promise;
        }

        function addTask(task) {
            var defer = $q.defer();
            defer.resolve(task);
            return defer.promise;
        }

        function removeTask(task) {
            var defer = $q.defer();
            defer.resolve(task);
            return defer.promise;
        }
    }
})();