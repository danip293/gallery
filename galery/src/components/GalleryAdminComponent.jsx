import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,deleteImage,selectPage,coverImage,uploadImage} from '../actions/gallery';
import {PaginationComponent} from './PaginationComponent'


import {GalleryDropzoneComponent} from './GalleryDropzoneComponent'
import {ImageContainerComponent} from './ImageContainerComponent.jsx'


class GalleryAdminComponent extends Component {
  constructor(){
    super()

    this.addImage = this.addImage.bind(this)
  }

  addImage(img, callbackSuccess,callbackError){
      this.props.addImg(img, callbackSuccess,callbackError)  
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
                multipleChoice = {true}
                pageSize = {this.props.images.pageSize}
            />

          <hr/>

                  <PaginationComponent 
                    fecth={this.props.fetchData} 
                    count ={this.props.images.count} 
                    onSelectPage = {this.props.selectPage}
                    active = {this.props.images.currentPage}
                    pageSize = {this.props.images.pageSize} 
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
          addImg     : (img,callbackSuccess,callbackError) => dispatch(uploadImage(img,callbackSuccess,callbackError)),
          coverImage : (id) => dispatch(coverImage(id))
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GalleryAdminComponent)


