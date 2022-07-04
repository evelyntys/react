import React from 'react';
import Listing from './pages/Listing';
import AddNew from './pages/AddNew';
import axios from 'axios' //no ./ for those in node_modules

export default class RecipeBook extends React.Component{

    url = "https://8888-kunxinchor-dwadrecipeap-tbn807v1lrg.ws-us51.gitpod.io/"
    state={
        active: 'listing', //the active variable in the state determines which page to show
        data: [],
        newTitle: "",
        newIngredients: "" 

    }

    async componentDidMount(){
       let response = await axios.get(this.url + 'recipes');
       this.setState({
        data: response.data
       })
    }

    processAddNew = async () => {
        //if any line of code in the try block causes an error (aka exception)
        //the code execution will ju,p to the first line in the catch block
        try{

            //1. add to database via api
            //response.data.insertedId will have the new _id of the document inserted
        let response = await axios.post(this.url + 'recipes', {
            title: this.state.newTitle,
            ingredients: this.state.newIngredients.split(',')
        })

        //2. we update React and the new recipe object will have the _id of the database
        const newRecipe = {
            _id: response.data.insertedId,
            title: this.state.newTitle,
            ingredients: this.state.newIngredients.split(',')
        }
        this.setState({
            data: [...this.state.data, newRecipe],
            active: 'listing'
        })
    } catch(e){
        alert('error adding, pls contact admin')
    }
    }

    renderContent(){
        if (this.state.active === 'listing'){
            return <Listing data={this.state.data}/>
        }
        else if (this.state.active  === 'add-new'){
            return <AddNew
            newTitle = {this.state.newTitle}
            newIngredients={this.state.newIngredients}
            updateFormField={(key, value) => {this.setState({
                [key]: value
            })}}
            addNew={this.processAddNew}/>
        }
    }

    changePage(page){
        this.setState({
            active: page,
        })
    }

    render(){
        return (
        <React.Fragment>
            <div className='container mt-3'>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <button className={'nav-link ' + (this.state.active==='listing' ? 'active' : "")} aria-current='page'
                    onClick={ () => this.changePage('listing')}>recipes</button>
                </li>
                <li className='nav-item'>
                    <button className={'nav-link ' + (this.state.active==='add-new' ? 'active' : "")} aria-current='page'
                    onClick={ () => this.changePage('add-new')}>add new</button>
                </li>
            </ul>
            {this.renderContent()}
            </div>
            
        </React.Fragment>
        )
    }
}