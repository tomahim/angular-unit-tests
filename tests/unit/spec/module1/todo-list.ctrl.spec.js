describe('TodoListCtrl', function(){

    var TodoListCtrl, TodoListSvc;

    var mockTasks = [{
                    id : 1,
                    nom : 'Faire les courses'
                }, {
                    id : 2,
                    nom : 'Lire la doc de Jasmine'
                }];

    var $rootScope;

    beforeEach(function(){

        angular.mock.module('app.todo-list');
        angular.mock.module('app.todo-list.mocks');
    });

    beforeEach(inject(function(_$controller_, _$rootScope_, _TodoListSvcMock_){
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        TodoListSvc = _TodoListSvcMock_;

        //spyOn(TodoListSvc, 'getTodoList');
        //spyOn(TodoListSvc, 'addTask');

        TodoListCtrl = _$controller_('TodoListCtrl', {
            $scope:  scope,
            TodoListSvc : TodoListSvc//TodoListSvc
        });
    }));

    describe('activate()', function() {

        it('should init Todo List', function() {

            $rootScope.$digest();

            expect(TodoListCtrl.tasksList).toEqual(mockTasks);
        });
    });

    describe('addTask()', function() {
        it('should add one task', function() {

            TodoListCtrl.newTask = {
                nom : 'Test'
            };

            TodoListCtrl.addTask(TodoListCtrl.newTask);

            $rootScope.$digest();

            //expect(TodoListSvc.addTask).toHaveBeenCalled();

            expect(TodoListCtrl.tasksList.length).toEqual(3);
        });
    });

    describe('removeTask()', function() {
        it('should add one task', function() {

            TodoListCtrl.removeTask(mockTasks[1]);

            $rootScope.$digest();

            expect(TodoListCtrl.tasksList.length).toEqual(1);
        });
    });

});