let inputvalue = document.querySelector('.todo-value') as HTMLInputElement;
let addTodoBtn = document.querySelector('.add-todo') as HTMLButtonElement;
let todoList = document.querySelector('.todoList') as HTMLDivElement;


interface TypeTodo {
  id: string,
  title: string,
  isCompleted : boolean
}


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
    addTodoList(newValueTdoo)
    console.log(newValueTdoo.title);
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




addTodoBtn.addEventListener('click',(e)=>(clickHandler(e)))


