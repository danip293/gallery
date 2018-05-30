import React , {Component} from 'react'
import {ImageComponent} from './ImageComponent'
import PropTypes from 'prop-types';

class ImageContainerComponent extends Component{

    constructor(){
	    super()
	    this.state={
	      selected: {}
    	}
	      
	    this.selectImage = this.selectImage.bind(this)
    	this.deselectImage = this.deselectImage.bind(this)
    	this.deleteImg = this.deleteImg.bind(this)  
      this.coverImage = this.coverImage.bind(this)
    }

    componentDidMount(){
       this.props.selectPage(1)
    } 
     
    selectImage(img){
      if (this.props.multipleChoice) {
        let selected = this.state.selected
        selected[img.id] = img
        this.setState({selected:selected})
      }else{
        let selected = {}
        selected[img.id] = img
        this.setState({selected:selected})
      }
    }

    deselectImage(id){
      let selected = this.state.selected
      delete selected[id]
      this.setState({selected:selected})
    }

    deleteImg(id){

      this.props.delete(id)
      
    }
    coverImage(id){
      this.props.cover(id)
    }


    getGallery(){
        const data = this.props.listImages
        const start  = (((this.props.currentPage * 2 )-2)*10)
        const array = data.slice(start , (start + 20))

        const datos = array.map((img ) => {
              
            return  <ImageComponent 
              key = {img} 
              img = {this.props.diccionaryImages.get(img)} 
              onselected={this.selectImage}
              ondeselect={this.deselectImage} 
              ondelete={this.deleteImg}
              selected = {(this.state.selected[img]!==undefined)}
              oncoverimage = {this.coverImage} 
              />
            })
        return datos
    
	}

	render(){
		return(
			<div className = "ImageContainer" >
				 {this.props.isFetching && <h2> Loading... </h2>}
		          {
		          this.props.diccionaryImages ?
		          this.getGallery()
		          : null
		          }
			</div>
		)
	}

}
ImageContainerComponent.propTypes = {
	isFetching : PropTypes.bool.isRequired,
	listImages : PropTypes.object.isRequired,
	diccionaryImages: PropTypes.object.isRequired,
	currentPage : PropTypes.number.isRequired,
	selectPage : PropTypes.func.isRequired,
	delete : PropTypes.func.isRequired,
	multipleChoice: PropTypes.bool.isRequired


}
export {ImageContainerComponent}