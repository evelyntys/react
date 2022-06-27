import React from 'react'

export default class TickleBox2 extends React.Component{
    //when state variable changes, it will cause a re-render -> causing illusion of change
    state = {
        'showMessage': false
    }

    mouseenter = () => {
        this.setState({
            'showMessage': true
        })
    }

    mouseleave = () => {
        this.setState({
            'showMessage': false
        })
    }

    render(){
        return(
            <div onMouseEnter ={this.mouseenter} onMouseLeave={this.mouseleave} style={{
                'border': '4px solid black',
                'margin': '5px'
            }}>{this.state.showMessage ? 'this tickles' : ""}</div>
        )
    }
}
