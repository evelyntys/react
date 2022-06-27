import React from 'react';

export default class TickleBox extends React.Component{
    state = {
        'message': this.props.initialMessage
    }

    mouseover = () => {
        alert(this.state.message)
    }
    render(){
        return(
            <div onMouseOver={this.mouseover} style={{
                'border': '4px solid black',
                'margin': '5px'
            }}></div>

        )
    }
}