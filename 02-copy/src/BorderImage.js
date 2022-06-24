function BorderImage(props){
    // can also do require('./ + props.imgUrl)
    return <img style={{border: '4px solid red', height: '80px'}} src={props.imageUrl}/>;
  }

  export default BorderImage;