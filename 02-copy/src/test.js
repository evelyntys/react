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

  export {Image, sayHello, sayGoodbye, foobar}