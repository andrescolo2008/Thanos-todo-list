
import { Todo } from "../models/todo-model";
/**
 * @param {Todo} todo
 */
export const createTodoHTML= (todo)=>{
    if(!todo) throw new Error(' A  TODO object is required ');
    
    const {done,description,id}=todo; // aquí desestructuro  el arreglo todo, para no tener que colocar: todo.done, todo. id, etc. para simplemente colocar la propiedad que quiero, en este caso  done.
   
    const html=  
   //  <label>${ todo.description} </label>, describe la lista de tareas, realziadas o pendientespor realziar 
 
    `  
    <div class="view">
        <input class="toggle" type="checkbox"${done?"checked":'' }>
         <label>${ description} </label> 
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">

 `;
    const liElement =document.createElement('li');
    liElement.innerHTML=html;
    liElement.setAttribute('data-id',id);

    if(todo.done)
    liElement.classList.add('completed');

    return liElement;
}