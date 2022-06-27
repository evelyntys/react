import React from 'react';

function getColor(number){
    if (number == 1){
        return 'red'
    }
    else if (number == 6){
        return 'green'
    }
    else{
        return 'black'
    }
}

//can put Math.floor into a function

//set state is asynchronus -> if you call many set states you have no idea which will finish first
// => use async and await; but if too many, then program starts to become laggy
//try to reduce no. of set states you call
//set color at same time -> return a value instead of set state
//try to consolidate set state together if possible

//correct solution only if it is also reactive when you change it in the components inspector
export default class Dice extends React.Component{
    state = {
        //set initial value of number state property between 1-6
        'number': Math.floor(Math.random() * 6) + 1
    }
    click = () => {
        this.setState({
            'number': Math.floor(Math.random() * 6) + 1
        })
    }
    render(){
        //never call setState inside a render => but ok to put inside event handler
        //this.setState will cause render to re-render again:
        //so if this.setState is inside a render, will cause it to go into an infinite loop -> break
        return (
            //don't put parenthesis since we want to refer to the function, not to call it and get the results
            //if not click() function will render immediately
            <div onClick={this.click}
            style={{
                'border': '3px solid black',
                'width' : '30px',
                'height': '30px',
                'margin': '5px',
                'textAlign': 'center',
                'color': getColor(this.state.number),
                'border-color': getColor(this.state.number)
                // try to rely on state variable or something that can be derived from state variable;

            }}>{this.state.number}</div>
        )
    }
}