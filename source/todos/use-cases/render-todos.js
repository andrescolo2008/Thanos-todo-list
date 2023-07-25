import { Todo } from "../models/todo-model"
import { createTodoHTML } from "./"; // se coloca './ ' porque pertenece a la misma carpeta de use-cases 
let element;

 /** 
     * @param { String} elementId
     * @param { Todo} todos
     * 
     */
export const renderTodos= (elementId,todos=[])=> {
if(!element)
   element= document.querySelector(elementId);

   if(!element) throw new Error (`Elemnet${elementId} not found`);
   
element.innerHTML = '';

todos.forEach( todo=>{
element.append(createTodoHTML(todo))
   });

}