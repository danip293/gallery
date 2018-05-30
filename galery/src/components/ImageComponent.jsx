import React , {Component} from 'react'
import logo from '../ok-appproval-aceptacion.png'
import PropTypes from 'prop-types';


class ImageComponent extends Component{
 constructor() {
    super()
         this.state = {
              "is_selected": false
         }
     this.handleClickSelect = this.handleClickSelect.bind(this); 
     this.handleClickTrash = this.handleClickTrash.bind(this);    
     this.handleClickCover = this.handleClickCover.bind(this);
 }

componentDidMount(){
	this.setState({
		is_selected : this.props.selected

	})
}
componentWillReceiveProps(nextProps){
    if  (this.props.selected !== nextProps.selected){
        this.setState({ is_selected : nextProps.selected})
    }
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
 	
 	this.props.ondelete(id)

 }

 handleClickCover(id){
 	this.props.oncoverimage(id)

 }
	render(){
		
		return(
			<div className="ImageComponent" style={{"backgroundColor" :this.props.img.avg_color}}>
				<a id ="select-button" onClick={this.handleClickSelect}>
				{this.props.img.cover ?
					<img src={this.props.img.url} alt = "img" style = {{ "border": "solid 5px","borderColor": " #FFC300"}}/>
					:
					<img src={this.props.img.url} alt = "img" />
				}
				</a>
				

				{this.state.is_selected ? 
					<a id ="select-button" onClick={this.handleClickSelect}>
				 		<div className="ImageComponent-selected">
	                	    <img src={logo} alt=""/>
	                	</div>
	                </a>
	                : 
	                <div className = "HoverOptions">
		                <a id= "trash-button" onClick={this.handleClickTrash.bind(this,this.props.img.id)}>
		               		 <div className= "ImageComponent-trash">
		                         	<h3>
		                         		<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
		                         	</h3>
		               		</div>
		               </a>
		               <a id= "cover-button" onClick={this.handleClickCover.bind(this,this.props.img.id)}>
		               		 <div className= "ImageComponent-cover">
		                         	<h3>
		                         		<span className="glyphicon glyphicon-picture" aria-hidden="true"></span>
		                         	</h3>
		               		</div>
		               </a>
		            </div>   

	            }	

			</div>
			)

	}
}

ImageComponent.propTypes = {
  onselected: PropTypes.func.isRequired,
  ondeselect: PropTypes.func.isRequired,
  ondelete : PropTypes.func.isRequired,	
  selected : PropTypes.bool.isRequired

};


export {ImageComponent}