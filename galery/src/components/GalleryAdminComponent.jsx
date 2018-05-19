import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,deleteImage,selectPage,addImage} from '../actions';
import {PaginationComponent} from './PaginationComponent'
import {ImageComponent} from './ImageComponent'
import {GalleryDropzoneComponent} from './GalleryDropzoneComponent'
import {ImageContainerComponent} from './ImageContainerComponent.jsx'




class GalleryAdmin extends Component {
  constructor(){
    super()
    this.state={
      selected: {},
      multipleChoice: false

    }
    this.selectImage = this.selectImage.bind(this)
    this.deselectImage = this.deselectImage.bind(this)
    this.deleteImg = this.deleteImg.bind(this)
    this.addImage = this.addImage.bind(this)
  }
    
    componentDidMount(){
       this.props.selectPage(1)
    }

    selectImage(img){
      if (this.state.multipleChoice) {
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
    addImage(img){
      this.props.addImg(img)  
    }

    getGallery(){
        
        const data = this.props.images.list
        const start  = (((this.props.images.currentPage * 2 )-2)*10)
        const array = data.slice(start , (start + 20))

        const datos = array.map((img ) => {
              
            return  <ImageComponent 
              key = {img} img = {this.props.images.diccionary[img]} 
              onselected={this.selectImage}
              ondeselect={this.deselectImage} 
              ondelete={this.deleteImg}
              selected = {(this.state.selected[img]!==undefined)}
              />
            })
        return datos
    }


 
    render (){
     console.log(this.state.selected)
    return(
      <div >
        <h2>Mis imagenes </h2>

          <hr/>
          <ImageContainerComponent/>

          {this.props.images.isFetching && <p> Loading </p>}
          {
          this.props.images.data ?
          this.getGallery()
          : null
          }
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
          addImg     : (img) => dispatch(addImage(img))
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GalleryAdmin)