import React from 'react';

//contact form inherits from react.component
//child class is general, not just a react thing
export default class ContactForm extends React.Component {
    state = {
        //state variables are the data that the component has responsibility for
        //make sure that there are no derived values
        //conditional rendering instead of storing inside state if something is dependent on the state variable
        'firstName': '',
        'lastName': '',
        'type': '',
        'country': ''
    }

    updateFirstName = (e) => {
        this.setState({
            'firstName': e.target.value //set firstName state property to be whatever is inside textbox
        })
    }

    updateLastName = (e) => {
        //first argument is the event object - it represents the event that has happened 
        //event.target => element that the event happens on
        //event.target.value => the content of the element
        this.setState({
            'lastName': e.target.value
        })
    }

    updatedType = (e) => {
        this.setState({
            'type': e.target.value
        })
    }

    updateCountry = (e) => {
        this.setState({
            'country': e.target.value
        })
    }

    buttonClick = () => {
        alert(
            `First Name: ${this.state.firstName} 
            Last Name: ${this.state.lastName} 
            Type: ${this.state.type} 
            Country: ${this.state.country}`

        )
    }

    render() {
        //make sure do NOT call set state in render function under any circumstances -> infinite loop
        //derived values should go into render
        return (
            <div>
                <div>
                    <label>First Name: </label>
                    <input type='text' className='form-control' value={this.state.firstName}
                        onChange={this.updateFirstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' className='form-control' value={this.state.lastName}
                        onChange={this.updateLastName} />
                </div>
                <div>
                    <label>Type of enquiry: </label>
                    <input type='radio' className='form-check-input'
                        name='type' value='support'
                        onChange={this.updatedType} checked={this.state.type === 'support'} />
                    <label className='form-check-label'>support</label>
                    <input type='radio' className='form-check-input'
                        name='type' value='sales'
                        onChange={this.updatedType} checked={this.state.type === 'sales'} />
                    <label className='form-check-label'>sales</label>
                    <input type='radio' className='form-check-input'
                        name='type' value='marketing'
                        onChange={this.updatedType} checked={this.state.type === 'marketing'} />
                    <label className='form-check-label'>marketing</label>
                </div>
                <div>
                    <label>country: </label>
                    <select name='country' value={this.state.country} onChange={this.updateCountry}>
                        <option selected='choice'>select a country</option>
                        <option value='singapore'>singapore</option>
                        <option value='malaysia'>malaysia</option>
                        <option value='indonesia'>indonesia</option>
                    </select>
                </div>
                <button className='btn btn-warning' onClick={this.buttonClick} disabled={!this.state.firstName || !this.state.lastName || !this.state.country || !this.state.type}>submit</button>
            </div>
        )
    }
}