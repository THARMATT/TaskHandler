import { createContext, useContext } from "react";

export const TodoContext=createContext({
       todos:[{
        id:1,
        todo:'string',
        completed:false
       },],
       addTodo:(todo)=>{},
       toggleTodo:(id)=>{},
       updateTodo:(todo,id)=>{},
       deleteTodo:(id)=>{},

})

export const useTodo=()=>{
    return useContext(TodoContext)
}
export const  TodoProvider=TodoContext.Provider