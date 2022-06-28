import React from 'react';
import Book from './Book';

export default class App extends React.Component{
  state = {
    fruits: ['apples', 'oranges', 'pineapple', 'durians'],
    superheroes: ['captain america', 'iron man', 'spiderman', 'dr strange'],
    movies: ['lotr', 'matrix', 'hangover', 'spiderman'],
    books: [{
      title: 'twilight',
      author: 'stephanie meyer'
    }, {
      title: 'harry potter',
      author: 'jk rowling'
    }, {
      title: 'chronicles of narnia',
      author: 'cs lewis'
    }],
    secretOfLife: 42
  }
  
  renderBooks(){
    let bookElements = [];
    for (let b of this.state.books){
      bookElements.push(<Book key={b.title} title={b.title} author={b.author}/>)
    }
    return bookElements
  }

  renderSuperHeroes(){
    let superheroElements = [];
    for (let s of this.state.superheroes){
      superheroElements.push(<li key={s}>{s}</li>)
    }
    return superheroElements
  }

  render(){

    //for loop has to be outside of the return function
    //return 

    let fruitElements = [];
    for (let f of this.state.fruits){
      fruitElements.push(<li key={f}>{f}</li>)
    }


    // let p = <p>hello there</p>

    // let items = [
    //   <li>item 1</li>,
    //   <li>item 2</li>,
    //   <li>item 3</li>
    // ]

    return(
      <React.Fragment>
      <div>{this.state.secretOfLife}</div>
      <div>{this.state.fruits}</div>
      {/* {p}
      {items} */}
      <h1>fruits</h1>
      <ul>
      {fruitElements}
      </ul>

      <h1>superheroes</h1>
      <ol>
        {this.renderSuperHeroes()}
      </ol>

      <h1>movies</h1>
      <ul>
        {/* best method since does not change the original array, and dont require you to start a new function */}
        {this.state.movies.map(function(m){
          return <li>{m}</li>
        })}
      </ul>

      <h1>books</h1>
      {this.renderBooks()}
      </React.Fragment>
    )
  }
}