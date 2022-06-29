import React from 'react';
import axios from 'axios';

export default class Shop extends React.Component {
    // if set to null instead of empty, then will have error and will not work
    state = {
        products: [],
        loaded: false
    }

    //any component that is class based has a componentDidMount but does not do anything by default

    //must cater for the instance that your component has no data, if not it will look weird

    async componentDidMount() {
        //when using axios, the json files must be in public folder NOT src bc axios call is made by browser -> files will be in public folder
        let response = await axios.get('/products.json') // => will not work on github pages but ok on netlify
        console.log(response.data);
        this.setState({
            products: response.data,
            loaded: true
        })
    }

    renderProducts(){
        if (this.state.loaded){
            return <ul>
            {this.state.products.map(p => <li key={p._id}> {p.name} - ${p.cost / 100}</li>)}
        </ul>
        }
        else{
            return <p>loading, please wait</p>
            //can use spinning icon
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>our shop</h1>
                {
                    this.state.loaded ?
                        <ul>
                            {this.state.products.map(p => <li key={p._id}> {p.name} - ${p.cost / 100}</li>)}
                        </ul>
                        :
                        <p>loading, please wait</p>
                }

            </React.Fragment>
        )
    }
}