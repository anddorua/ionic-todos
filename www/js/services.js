/**
 * Created by andrey on 19.03.17.
 */
app.factory('todoService', function($firebaseArray){
    var ref = firebase.database().ref();
    var todos = $firebaseArray(ref);
    return {
        all: todos,
        get: function(todoId){
            return todos.$getRecord(todoId);
        }
    };
});