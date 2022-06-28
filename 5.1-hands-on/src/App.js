import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ContactForm from './ContactForm';

export default function App(){
  return(
    <React.Fragment>
      <div className='container'>
        <h1>contact us</h1>
        <ContactForm/>
      </div>
    </React.Fragment>
  )
}