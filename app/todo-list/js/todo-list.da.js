(function() {
    'use strict';

    angular
        .module('app.todo-list')
        .factory('TodoListDA', TodoListDA);

    TodoListDA.$inject = ['Restangular', '$q'];

    function TodoListDA(Restangular, $q) {
        var service = {
            getTodoListFromServer: getTodoListFromServer,
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

        function getTodoListFromServer() {
            var defer = $q.defer();
            defer.resolve(angular.copy(mockTasks));
            return defer.promise;
        }

        function addTask(task) {
            var defer = $q.defer();
            var lastElement = _.max(mockTasks, 'id');
            task.id = lastElement ? (lastElement.id+1) : 1;
            mockTasks.push(task);
            defer.resolve(task);
            return defer.promise;
        }

        function removeTask() {
            var defer = $q.defer();
            defer.resolve();
            return defer.promise;            
        }
    }
})();