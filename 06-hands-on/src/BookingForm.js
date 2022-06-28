import React from 'react';

export default class BookingForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        seating: '',
        smoking: 'smoking',
        appetizers: [],
    }

    updateFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    updateSeating = (event) => {
        this.setState({
            seating: event.target.value
        })
    }

    updateSmoking = (event) => {
        this.setState({
            smoking: event.target.value
        })
    }

    updateAppetizers = (event) => {
        if (this.state.appetizers.includes(event.target.value)){
            let indexToRemove = this.state.appetizers.indexOf(event.target.value);
            let cloned = [...this.state.appetizers.slice(0, indexToRemove), ...this.state.appetizers.slice(indexToRemove+1)]
            this.setState({
                appetizers: cloned
            })
        }
        else{
            let cloned = [...this.state.appetizers, event.target.value]
            this.setState({
                appetizers: cloned
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ 'margin': '10px' }}>
                    <h1>booking form</h1>
                    <div>
                        <label>first name: </label>
                        <input type='text' value={this.state.firstName} onChange={this.updateFirstName}/>
                    </div>

                    <div>
                        <label>last name: </label>
                        <input type='text' value={this.state.lastName} onChange={this.updateLastName}/>
                    </div>

                    <div>
                        <label>please choose your seating: </label>
                        <input type='radio' value='outdoors' name='seating' onChange={this.updateSeating} checked={this.state.seating === 'outdoors'}/> outdoors
                        <input type='radio' value='indoors' name='seating' onChange={this.updateSeating} checked={this.state.seating === 'indoors'}/> indoors
                        <input type='radio' value='vip' name='seating' onChange={this.updateSeating} checked={this.state.seating === 'vip'} /> vip indoors
                    </div>

                    <div>
                        <label>smoking? </label>
                        <select value={this.state.smoking} onChange={this.updateSmoking}>
                            <option value='smoking'>smoking</option>
                            <option value='non-smoking'>non-smoking</option>
                        </select>
                    </div>

                    <div>
                        <label>please select your appetizer: </label>

                        <input type='checkbox' value='raw-fishes' onChange={this.updateAppetizers} checked={this.state.appetizers.includes('raw-fishes')}/> raw fishes
                        <input type='checkbox' value='salad' onChange={this.updateAppetizers} checked={this.state.appetizers.includes('salad')}/> salad
                        <input type='checkbox' value='fried-cuttlefish' onChange={this.updateAppetizers} checked={this.state.appetizers.includes('fried-cuttlefish')}/> fried cuttlefish
                        <input type='checkbox' value='peanuts' onChange={this.updateAppetizers} checked={this.state.appetizers.includes('peanuts')}/> peanuts
                    </div>
                </div>
            </React.Fragment>
        )
    }
}