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
    click = () => {
        alert('current count: ', this.state.count +=1)
    }
    //render () -> must have
    //whatever JSX is returned from render() function is its output
    render(){
        return(
            <div onClick={this.click} style={{
                'border': '1px solid black', 
                'padding': '10px',
                'width': '20px',
                'margin': '5px'
            }}>{this.state.count}</div>
        )
    }
}
//'this' is contextual - depends on where it is
//if 'this' appears in a function and the function belongs in a class, then it is referring to the class itself

//alternative method of exporting:
//export default NumberBox