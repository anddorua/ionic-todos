/**
 * Created by andrey on 19.03.17.
 */
app.controller('TodosCtrl', function($scope, $firebaseArray, $state, todoService, $ionicActionSheet){
    $scope.todos = todoService.all;
    $scope.saveTodo = function(){
        todoService.all.$add({
            todoName: this.todoName
        });
        console.log('Wrote:', this.todoName);
        this.todoName = '';
        $state.go('todos');
    };
    var self = $scope;
    $scope.removeTodo = function(id){
        console.log("removing.", id );
        $ionicActionSheet.show({
            destructiveText: "Remove Todo",
            titleText: "Are you sure?",
            cancelText: "Cancel",
            destructiveButtonClicked: function(){
                var rem = $scope.todos.$getRecord(id);
                console.log("sure removing:", rem);
                $scope.todos.$remove(rem);
                return true;
            }
        });
    };
});