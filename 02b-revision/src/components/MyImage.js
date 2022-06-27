function MyImage(props){
    return(
      // ../ will go up one level in the directory -> have to put ../ if put components into a component folder
      <img alt='error' src={require('../error.png')} style={{'borderColor': props.borderColor,
    'borderStyle': 'solid', 
    // the px part to be as a string
  'borderWidth': '5px'}}/>
    )
  }

  export default MyImage;
//   or can put export default at the start