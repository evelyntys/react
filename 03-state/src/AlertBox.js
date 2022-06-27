import React from 'react';
//=> what this does is importing everything from react
//alternatively: import {Component} from 'react'
//=> only import React.Component 

export default class AlertBox extends React.Component{
    state = {
        'message': this.props.initialMessage
    }

    render(){
        return(
            <div style={{
                'border': '4px solid black',
                'margin': '5px'}}>
                    {this.state.message}
                </div>
        )
    }
}