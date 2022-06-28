import React from 'react';

export default class SurveyForm extends React.Component{
    //SEIPO
    //state: what are the state variables of the component (i.e. data that component is in charge of)
    //component will make use of props somehow but they cannot change it => not responsibility of component
        state = {
        'name': '',
        'email': '',
        'colour': '',
        'country': 'singapore'

    }

    updateFormField = (event) => {
        let stateVariable = event.target.name;
        this.setState({
            [stateVariable]: event.target.value
        })
    }

    // updateFormFieldEx = (event, name) => {
    //     this.setState({
    //         [name]: event.target.value
    //     })
    // have to proxy function below e.g. onChange = {() => (this.updateFormFieldEx(event, 'name'))}
    // }

  
    render(){
        return(
            <div>
                <div>
                    <label>Name: </label>
                    <input type='text' name='name' className='form-control' value={this.state.name}
                    onChange={this.updateFormField}/>
                    <label>Email: </label>
                    <input type='email' name='email' className='form-control' value={this.state.email}
                   onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>favourite color:</label>
                    {/* checked true or false based on value => 2 way binding */}
                    <input type='radio' onChange={this.updateFormField} checked={this.state.colour === 'red'} name='color' value='red' className='form-check-input'/>
                    <label className='form-check-label'>Red</label>

                    <input type='radio' onChange={this.updateFormField} checked={this.state.colour === 'green'} name='color' value='green' className='form-check-input'/>
                    <label className='form-check-label'>Green</label>

                    <input type='radio' onChange={this.updateFormField} checked={this.state.colour === 'blue'} name='color' value='blue' className='form-check-input'/>
                    <label className='form-check-label'>Blue</label>
                </div>

                <div>
                    <label>country: </label>
                    <select name='country' className='form-control' value={this.state.country} onChange={this.updateFormField}>
                        <option value='singapore'>singapore</option>
                        <option value='malaysia'>malaysia</option>
                        <option value='indonesia'>indonesia</option>
                    </select>
                </div>
            </div>
        )
    }
}