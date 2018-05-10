import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,deleteImage} from '../actions';

import { PaginationComponent} from './PaginationComponent'
import ReactPaginate from 'react-paginate';
import {ImageComponent} from './ImageComponent'
import {GalleryDropzoneComponent} from './GalleryDropzoneComponent'




class GalleryAdmin extends Component {
  constructor(){
    super()
    this.state={
      selected: {},

    }
    this.selectImage = this.selectImage.bind(this)
    this.deselectImage = this.deselectImage.bind(this)
    this.deleteImg = this.deleteImg.bind(this)
  }
    
    componentDidMount(){
       this.props.fetchData()
    }

    selectImage(img){
      let selected = this.state.selected
      selected[img.id] = img
      this.setState({selected:selected})
    }

    deselectImage(id){
      let selected = this.state.selected
      delete selected[id]
      this.setState({selected:selected})
    }
    deleteImg(id){
      console.log('delete')
      this.props.delete(id)
      
    }

    getGallery(){
        const {images} = this.props
        const datos = images.data.map((img ) => {
            return  <ImageComponent key = {img.id} img = {img} onselected={this.selectImage}
             ondeselect={this.deselectImage} ondelete={this.deleteImg}/>
            })
        return datos
    }


    

 

    
    render (){
     console.log(this.state.selected)
    return(
    <div >
      <h2>Mis imagenes </h2>
        <hr/>

        {this.props.images.isFetching && <p> Loading </p>}{
        this.props.images.data ?
        this.getGallery()
        : null
        }
        <hr/>

           <ReactPaginate previousLabel={"Anterior"}
                       nextLabel={"Siguiente"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.props.images.count/20}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={10}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />

            

          
                <GalleryDropzoneComponent />
          
    </div>

    )
    
  }
}
    const mapStateToProps = state =>{             ///recive un state y devuelve un objeto
        return {
        images:  state.getImages
        
      
        }
    }
    const mapDispatchToProps = dispatch =>{
        return{
        fetchData : (Url) => dispatch(fetchData(Url)),
        delete      : (id) => dispatch(deleteImage(id))
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GalleryAdmin)