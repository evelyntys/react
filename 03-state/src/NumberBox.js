import React from 'react';

//a class is a template for an object
// extends means inherit -- the NunberBox class has all the methods and variables from the React.Component class

//similar properties for all instances of numberbox but count will be different
//same behaviour but different data
export default class NumberBox extends React.Component{

    //'state' is an object that contains key/value pairs
    //intended for data that is accessible by the component itself
    //it's private data so no other components can access it or change it

    state = {
        'count': this.props.initialValue
    }
    //when state changes, then it is redrawing itself

    //ARROW FUNCTION
    // ‘This’ in arrow function will always refer to the scope that it is created in -> fixed
    //event handlers should ALWAYS be arrow functions
    click = () => {
        //do not mututate (i.e. change) a state variable directly
        // => this.state.count +=1; this.state.count++; this.state.count = this.state.count+1;
        // => react unable to detect changes to the state
        // => only on the next render will you see the change; you need to cause a re-render;

        //correct way to update the state
        //react can detect changes to the state via set state
        this.setState({
            'count': this.state.count + 1
        })
    }
    //render () -> must have
    //whatever JSX is returned from render() function is its output
    render(){
        return(
            <div onClick={this.click} style={{
                'border': '1px solid black', 
                'borderColor': this.state.count > 0? 'green' : 'red',
                'padding': '10px',
                'width': '20px',
                'margin': '5px',
                'fontSize': `${this.state.count + 10}px`
            }}>{this.state.count}</div>
        )
    }
}
//'this' is contextual - depends on where it is
//if 'this' appears in a function and the function belongs in a class, then it is referring to the class itself

//alternative method of exporting:
//export default NumberBox