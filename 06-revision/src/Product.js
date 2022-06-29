//functional component if just to display data 
import React from 'react';

export default function Product(props) {
    return (<div className='card'>
    <div className='card-body>'>
      <h3 className='card-title'>{props.product.name}</h3>
      <ul>
        <li>cost: {props.product.cost}</li>
        <li>stock: {props.product.stock}</li>
      </ul>
    </div>
  </div>)
}