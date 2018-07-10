import React from 'react'

class ImageZoom2 extends React.Component{

	constructor(props) {
    super(props)
    this.state = {
      height:0,
      width:0
    }
}


	componentDidMount(){
		this.setState({height:this.refs.img.offsetHeight,width:this.refs.img.offsetWidth})
	}


	render(){


	const {x,y,img,height,width} = this.props	

     const Limit = (x,max) =>{
        switch (true) {
            case (x < 50 ):
                return (50)
                break;
            case (x > max-50):
                return(max-50)
                break;
         
            default:
                return (x)
                break;
        }
     }

     	var factorX = this.state.width/width
     	var factorY = this.state.height/height
      //console.log(width)
      //console.log(height)


      const styles = { 
              transform: `translate(${(Limit(x,width)- 50)  * - factorX}px, ${(Limit(y,height)-50 )* - factorY}px)` 
      };

      return(
      		<div className="ImageZoom-Preview">
              <div style = {styles}>
                <img ref = 'img' src={img} />
              </div>
            </div>
      )


	}

}

export {ImageZoom2}