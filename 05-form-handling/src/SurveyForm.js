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

    updateName = (event) => {
        console.log(event.target.value); //=> will always refer to the event that happened
        //event.target will be the element that the event happened on
        //event.target.value will be what the new value for the element should be
        this.setState({
            'name': event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            'email': event.target.value
        })
    }

    updateColour = (event) => {
        this.setState({
            'colour': event.target.value
        })
    }

    updateCountry = (event) => {
        this.setState({
            'country': event.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <label>Name: </label>
                    <input type='text' className='form-control' value={this.state.name}
                    onChange={this.updateName}/>
                    <label>Email: </label>
                    <input type='email' className='form-control' value={this.state.email}
                    onChange={this.updateEmail}/>
                </div>
                <div>
                    <label>favourite color:</label>
                    {/* checked true or false based on value => 2 way binding */}
                    <input type='radio' onChange={this.updateColour} checked={this.state.colour === 'red'} name='colours' value='red' className='form-check-input'/>
                    <label className='form-check-label'>Red</label>

                    <input type='radio' onChange={this.updateColour} checked={this.state.colour === 'green'} name='colours' value='green' className='form-check-input'/>
                    <label className='form-check-label'>Green</label>

                    <input type='radio' onChange={this.updateColour} checked={this.state.colour === 'blue'} name='colours' value='blue' className='form-check-input'/>
                    <label className='form-check-label'>Blue</label>
                </div>

                <div>
                    <label>country: </label>
                    <select className='form-control' value={this.state.country} onChange={this.updateCountry}>
                        <option value='singapore'>singapore</option>
                        <option value='malaysia'>malaysia</option>
                        <option value='indonesia'>indonesia</option>
                    </select>
                </div>
            </div>
        )
    }
}