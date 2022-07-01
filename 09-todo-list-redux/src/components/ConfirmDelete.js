import React from 'react';

export default function ConfirmDelete(props){
    return(
        <React.Fragment>
        <li className='list-group-item'>
        are you sure that you want to delete this task?
        <h6>{props.task.description}</h6>
        <div>
            <button className='btn btn-sm btn-danger'
            onClick={() => {props.delete(props.task)}}>
                confirm delete</button>
            <button className='btn btn-sm btn-warning'
            onClick={props.cancel}>
                cancel</button>
        </div>
        </li>
        </React.Fragment>
    )
}