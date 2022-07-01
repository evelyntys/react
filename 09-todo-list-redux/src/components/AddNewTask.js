import React from 'react';

export default function AddNewTask(props){
    return(
        <React.Fragment>
             <h2>add new task</h2>
                <div>
                    <label>description: </label>
                    <input type='text' className='form-control'
                    value={props.newTaskDescription}
                    name='newTaskDescription' onChange={props.updateFormField}/>
                    <button className='btn btn-primary mt-3 btn-sm' onClick={props.addTask}>add new task</button>
                </div>
        </React.Fragment>
    )
}