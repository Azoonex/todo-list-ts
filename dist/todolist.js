let inputvalue = document.querySelector('.todo-value');
let addTodoBtn = document.querySelector('.add-todo');
let todoList = document.querySelector('.todoList');
let clearTodos = document.querySelector('.clear-todos');
let todos = JSON.parse(localStorage.getItem('todos') || '[]');
const clickHandler = (e) => {
    e.preventDefault();
    if (inputvalue.value === '' || inputvalue.value.length < 3) {
        alert('noting value adding');
    }
    else {
        let newValueTdoo = {
            id: crypto.randomUUID(),
            title: inputvalue.value,
            isCompleted: false
        };
        addTodoList(newValueTdoo);
        todos.push(newValueTdoo);
        svaeTodoInlocalStorage();
        inputvalue.value = '';
    }
};
const addTodoList = (todo) => {
    todoList.insertAdjacentHTML('beforeend', `
  <li onclick="removeTodo('${todo.id}')">
  ${todo.title}<span class="icon"
    ><i class="fas fa-trash"></i
  ></span>
  </li>
  `);
};
const svaeTodoInlocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return true;
};
const removeTodo = (todoID) => {
    todos = todos.filter(todo => todo.id !== todoID);
    svaeTodoInlocalStorage();
    todoList.innerHTML = '';
    todos.forEach(todo => addTodoList(todo));
};
clearTodos.addEventListener('click', () => {
    todoList.innerHTML = '';
    todos = [];
    svaeTodoInlocalStorage();
});
addTodoBtn.addEventListener('click', (e) => (clickHandler(e)));
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => addTodoList(todo));
});
//# sourceMappingURL=todolist.js.map