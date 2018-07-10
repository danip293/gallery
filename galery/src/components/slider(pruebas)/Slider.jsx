import React from 'react';
import {Slide} from './Slide'
import {ImageZoom2} from './ImageZoom2'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

export default class Slider extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      index:0,
      translateValue:0,
      x:0,
      y:0,
      over: false, 
      isOpen:false
    }

    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
    this.setCoordinates = this.setCoordinates.bind(this)
    this.setIsOver = this.setIsOver.bind(this)
    this.setIsOpen = this.setIsOpen.bind(this)
  }

   imgUrls = [
  "https://sc02.alicdn.com/kf/HTB1lU0.XpuWBuNjSszbq6AS7FXaG/Japan-Movement-Quartz-Stainless-Steel-Back-Rollex.jpg",
  "https://i.pinimg.com/originals/49/17/80/4917801f242314e16ed22a05c9726aa3.jpg", 
  "https://vastbuys.com.au/wp-content/uploads/2017/12/900-X-900-Sliding-Door-Nano-Safety-Glass-Shower-Screen-By-Della-Francesca.jpg",
  "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
  "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
  "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
  "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
  "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
  ];

  componentDidMount (){
      this.setState({translateValue:this.getWidth()})
    
  }

  getHeight(){
    return this.refs.element.offsetHeight
  }

  getWidth(){
    return this.refs.element.offsetWidth
  }

  setCoordinates(obj){
    this.setState(obj)
  }

  setIsOver(bool){
    this.setState({over:bool})

  }
  setIsOpen(){
    this.setState({isOpen:true})
  }

  renderSlides(){
  

       return this.imgUrls.map((img , key) =>{
              return (
                    <Slide key={key} img={img}
                    onChangeCoordinates={this.setCoordinates} 
                    onOver={this.setIsOver}
                    width = {this.state.translateValue}
                    Click ={this.setIsOpen}
                  
                     />
              )
        })
  }

  goToPreviousSlide(){
    const { index } = this.state
    if(index === 0) return

    this.setState({index:index - 1})
  }

  goToNextSlide(){
    const {index} = this.state
    if(index === this.imgUrls.length - 1) {
      return this.setState({index: 0})
    }
    
    this.setState({index:index + 1})
  }


  render(){
    const {translateValue,index} = this.state
    const translate = translateValue * index
    const {children} =  this.props

    

   
    return (
      <div>
      <div className="slider" ref = 'element' >
        <div className="slider-wrapper"
          
          style={{
            transform: `translateX(-${translate}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {this.renderSlides()}
    			</div>


      </div>
        <button onClick={this.goToNextSlide} >+</button>
        <button onClick={this.goToPreviousSlide}>-</button>

         {this.state.over && 
          <ImageZoom2 
            img = {this.imgUrls[index]}
            x = {this.state.x}
            y = {this.state.y}
            height = {this.getHeight()}
            width = {this.getWidth()}
          />
           
         }

         {this.state.isOpen &&
          <Lightbox
            mainSrc={this.imgUrls[index]}
            onCloseRequest={() => this.setState({ isOpen: false })}
       
          />

         }


      </div>
    );
  }
}
