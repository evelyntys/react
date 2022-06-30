import React from 'react';

export default function DisplaySignUpSuccess(props){
    return(
        <React.Fragment>
                thank you for signing up. please check your email at {props.email} for a verfication email.
            </React.Fragment>
    )
}