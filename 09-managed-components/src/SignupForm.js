import React from 'react';
import DisplaySignupForm from './displaySignupForm';
import DisplaySignUpSuccess from './DisplaySignupSuccess';

export default class SignupForm extends React.Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        if (this.state.submitted == false) {
            return <DisplaySignupForm
                email={this.state.email}
                password={this.state.password}
                updateFormField={this.updateFormField}
                register={() => {
                    this.setState({
                        submitted: true
                    })}}/>
                }
        else {
            return <DisplaySignUpSuccess
            email={this.state.email}/>
        }
    }
}