import React , {Component} from 'react'
import Dropzone from 'react-dropzone';
import {ImagePreviewComponent} from './ImagePreviewComponent'
import PropTypes from 'prop-types';
import { Collapse} from 'reactstrap';

class GalleryDropzoneComponent extends Component{
	 constructor() {
    super()
         this.state = {
              files:  [],
              uploadComplete: [] 
              
            }
            this.addImage = this.addImage.bind(this)
            
            

        }

    
    addImage(img, callbackSuccess,callbackError){
      this.props.onAddImage(img, callbackSuccess,callbackError)
      const Completed = this.state.uploadComplete
      Completed.push(img)
      this.setState({
        uploadComplete: Completed
      })
    }    


    renderPreview(){
        const array = this.state.files
        return array.map((img , key) =>{
              return (
                    <ImagePreviewComponent key={key+"preview"} img = {img} onAddImg={this.addImage}/>    
              )
        })
    }
    onDrop(files) {
        let allFiles = this.state.files
        files.map(file => {
            return allFiles.push(file)
        })
       
        this.setState({
            files : allFiles
        })
    }
 

    render(){
      
    	return(
    	  <div className="dropzone-content" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
               
                  <Dropzone 
                      className="filepicker dropzone dz-clickable dz-started" 
                      accept="image/jpeg, image/png"
                      onDropAccepted={this.onDrop.bind(this)}>
                    <p>trata de cargar los archivos que deseas subir aqui</p>
                    {this.renderPreview()}
                  </Dropzone>
               
            </div>
        )
    }
}
GalleryDropzoneComponent.propTypes = {
  onAddImage: PropTypes.func.isRequired


}
export {GalleryDropzoneComponent}