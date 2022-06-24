import React from 'react';
// class-based component example
//make sure the name of the class matches the file name
class ClickCount extends React.Component{
    //render is defined as a function inside React.Component
    //whatever JSX is returned from render will be rendered

    state = {
        'count': 0
    }

    //if ClickCount has props
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>
                Click count = {this.state.count}
            </h1>
        )
    }
}

export default ClickCount;