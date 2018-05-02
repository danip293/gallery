import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,uploadImage} from '../actions';
import {ListItemComponent} from './listItemComponent';
import Dropzone from 'react-dropzone';
import { ClipLoader } from 'react-spinners';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';



class GalleryAdmin extends Component {
    constructor() {
    super()

         this.state = {
              files:  []
              
           
            }
        }
 
    componentDidMount(){
       this.props.fetchData()
    }

    getGallery(){
        const {images} = this.props
        const datos = images.data.map((img ) => {
            return  <ListItemComponent key = {img.id} obj = {img} />
            })
        console.log(datos)
        return datos

        }


     pagination(){
        const {count} = this.props.images


        return(
             <Pagination size="md">
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">
                    1
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">
                    2
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
            )
     }   
        
    
    renderimg(){
        const array = this.state.files
        const {isUploading} = this.props.uploads
        return array.map((img , key) =>{
                return (
                        <div className= "preview" >
                          <img  key={img.preview} src={img.preview} alt = ""/> 
                          {isUploading && 
                            <div className="uploading">
                                <ClipLoader color={'#123abc'} loading={isUploading} />
                            </div> 
                            }
                        </div>          
                 )
            })
    }


    onDrop(files) {
    
        const childrens = files.map(file => {
           const reader = new FileReader();
           const FileName = file.name
           reader.readAsDataURL(file);
           reader.onload = (readImage) =>{
            const data = {
                image_base_64: readImage.srcElement.result,
                name : FileName,
            }

            this.props.uploadImage(data)
           }

        });

        this.setState({
            files : files
        })
    }

    
          
    
    render (){
    return(
    <div >
      <h2>Mis imagenes </h2>
        <hr/>

        {this.props.images.isFetching && <p> Loading </p>}{
        this.props.images.data ?
        this.getGallery()
        : null
        }
        
        {this.pagination()}

            <div className="dropzone-content">
                <div >
              <Dropzone className="filepicker dropzone dz-clickable dz-started" onDrop={this.onDrop.bind(this)}>
                <p>Try dropping some files here, or click to select files to upload.</p>
                  {this.renderimg()}
              </Dropzone>
              </div>
            </div>



 
    </div>
    )
    
    }
}
    const mapStateToProps = state =>{             ///recive un state y devuelve un objeto
        return {
        images:  state.getImages, 
        uploads: state.uploadImages
      
        }
    }
    const mapDispatchToProps = dispatch =>{
        return{
        fetchData : () => dispatch(fetchData()),
        uploadImage : (data) => dispatch(uploadImage(data))
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GalleryAdmin)