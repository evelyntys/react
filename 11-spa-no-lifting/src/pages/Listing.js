import React from 'react';
import axios from 'axios';

export default class Listing extends React.Component{
    url = 'https://8888-evelyntys-dwadrecipeapi-8mtp26d6rh1.ws-us47.gitpod.io/'
    
    state = {
        'recipes': []
    }

    //need data after component renders automatically
    async componentDidMount(){
        let response = await axios.get(this.url + 'recipes');
        this.setState({
            'recipes': response.data
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>all recipes</h1>
                <ul className='list-group'>
                    {
                        this.state.recipes.map( 
                            r => <React.Fragment key={r._id}>
                                <li className="list-group-item">
                                <h1>{r.title}</h1>
                                <h2>ingredients</h2>
                                {r.ingredients.map(
                                    i => <span className="badge bg-primary mx-1">
                                        {i}
                                    </span>
                                )
                                }
                                </li>
                            </React.Fragment>
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }
}