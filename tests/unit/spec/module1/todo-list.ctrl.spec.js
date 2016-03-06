describe('TodoListCtrl', function(){

    var TodoListCtrl;

    
    //var TodoListSvcMock = jasmine.createSpyObj('TodoListSvc', ['getTodoList']);

    var mockTasks = [{
                    id : 1,
                    nom : 'Faire les courses'
                }, {
                    id : 2,
                    nom : 'Lire la doc de Jasmine'
                }];
    /*
    TodoListSvcMock.getTodoList.and.returnValue({
        then: function() {
            return mockTasks; 
        }
    });*/

    var $rootScope; 

    beforeEach(function(){
        angular.mock.module('app.todo-list');
        angular.mock.module('app.todo-list.mocks');
    });

    beforeEach(inject(function(_$controller_, _$rootScope_, _TodoListSvcMock_){
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        TodoListSvcMock = _TodoListSvcMock_;
        TodoListCtrl = _$controller_('TodoListCtrl', {
            $scope:  scope,
            TodoListSvc : TodoListSvcMock//TodoListSvc
        });
    }));

    describe('activate()', function() {

        it('should init Todo List', function() {

            $rootScope.$digest();

            expect(TodoListCtrl.tasksList).toEqual(mockTasks);
        });
    });
       
});