import React from 'react';

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