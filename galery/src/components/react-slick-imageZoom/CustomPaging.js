import React, { Component } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; 



export default class CenterMode extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      imagenes: [],
      x: 0, 
      y: 0,
      over: false,
      index:0,
      maxHeight:0,
      maxWidth:0,
      minWidth:0,
      minHeight:0
    };
  }

  componentDidMount(){
    const token = "sAkodTHOzAbaGTd3QMokHFSkiMOw8cwp~1fb740~MpIgOLAQxzk2Jy--CRmnVmCaMoU"
    const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
    const identityID = "~FgT5c4D56wq"
    const galeryID = "~FgT5c4D56wq"
    const finalUrl = baseUrl+identityID + ":" + galeryID  +"/"
    let options = {
        method: 'GET',
        headers: {
          "Authorization" : "Bearer "+ token,
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    let req = new Request(finalUrl, options);
    fetch(req)
        .then((response)=>{
            if(response.ok){
                return response.json();   ///recivve los datos del json  y los retorna al siguiente .then 
            }else{
                throw new Error('Ha ocurrido un error!')
            }
        })
        .then( (j) =>{
          console.log(j);
          this.setState({imagenes:j.results})
            
        })
        .catch( (err) =>{
          alert(err.message)
            
        });
  }



  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }
   _onMouseOver(e ,index , maxHeight , maxWidth,minHeight,minWidth){
    this.setState({over:true,index:index , maxHeight, maxWidth,minHeight,minWidth})
  }
  
  _onMauseOut(e){
    this.setState({over:false})
  }



  render() {
    const {x,y,index,over,imagenes,maxWidth,maxHeight,minWidth,minHeight} = this.state
       
      const limit = (x,max) =>{
        switch (true) {
            case (x < max/6):
                return (max/6)
                break;
            case (x > (max/6)*5):
                return((max/6)*5 )
                break;
            default:
                return (x)
                break;
        }
     }
    const factorX = maxWidth/minWidth
    const factorY = maxHeight/minHeight

    const styles = { 
       transform: `translate(${(limit(x,minWidth) * - factorX) + (minWidth/2)}px,
        ${(limit(y,minHeight) * - factorY) + (minHeight/2)}px)` 
    };
    const styles2  = {
        overflow: 'hidden',
        width: minWidth,
        height: minHeight,
        maxWidth : 500,
        position: 'fixed',
        bottom: 150,
        right: 0

        
    
    }


    const settings = {
      customPaging: function(i) {     
        return (
          <a>
            <img src={`${imagenes[i].url}?resizetofit.height=100&resizetofit.upscale=true&_format=jpeg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
                
            {imagenes.map((element,index)=> {
              const minWidth = (element.width / element.height * 400)
              const maxWidth = (element.width / element.height * 1200)
            return( 
                   <div  key = {index}>
                      <img 
                      onMouseMove={this._onMouseMove.bind(this)}
                      onMouseOut = {this._onMauseOut.bind(this)}
                      onMouseOver = {(e) => this._onMouseOver(e , index , 1200, maxWidth,400,minWidth)} 
                      src={`${element.url}?resizetofit.height=400&resizetofit.upscale=true&_format=jpeg`} />
                    </div>
              )
          })
          }
        </Slider>

        {over &&
          <div className="ImageZoom-Preview" style = {styles2}>
              <div style = {styles}>
                <img ref="img" src={`${imagenes[index].url}?resizetofit.height=1200&resizetofit.upscale=true&_format=jpeg`} />
              </div>
          </div>
        }
      </div>
    
    );
  }
}
