import React from 'react'


class Slide extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      x: 0, 
      y: 0,
      over: false,
      isOpen: false,};
  }
  
  _onMouseMove(e) {
   //console.log(e.nativeEvent.offsetX)
    //this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    this.props.onChangeCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }
  _onMouseOver(e){
    // console.log('entro')
    // this.setState({over:true});
    this.props.onOver(true)
  }
  
  _onMauseOut(e){
    // console.log('salio')
    // this.setState({over:false});
    this.props.onOver(false)

  }

  _onClick(e){
    this.props.Click()

  }
 
  
  render() {
    const { x, y } = this.state;
    const {img , height , width} = this.props
    

 //num = large img / thumbnails


    
          
      // const background = {
      //       backgroundImage: `url(${img}`,
      //        backgroundSize: 'cover'
             
      // }

    return(
     
      <div className = 'ImageZoom-Image'>    
        <img 
          src = {img}
          onMouseMove={this._onMouseMove.bind(this)} 
          onMouseOut = {this._onMauseOut.bind(this)}
          onMouseOver = {this._onMouseOver.bind(this)}
          onClick = {this._onClick.bind(this)} 
          />
      </div>



     
  


  
    )
  }
}

export {Slide}



     

      // {this.state.isOpen &&
      //     <Lightbox
      //       mainSrc={img}
      //       onCloseRequest={() => this.setState({ isOpen: false })}
       
      //     />
     // }

 // {this.state.over && 
 //          <div className="ImageZoom-Preview">
 //             <div style = {styles}>
 //               <img src={img} />
 //             </div>
 //           </div>
 //      }


//  <img  width="300" height="300" src="https://sc02.alicdn.com/kf/HTB1lU0.XpuWBuNjSszbq6AS7FXaG/Japan-Movement-Quartz-Stainless-Steel-Back-Rollex.jpg" />



     // const Limit = (x) =>{
     //    switch (true) {
     //        case (x < 50):
     //            return (50)
     //            break;
     //        case (x > 250):
     //            return(250)
     //            break;
         
     //        default:
     //            return (x)
     //            break;
     //    }
     //  }

      //  const styles = { 
      //         transform: `translate(${((Limit(x) - 50 ) * - 3)}px, ${((Limit(y) - 50 )* - 3)}px)` 
      // };
