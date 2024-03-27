import { createSlice } from "@reduxjs/toolkit";

const getLocalData = ()=>{
    let todos = localStorage.getItem('list')
    console.log('todo is', todos)
    if(todos){
        return JSON.parse(todos)
    }
    else{
        return []
    }
}



const initialState = {
    todos: getLocalData()
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {    
                id: crypto.randomUUID(),
                text: action.payload
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                 return todo.id !== action.payload
            })
        } 
    }
})

export const {addTodos, removeTodo} = todoSlice.actions
export default todoSlice.reducer


