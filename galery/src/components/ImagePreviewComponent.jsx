import React,{Component} from 'react'
import { ClipLoader } from 'react-spinners';
import logo from '../ok-appproval-aceptacion.png'

class ImagePreviewComponent extends Component{
	constructor(){
		super()

		this.state = {
			isLoading: false,
			success: false,
			error:false
		}
	}

	componentDidMount() {
    	this.setState({ isLoading: true });
  		const reader = new FileReader();
        const FileName = this.props.img.name
        reader.readAsDataURL(this.props.img);
        reader.onload = () =>{
            const data = {
                image_base_64: reader.result,
                name : FileName,
            }
              

	    	const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
			const identityID = "~89nsP6etTwi"
			const galeryID = "~89nsP6etTwi"
			const finalUrl = baseUrl+"/"+identityID + ":" + galeryID + "/" 

			let options = {
			    method: 'POST',
			    //mode: 'cors',
			    body: JSON.stringify(data),
			     headers: {
			    	"Authorization" : "Bearer sAdFFLwSeLR9JOoLYChPtm6BhRb3kDzD~1fL9qG~at2hJH-nV0lO0KwLn3hP_DMii_I",
	      			"Content-type": "application/json; charset=UTF-8"
	    		}
			}

			let req = new Request(finalUrl, options);


		    fetch(req)
		      .then(response => {
		        if (response.ok) {
		          return response.json();
		        } else {
		          throw new Error('Something went wrong ...');
		        }
		      })
		      .then(data => {
		      	this.props.onAddImg(data)
		      	this.setState({ success: true, isLoading: false })
		      	})
		      .catch(error => this.setState({ error:true, isLoading: false }));
           
        }
 		

  	}

	render(){
		// console.log(this.state)
		const {isLoading,success,error} = this.state

		return(
			<div className= "imagePreview" >
                          <img  key={this.props.img.preview} src={this.props.img.preview} alt = ""/> 
                          {isLoading && 
                            <div className="imagePreview-uploading">
                                <ClipLoader color={'#e80404'} loading={isLoading} />
                            </div> 
                          }
                           {success && 
                           	<div className="imagePreview-succes">
	                  			  <img src={logo}/>
	                		</div>
                          }
                           {error && 
                           	<div className = "imagePreview-error">
                           		<h2><span className="glyphicon glyphicon-remove-circle"></span></h2>
                           	</div>
                           
                          }  
        	</div>
        )	
	}
}

export {ImagePreviewComponent}