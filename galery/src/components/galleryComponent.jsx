import React,{Component} from 'react';
//import { Carousel } from 'react-responsive-carousel';
//import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css'

import Slider from './slider/Slider'

import {Slide} from './slider/Slide'










 

export default class Gallery extends Component {

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

  // renderSlides(){
  

  //      return this.imgUrls.map((img , key) =>{
  //             return (
                   
  //             )
  //       })
  // }

  
   
	
	render() {
  
        return (
        		<Slider/>
            )
    }
}
	