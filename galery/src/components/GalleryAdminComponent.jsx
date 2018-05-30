import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,deleteImage,selectPage,addImage,coverImage,uploadImage} from '../actions/gallery';
import {PaginationComponent} from './PaginationComponent'


import {GalleryDropzoneComponent} from './GalleryDropzoneComponent'
import {ImageContainerComponent} from './ImageContainerComponent.jsx'




class GalleryAdmin extends Component {
  constructor(){
    super()

    this.addImage = this.addImage.bind(this)
  }

  addImage(img){
      this.props.addImg(img)  
  }
    render (){
     
    return(        
    <div>
        <h2>Mis imagenes </h2>

          <hr/>
            <ImageContainerComponent
                isFetching = {this.props.images.isFetching}
                listImages  = {this.props.images.list}
                diccionaryImages = {this.props.images.dictionary}
                currentPage = {this.props.images.currentPage}
                selectPage = {this.props.selectPage}
                delete = {this.props.delete}
                cover = {this.props.coverImage} 
                multipleChoice = {false}
            />

          <hr/>

                  <PaginationComponent 
                    fecth={this.props.fetchData} 
                    count ={this.props.images.count} 
                    onSelectPage = {this.props.selectPage}
                    active = {this.props.images.currentPage} 
                  />

                  <GalleryDropzoneComponent 
                    onAddImage = {this.addImage}
                  />
            
      </div>
      
    )
    
  }
}
    const mapStateToProps = state =>{             
        return {
        images:  state.getImages
    
        }
    }
    const mapDispatchToProps = dispatch =>{
        return{
          fetchData  : (Url) => dispatch(fetchData(Url)),
          delete     : (id) => dispatch(deleteImage(id)),
          selectPage : (page) => dispatch(selectPage(page)),
          addImg     : (img) => dispatch(uploadImage(img)),
          coverImage : (id) => dispatch(coverImage(id))
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GalleryAdmin)


