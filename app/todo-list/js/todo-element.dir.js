(function() {
    'use strict';

    angular
        .module('app.todo-list')
        .directive('todoElement', todoElement);

    function todoElement() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'templateUrl',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
        }
    }

    Controller.$inject = ['dependencies'];

    function Controller(dependencies) {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();