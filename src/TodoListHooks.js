import React from 'react';
import {deleteTodo} from './actions/todoActions'
import {useSelector,useDispatch} from 'react-redux'





const TodoListHooks=()=>  {  
     
    const todos =useSelector(state =>state.todos);
    console.log(todos)
    const dispatch = useDispatch()      
    return (
        <div className="todo collection">
        { todos.length?(
        todos.map(todo=>{
            return (
                   <div className="collection-item" key={todo.id}>
                    {todo.value}
                    <span style={{color:"red",marginLeft:"20px",fontSize:"20px"}} 
                          onMouseOver={(e)=>{e.target.style.cursor="pointer"}} 
                          onClick={()=>{dispatch(deleteTodo(todo.id))}}>
                      <b>X</b>  
                    </span>
                </div>
            )
        })
    ):(<p className="center"> Nothing To Do </p>) }
      </div>
    )
  }

export default TodoListHooks

