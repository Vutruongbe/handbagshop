var todos = [];

function onAddClick(){
    var newTodo = document.getElementById('newReview').value;
    todos.push(newTodo);

    updateTodoList();

    var newTodo = document.getElementById('newReview').value = "";
}

function updateTodoList(){
    var eleTodolist = document.getElementById('review-list');

    eleTodolist.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        eleTodolist.innerHTML += '<li onclick="onTodoClick(' + i + ');">' + todos[i] + '</li><hr>';
    }
}

function onTodoClick(index){
    todos.splice(index, 1);

    updateTodoList();
}