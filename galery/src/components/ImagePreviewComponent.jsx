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

            this.props.onAddImg(data)

              
	  //   	const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
			// const identityID = "~FgT5c4D56wq"
			// const galeryID = "~FgT5c4D56wq"
			// const finalUrl = baseUrl+"/"+identityID + ":" + galeryID + "/" 

			// let options = {
			//     method: 'POST',
			//     //mode: 'cors',
			//     body: JSON.stringify(data),
			//      headers: {
			//     	"Authorization" : "Bearer sAIOwXigJ4BITByLVIAwpIZSjwuUfh3t~1fOpK6~FTNUtEKNEV_FqNjWGTILye-fx2E",
	  //     			"Content-type": "application/json; charset=UTF-8"
	  //   		}
			// }
			// let req = new Request(finalUrl, options);

		 //    fetch(req)
		 //      .then(response => {
		 //        if (response.ok) {
		 //          return response.json();
		 //        } else {
		 //          throw new Error('Ha ocurrido un error! ...');
		 //        }
		 //      })
		 //      .then(data => {
		 //      	this.setState({ success: true, isLoading: false })
		 //      	this.props.onAddImg(data)
		 //      	})
		 //      .catch(error =>{
		 //      	alert(error)
		 //      	console.log(error)

		 //      	this.setState({ error:true, isLoading: false });
		 //      })
        }
  	}

	render(){
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
	                  			  <img src={logo} alt = ""/>
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