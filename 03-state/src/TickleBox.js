import React from 'react';

export default class TickleBox extends React.Component{
    //when state variable changes, it will cause a re-render -> causing illusion of change
    state = {
        'message': ""
    }

    mouseenter = () => {
        this.setState({
            'message': this.props.initialMessage
        })
    }

    mouseleave = () => {
        this.setState({
            'message': ""
        })
    }

    // mouseover = () => {
    //     if (this.state.message == ''){
    //         this.setState({
    //             'message': this.props.initialMessage
    //         })
    //     }
    //     else{
    //         this.setState({
    //             'message': ""
    //         })
    //     }
    // }

    render(){
        return(
            <div onMouseEnter ={this.mouseenter} onMouseLeave={this.mouseleave} style={{
                'border': '4px solid black',
                'margin': '5px'
            }}>{this.state.message}</div>

        )
    }
}