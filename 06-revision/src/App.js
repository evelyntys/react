import React from 'react';
//dist means distribution -> meant to be distributed and used in the website 
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';

class App extends React.Component{
  // mock data
  // state variable is to keep track of variables, not the intermediate steps
  state = {
    //do at least 3 when coming up with test data ->to test if list rendering is working
    products: [
      {
        _id: 1,
        sku: '1102-Z', 
        name: 'brazil thawed chicken breast',
        //for money, we usually store integer instead of float i.e. in cents etc
        //rounding errors as storing decimal in computers always an approximate
        cost: 100,
        stock: 10
      },
      {
        _id: 2,
        sku: '1103-Z', 
        name: 'green onion',
        cost: 150,
        stock: 7
      }
    ]
  }

  renderProducts() {
    //we want to have an array of jsx elements, one for each product
  
    let productJSX = [];
    for (let p of this.state.products){
      productJSX.push(<Product key={p._id} product = {p}/>)
    }
    return productJSX
  }

  

  render(){
    return(
      <React.Fragment>
        <h1>our shop</h1>
        {this.state.products.map(function(p){
           return (<Product key={p._id} product={p}/>)
        })}
        {/* {this.renderProducts()} */}
      </React.Fragment>
    )
  }
}

export default App