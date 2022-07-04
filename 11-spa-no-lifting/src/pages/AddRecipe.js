import React from 'react';
import axios from 'axios';

export default class AddRecipe extends React.Component{
    url = 'https://8888-evelyntys-dwadrecipeapi-8mtp26d6rh1.ws-us47.gitpod.io/'
    
    state={
        newTitle: "",
        newIngredients: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNew = async () => {
        await axios.post(this.url + 'recipes', {
            'title': this.state.newTitle,
            'ingredients': this.state.newIngredients.split(',')
        })
        this.props.changePage('listing')
    }

    render(){
        return (
            <React.Fragment>
                <h1>add new recipe</h1>
                <div>
                    <label>title</label>
                    <input type="text" name='newTitle' value={this.state.newTitle}
                    onChange={this.updateFormField}
                    className="form-control"/>
                </div>
                <div>
                    <label>ingredients</label>
                    <input type="text" name='newIngredients' value={this.state.newIngredients}
                    onChange={this.updateFormField} className="form-control"/>
                </div>
                <button className="btn btn-primary" onClick={this.addNew}>add new recipe</button>
            </React.Fragment>
        )
    }
}