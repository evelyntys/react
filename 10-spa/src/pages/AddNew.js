import React from 'react';

export default function AddNew(props){
    return(
        <React.Fragment>
            <h1>add new</h1>
            <div>
                <label>title</label>
                <input type='text'
                className='form-control'
                value={props.newTitle}
                onChange={(event) => {
                    props.updateFormField('newTitle', event.target.value)
                }}/>
            </div>
            <div>
                <label>ingredients:</label>
                <input type='text'
                className='form-control'
                value={props.newIngredients}
                onChange={(event) => {
                    props.updateFormField('newIngredients', event.target.value)
                }}/>

                <button className='btn btn-primary mt-3'
                onClick={props.addNew}>
                    add</button>
            </div>
        </React.Fragment>
    )
}