import React from 'react';

export default class SurveyForm extends React.Component {
    //non-state variables; usually for variables that you think will stay the same throughout
    country = [
        {
            display: 'singapore',
            value: 'singapore'
        },
        {
            display: 'malaysia',
            value: 'malaysia'
        },
        {
            display: 'indonesia',
            value: 'indonesia'
        }
    ]

    fruits = [{
        display: 'apple',
        value: 'apple'
    }, {
        display: 'banana',
        value: 'banana'
    }, {
        display: 'cherries',
        value: 'cherries'
    }]

    colors=[
        {
            'display':'red',
            'value': 'red'
        },
        {
            'display': 'green',
            'value': 'green'
        },
        {
            'display': 'blue',
            'value': 'blue'
        }
    ]

    //SEIPO
    //state: what are the state variables of the component (i.e. data that component is in charge of)
    //component will make use of props somehow but they cannot change it => not responsibility of component
    state = {
        'name': '',
        'email': '',
        'colour': '',
        'country': 'singapore',
        'fruits': [],
        'hasSubmitted': false

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


    //only if array is in the state, if not no need
    updateFruits = (event) => {
        //check if value is in the array i.e. check if checkbox has been checked
        if (this.state.fruits.includes(event.target.value)) {
            // how to remove from an array
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            //spreading out the ones you want to remove, then joining everything together to become an array
            let cloned = [...this.state.fruits.slice(0, indexToRemove), ...this.state.fruits.slice(indexToRemove + 1)]
            this.setState({
                'fruits': cloned
            })

            ///1. clone the original array
            //2. remove from the clone
             //3. replace the cloned array into the state
        }
        else {
            let cloned = [...this.state.fruits, event.target.value] //adding in new fruit at the back
            //... spread operator -> copy all the items in an array and spread them out -> also works on objects
            //let p = {'key':'value', author{'key': 'value'}} => let x = {...p} => console.log(p)
            this.setState({
                'fruits': cloned
            })
        }
        //1. clone the original array
        //2. update the cloned array
    }

    getNameError = () => {
        if (this.state.name.length < 3) {
            return 'the name must have 3 more or characters'
        }
        else if (this.state.name.length > 20) {
            return 'the name must not exceed 20 characters'
        }
        else {
            return null
        }
    }

    getEmailError = () => {
        if (!this.state.email.includes('@')) {
            return ('please enter a valid email')
        }
        return null
    }

    submit = () => {
        this.setState({
            'hasSubmitted': true
        })
        //check if there is no error
        if (!this.getNameError() && !this.getEmailError()) {
            alert('all data is ok')
        }

    }

    renderColors(){
        let options = [];
        for (let c of this.colors){
            options.push(
                <React.Fragment>
                    <input type='radio' onChange={this.updateColour} checked={this.state.colour === c.value} name='colours' value={c.value} className='form-check-input' />
                    <label className='form-check-label'>{c.display}</label>
                </React.Fragment>
            )
        }
        return options
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name: </label>
                    <input type='text' className='form-control' value={this.state.name}
                        onChange={this.updateName} />
                    {this.getNameError() && this.state.hasSubmitted ? <span className='error text-danger'>{this.getNameError()}</span> : ""}
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email' className='form-control' value={this.state.email}
                        onChange={this.updateEmail} />
                    {this.getEmailError() && this.state.hasSubmitted ? <span className='error'>{this.getEmailError()}</span> : ""}
                </div>
                <div>
                    <label>favourite color:</label>
                    {/* checked true or false based on value => 2 way binding */}
                    {this.renderColors()}
                </div>

                <div>
                    <label>country: </label>
                    <select className='form-control' value={this.state.country} onChange={this.updateCountry}>
                        {this.country.map( c => <option value = {c.value}>{c.display}</option>)}
                    </select>
                </div>

                <div>
                    <label>fruits: </label>
                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='apple' checked={this.state.fruits.includes('apple')} />
                    <label className='form-check-label'>apple</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='orange' checked={this.state.fruits.includes('orange')} />
                    <label className='form-check-label'>orange</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='pineapple' checked={this.state.fruits.includes('pineapple')} />
                    <label className='form-check-label'>pineapple</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='durian' checked={this.state.fruits.includes('durian')} />
                    <label className='form-check-label'>durian</label>
                </div>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}