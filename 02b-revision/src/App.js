import logo from './logo.svg';  //const logo = require('./logo.svg);
import './App.css'; //require('./App.js)
import MyImage from './components/MyImage'; //.js not convention to put but also won't break if you put

//what you return from function is rendered to the browser
//*code is jsx not html -> will auto translate react based js to browser based js
//{} -> can put in any js expressions as long as it evaluates to a value e.g. can even be 2+2, math.random etc
// -> cannot have if, while for etc e.g. if (true) since does not evaluate to a value => can put inside a function if need

function foobar(){
  let x = Math.floor(Math.random() * 6 + 1);
  if (x>3){
    return 'high'
  }
  else{
    return 'low'
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* we can call a function but must evaluate to a value */}
        <p>{foobar()}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>
      </header>
      {/* can use component as if it is an html element */}
      <MyImage borderColor = 'pink'/>
      <MyImage borderColor = 'red'/>
    </div>
  );
}

export default App;
