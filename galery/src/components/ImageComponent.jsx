import React , {Component} from 'react'
import logo from '../ok-appproval-aceptacion.png'
import cuBasura from '../cubo-de-basura.png'


class ImageComponent extends Component{
 constructor() {
    super()
         this.state = {
              "is_selected": false
         }
     this.handleClickSelect = this.handleClickSelect.bind(this); 
     this.handleClickTrash = this.handleClickTrash.bind(this);    
 }

 handleClickSelect(){
 	this.setState(prevState => {
 		if (!prevState.is_selected) {
 			this.props.onselected(this.props.img)		
 		}else{
 			this.props.ondeselect(this.props.img.id)
 		}
 	
    	return  ({is_selected: !prevState.is_selected})
    });
     	
 }
 handleClickTrash(id){
 	alert(id)
 	this.props.ondelete(id)

 }
	render(){
	
		return(
			<div className="ImageComponent" style={{"backgroundColor" :this.props.img.avg_color}}>
				<a id ="select-button" onClick={this.handleClickSelect}>
				<img src={this.props.img.url} alt = "img"/>
				</a>
				
				{this.state.is_selected ? 
					<a id ="select-button" onClick={this.handleClickSelect}>
				 		<div className="ImageComponent-selected">
	                	    <img src={logo}/>
	                	</div>
	                </a>
	                : 
	                <a id= "trash-button" onClick={this.handleClickTrash.bind(this,this.props.img.id)}>
	               		 <div className= "ImageComponent-trash">
	                         	<h3>
	                         		<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
	                         	</h3>
	               		</div>
	               </a>

	            }	

			</div>
			)

	}
}


////propiedades por defecto
// CustomButton.defaultProps = {
//   color: 'blue'
// }
export {ImageComponent}