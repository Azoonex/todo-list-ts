let inputvalue = document.querySelector('.todo-value') as HTMLInputElement;
let addTodoBtn = document.querySelector('.add-todo') as HTMLButtonElement;
let todoList = document.querySelector('.todoList') as HTMLDivElement;
let clearTodos = document.querySelector('.clear-todos') as HTMLButtonElement
interface TypeTodo {
  id: string,
  title: string,
  isCompleted : boolean
}

let todos:TypeTodo[] = JSON.parse(localStorage.getItem('todos') || '[]') 


const clickHandler = (e:Event) => {

  e.preventDefault()

  if(inputvalue.value === '' || inputvalue.value.length < 3){
    alert('noting value adding')
  }else {
    let newValueTdoo: TypeTodo =  {
      id: crypto.randomUUID(),
      title : inputvalue.value,
      isCompleted : false
    } 

    addTodoList(newValueTdoo);
    todos.push(newValueTdoo)
    svaeTodoInlocalStorage()
    inputvalue.value = ''
  }
}



const addTodoList = (todo:TypeTodo,)=>{
  todoList.insertAdjacentHTML('beforeend', 
  `
  <li onclick="removeTodo('${todo.id}')">
  ${todo.title}<span class="icon"
    ><i class="fas fa-trash"></i
  ></span>
  </li>
  `
  )
}

const svaeTodoInlocalStorage = ()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
  return true
}

const removeTodo = (todoID:string)=>{
  todos = todos.filter(todo => todo.id !== todoID)
  svaeTodoInlocalStorage()
  todoList.innerHTML = ''
  todos.forEach(todo=> addTodoList(todo))
}

clearTodos.addEventListener('click',()=>{
  todoList.innerHTML = ''
    todos = []
    svaeTodoInlocalStorage()
  
})


addTodoBtn.addEventListener('click',(e)=>(clickHandler(e)))

window.addEventListener('DOMContentLoaded',()=>{
  todos.forEach(todo=> addTodoList(todo))
})