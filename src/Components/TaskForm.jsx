import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function TaskForm() {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState("");
    const handleChange = (event) => {
        setTaskName(event.target.value)
    }
    const handleSubmit = () => {
        dispatch(addTodo(taskName))
    }
  return (
    <React.Fragment>
        <div>
            <label htmlFor="task">Task name</label>
            <input 
                type="text"
                id='task'
                placeholder='Task...'
                value={taskName}
                onChange={handleChange}    
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </React.Fragment>
  )
}

export default TaskForm
