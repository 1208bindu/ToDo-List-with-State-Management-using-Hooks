import React,{useState} from 'react';
import {addTodo} from './actions/todoActions'
import {useDispatch} from 'react-redux'

const AddTodoHooks=()=>{
    const [job,setJob] =useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(addTodo(job));
        setJob('');

    }
        return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add New To Do</label>
                <input type="text" id="job" value={job} onChange={(e)=>setJob(e.target.value)}/>
            </form>
        </div>
        )
    }



export default AddTodoHooks;