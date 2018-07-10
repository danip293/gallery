import React from 'react'

class Gallery extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			index : 0,
			flag : false,
			imagenes: [
				  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/1200px-McLaren_P1.jpg",
				  "https://i.pinimg.com/originals/49/17/80/4917801f242314e16ed22a05c9726aa3.jpg", 
				  "https://i.ytimg.com/vi/CiV6ITr6jlc/maxresdefault.jpg",
				  "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
				  "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
				  "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
				  "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
				  "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
  ]

  

		}

    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
	}

	array = [1,2,3,4,5,6,7,8,9,10,11,12]

	// componentDidMount(){
 //    const token = "sAkodTHOzAbaGTd3QMokHFSkiMOw8cwp~1fb740~MpIgOLAQxzk2Jy--CRmnVmCaMoU"
 //    const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
 //    const identityID = "~FgT5c4D56wq"
 //    const galeryID = "~FgT5c4D56wq"
 //    const finalUrl = baseUrl+identityID + ":" + galeryID  +"/"
 //    let options = {
 //        method: 'GET',
 //        headers: {
 //          "Authorization" : "Bearer "+ token,
 //            "Content-type": "application/json; charset=UTF-8"
 //        }
 //    }
 //    let req = new Request(finalUrl, options);
 //    fetch(req)
 //        .then((response)=>{
 //            if(response.ok){
 //                return response.json();   ///recivve los datos del json  y los retorna al siguiente .then 
 //            }else{
 //                throw new Error('Ha ocurrido un error!')
 //            }
 //        })
 //        .then( (j) =>{
 //          console.log(j);
 //          this.setState({imagenes:j.results})
            
 //        })
 //        .catch( (err) =>{
 //          alert(err.message)
            
 //        });
 //  }

  goToPreviousSlide(){
    const { index } = this.state

    this.setState(prevState => ({
    	  flag: !prevState.flag
    }))

    if(index === 0) return

    
    this.setState({index:index - 1});
  }

  goToNextSlide(){
    const {index,imagenes} = this.state

    this.setState(prevState => ({
    	  flag: !prevState.flag
    }))

    if(index === imagenes.length - 1) {
      return this.setState({index: 0})
    }
    
    this.setState({index:index + 1})
  }


	render(){

		const  {imagenes,index,flag} = this.state
		const style = {
		background: `url(${imagenes[index]})`,
		backgroundSize: 'cover'
		
		}
	
		return(
			<div>
				<div id="mosaic_wrapper" style = {style}>
				
					{
						flag ? (
							this.array.map((el, i) =>{
								return(	
							 		<ImageSlide index={index} className={`panel-si`} key ={i}/>
							 	)
							})
						) :
						(
							this.array.map((el, i) =>{
								return(	
									<div>
							 			<ImageSlide index={index} className={`panel-no`} key ={i}/>
							 		</div>
							 	)	
							})
						)
					}
				 
				</div>
				 <button onClick={this.goToNextSlide} >+ siguiente</button>
        		 <button onClick={this.goToPreviousSlide}>- anterior</button>
			</div>	

			)
	}
}

class ImageSlide extends React.Component {
	constructor(props){
		super(props)
	}

  render(){
  	
  	const getRandomArbitrary = (min, max) =>{
	  return Math.random() * (max - min) + min;
	}
  	const {className} = this.props
	const style1 ={
						
						'animationDuration': `${getRandomArbitrary(1,3)}s`,
						'animationTimingFunction': 'ease-out'
					}
  
	
		return (
			 <div className={className}  style = {style1}></div>
		)
	}	
}
export default Gallery