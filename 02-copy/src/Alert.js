function Alert(props){
    return <div style= {{
      'backgroundColor': props.bgColor
    }}>{props.message}</div>
  }

  export default Alert;