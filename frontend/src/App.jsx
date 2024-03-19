// import React from 'react'
// import CompA from './CompA'
// import {FirstName} from './CompA'

// const App = () => {
//   return (
//     <div>
//       <FirstName.Provider value={{name: 'john', id: 1}}>

//       <CompA/>
//       </FirstName.Provider>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './features/todo/todoSlice'
const App = () => {
  const [item, setItem] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoList.todos)

 const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(addTodo(item))
  setItem('')
 }

 const deleteTodo = (id)=>{
  dispatch(removeTodo(id))
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
        <button>Add</button>
      </form>

      {todos.map((todo)=>(
        <div key={todo.id}>
          <h3>{todo.text}</h3>
          <button onClick={()=>deleteTodo(todo.id)}>Increment</button>
        </div>
      ))}
    </div>
  )
}

export default App