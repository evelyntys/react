import React from 'react';

function Image(){
  return <img style={{height: '80px'}} src={require('./thunder.png')}></img>
}

function sayHello(){
  return "Hello"
}
function sayGoodbye(){
  let g=<p>Goodbye World</p>
  // JSX= java cript objects so they can be assigned to a variable
  return g;
}

function foobar(){
  return <h3>foobar!</h3>
}

function Alert(props){
  return <div style= {{
    'backgroundColor': props.bgColor
  }}>{props.message}</div>
}

function BorderImage(props){
  // can also do require('./ + props.imgUrl)
  return <img style={{border: '4px solid red', height: '80px'}} src={props.imageUrl}/>;
}

function SumOfTwo(props){
  return <div>Sum: {props.one + props.two}</div>
}

{/* //a component is
//1. a function
//2. returns jsx
//3. its first alphabet is uppercase
//4. can be used in jsx as if it is an html element */}

{/* //App is a component */}
{/* export default function App(){ */}
function App(){
  return (
    <React.Fragment>
      {/* call a function between {} */}
      <h1> {sayHello()}</h1>
      {sayGoodbye()}
      {foobar()}
      {/* create and render an instance of the  */}
      <Alert message='collision imminent' bgColor="lavender"/>
      {/* message becomes a key inside the prop object */}
      <Alert message='fuel low' bgColor="cornflowerblue"/>
      <Image/>
      <BorderImage imageUrl={require('./thunder.png')}/>
      <SumOfTwo one={2} two={3} />
      {/* can also use curly brackets -> no need to parse it*/}
    </React.Fragment>
  )
}

export default App;