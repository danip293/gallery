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
						const actionCallBack = () => this.setState({ success: true, isLoading: false });
            const actionCallBackError = () => this.setState({error: true, isLoading:false})
						
						this.props.onAddImg(data , actionCallBack, actionCallBackError)
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