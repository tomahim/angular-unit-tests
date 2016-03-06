(function() {
    'use strict';

    angular
        .module('app.todo-list')
        .factory('TodoListSvc', TodoListSvc);

    TodoListSvc.$inject = ['TodoListDA'];

    function TodoListSvc(TodoListDA) {
        var service = {
            getTodoList: getTodoList,
            addTask : addTask,
            removeTask : removeTask
        };

        return service;

        function getTodoList() {
            return TodoListDA.getTodoListFromServer();
        }

        function addTask(task) {
            return TodoListDA.addTask(task);
        }

        function removeTask(task) {
            return TodoListDA.removeTask(task);
        }
    }
})();