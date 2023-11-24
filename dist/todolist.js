let inputvalue = document.querySelector('.todo-value');
let addTodoBtn = document.querySelector('.add-todo');
let todoList = document.querySelector('.todoList');
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
        console.log(newValueTdoo.title);
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
addTodoBtn.addEventListener('click', (e) => (clickHandler(e)));
//# sourceMappingURL=todolist.js.map