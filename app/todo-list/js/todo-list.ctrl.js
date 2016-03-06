(function() {
    'use strict';

    angular
        .module('app.todo-list')
        .controller('TodoListCtrl', TodoListCtrl);

    TodoListCtrl.$inject = ['TodoListSvc'];

    function TodoListCtrl(TodoListSvc) {
        var vm = this;

        vm.initTodoList = initTodoList;
        vm.addTask = addTask;
        vm.removeTask = removeTask;

        vm.tasksList = [];

        activate();

        function activate() {
            initTodoList();
        }

        function initTodoList() {
            TodoListSvc.getTodoList().then(function(tasks) {
                vm.tasksList = tasks;
            });
        }

        function addTask(task) {
            TodoListSvc.addTask(task).then(function(addedTask) {
                vm.tasksList.push(angular.copy(addedTask));
                vm.newTask.nom = '';
            });
        }

        function removeTask(task) {
            TodoListSvc.removeTask(task).then(function() {
                _.remove(vm.tasksList, function(item) {
                    return item.id === task.id;
                });
            });
        }
    }
})();