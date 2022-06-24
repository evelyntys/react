import React from 'react';
import BorderImage from './BorderImage';
import Alert from './Alert';
import SumOfTwo from './SumOfTwo';
import {Image, sayHello, sayGoodbye, foobar} from './test';
import ClickCount from './ClickCount'; 
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
      <ClickCount/>
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