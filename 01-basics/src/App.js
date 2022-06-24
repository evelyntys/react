// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     //not a string -> no double quote or backtick => JSX (javascript that looks like html)
//     //{} represents a javascript expression
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'; //eqv: constReact = require('react)))
//2 ways to display images
import logo from './logo.svg'
import './style.css';

//creates a React component
function App(){
  //a React complenent always must return JSX
  //out {} means js expression, inner{} means js object
  return(
    //when you return, you can only have one parent e.g. put everything under a div
    //React.Fragment will not show up -> use for an invisible div 
    <React.Fragment>    
      <h1 style={{color: 'pink',
    backgroundColor: 'cornflowerblue'}}>
      hello world</h1>
      <p className='urgent'>howdy</p>
      {/* 2 ways to load in images */}
      <img src={logo}/>
      <img src={require('./cloudy.png')}/>
    </React.Fragment>
  )
}

//we must export out the component
export default App; // eqv: module.exports.= App;