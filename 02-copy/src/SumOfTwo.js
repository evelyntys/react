function SumOfTwo(props){
    return <div>Sum: {props.one + props.two}</div>
  }

export default SumOfTwo;

// if exporting more than 1 component in same js file -> export {component, component} NOT EXPORT DEFAULT
//import back same thing e.g. import {component, component}