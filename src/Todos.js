import React from 'react';

const Todos = ({todos ,deletTodo}) => {
   const todoList = todos.length ? (
       todos.map(todo => {
           return (
               <div className="collection-item" key={todo.id}>
                   <span onClick={() => {deletTodo(todo.id)}}>{todo.content}</span>
               </div>)
       })
   ) : (
       <p className ="center" >you don'n have todos now </p>
   ) 
   return ( <div className= 'todos collection'>
   {todoList}
    </div>
    )
}

export default Todos ;