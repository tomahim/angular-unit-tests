describe("Tests du service Angular TodoListSvc", function() {

    var TodoListSvc;
    var TodoListDA = jasmine.createSpyObj('TodoListDA', ['getTodoListFromServer']);

    beforeEach(function() {
        angular.mock.module('app.todo-list', function($provide){
            $provide.value('TodoListDA',TodoListDA);
        });
        angular.mock.inject(function ($injector) {
            TodoListSvc = $injector.get('TodoListSvc');
        });
    });

    describe("Récupération de toutes les civilités :", function() {
        
        it('should call CiviliteDA.getAll', function() {
            expect(TodoListSvc).toBeDefined();
            
            TodoListSvc.getTodoList();
            expect(TodoListDA.getTodoListFromServer).toHaveBeenCalled();
        });

    });
});