import React from 'react';

export default class Alert extends React.Component{

    state = {
        'msg':'some message'
    }

    //actual code for creating the component is inside React.Component
    constructor(props) {
        //cannot call setState in constructor -> should not use axios
        //can use axios in componentDidMount
        super(props);
        console.log('constructor')
    }

    //overwriting the default function in react

    //will be called after first render
    //have to ensure ur code will still work when there is no data
    componentDidMount(){
        console.log('component did mount')
    }

    //whenever you update something
    componentDidUpdate(prevProps, prevState){
        console.log('update detected')
        console.log(prevState)
    }

    render(){
        return <div>
            <h1>Alert!</h1>
            <h2>{this.state.msg}</h2>
        </div>
    }
}