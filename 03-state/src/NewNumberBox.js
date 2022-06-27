import React from 'react';

export default class NewNumberBox extends React.Component{
// whenever you create a class-based components, think about the type of data you need to store
    state = {
        'count': 0
    }

    increase = () => {
        //don't do ++ as state variable -> ++ is known as post-increment -> +1 will only happen after line 10
        this.setState({
            'count': this.state.count + 1
        })

    }

    decrease = () => {
        this.setState({
            'count': this.state.count -1
        })
    }

    //older react tutorials
    //how to emulate an arrow function without using an arrow function
    // decrement = function(){}.bind(this);
    //=> now arrow function last time -> use bind to ensure that this always refer to the class

    render(){
        return(
            <React.Fragment>
            <div>
            <div style={{
                'border': '1px solid black', 
                'borderColor': `${this.state.count} > 0? 'green' : 'red`,
                'padding': '10px',
                'width': '20px',
                'margin': '5px',
            }}>{this.state.count}</div>
            <button onClick={this.decrease}>-</button>
            <button onClick={this.increase}>+</button>
            </div>
            </React.Fragment>
        )
    }
}
//'this' is contextual - depends on where it is
//if 'this' appears in a function and the function belongs in a class, then it is referring to the class itself

//alternative method of exporting:
//export default NumberBox