import React from 'react';

export default function DisplaySignupForm(props){
    return <React.Fragment>
            <div style={{ 'margin': '20px' }}>
                <div>
                    <label>Email: </label>
                    <input type='text'
                        name='email' value={props.email}
                        onChange={props.updateFormField} />
                </div>

                <div>
                    <label>Password: </label>
                    <input type='password' name='password' value={props.password}
                        onChange={props.updateFormField} />
                </div>

                <button onClick={props.register}>sign up</button>
            </div>
        </React.Fragment>
}