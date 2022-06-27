import React from 'react';

//a class is a template for an object
// extends means inherit -- the NunberBox class has all the methods and variables from the React.Component class
class NumberBox extends React.Component{
    //render () -> must have
    //whatever JSX is returned from render() function is its output
    render(){
        return(
            <div style={{
                'border': '1px solid black', 
                'padding': '10px',
                'width': '20px'
            }}>0</div>
        )
    }
}