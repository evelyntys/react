import React from 'react';

export default class SurveyForm extends React.Component{
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

    // updateFruitsStraightforward = (event) => {
    //     //react community believes that values should be immutable; afraid of any problems being cascading
    //     //this only applies to array

    //     //1. clone the original array
    //     let cloned = this.state.fruits.slice(); //no argument will slice from start to end

    //     //2. update the cloned array
    //     cloned.push(event.target.value)

    //     //3. set the cloned array back into the state
    //     // this.state.fruits.push(event.target.value)
    //     this.setState({
    //         'fruits': cloned
    //     })
    // }

    //only if array is in the state, if not no need
    updateFruits = (event) => {
        //check if value is in the array i.e. check if checkbox has been checked
        if (this.state.fruits.includes(event.target.value)){
            // how to remove from an array
            let indexToRemove= this.state.fruits.indexOf(event.target.value);
            //spreading out the ones you want to remove, then joining everything together to become an array
            let cloned = [...this.state.fruits.slice(0, indexToRemove), ...this.state.fruits.slice(indexToRemove+1)]
            this.setState({
                'fruits': cloned
            })

            // //1. clone the original array
            // let cloned = this.state.fruits.slice();
            // //2. remove from the clone
            // let indexToRemove = -1;
            // for (let i=0; i< this.state.fruits.length; i++){
            //     if (this.state.fruits[i] === event.target.value){
            //         indexToRemove = i;
            //         break
            //     }
            // }
            // cloned.splice(indexToRemove, 1);
            // //3. replace the cloned array into the state
            // this.setState({
            //     'fruits': cloned
            // })
        }
        else{
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
        if (this.state.name.length < 3){
            return 'the name must have 3 more or characters'
        }
        else if (this.state.name.length > 20){
            return 'the name must not exceed 20 characters'
        }
        else{
            return null
        }
    }

    getEmailError = () => {
        if (!this.state.email.includes('@')){
            return('please enter a valid email')
        }
        return null
    }

    submit =() => {
        this.setState({
            'hasSubmitted': true
        })
        //check if there is no error
        if (!this.getNameError() && !this.getEmailError()){
            alert('all data is ok')
        }

    }

    render(){
        return(
            <div>
                <div>
                    <label>Name: </label>
                    <input type='text' className='form-control' value={this.state.name}
                    onChange={this.updateName}/>
                    {this.getNameError() && this.state.hasSubmitted ? <span className='error text-danger'>{this.getNameError()}</span> : ""}
                    </div>

                    <div>
                    <label>Email: </label>
                    <input type='email' className='form-control' value={this.state.email}
                    onChange={this.updateEmail}/>
                    {this.getEmailError() && this.state.hasSubmitted? <span className='error'>{this.getEmailError()}</span> : ""}
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

                <div>
                    <label>fruits: </label>
                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='apple' checked={this.state.fruits.includes('apple')}/>
                    <label className='form-check-label'>apple</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='orange' checked={this.state.fruits.includes('orange')}/>
                    <label className='form-check-label'>orange</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='pineapple' checked={this.state.fruits.includes('pineapple')}/>
                    <label className='form-check-label'>pineapple</label>

                    <input type='checkbox' className='form-check-input' onChange={this.updateFruits} name='fruits' value='durian'  checked={this.state.fruits.includes('durian')}/>
                    <label className='form-check-label'>durian</label>
                </div>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}