import {UPLOADING_IMAGE,UPLOAD_IMAGE_SECCESS,UPLOAD_IMAGE_ERROR} from '../actions/index'

const initialState = {
	data : [],
	isUploading : false,
	error : false 

}
const uploadImages = (state = initialState, action) => {
switch (action.type){
	case UPLOADING_IMAGE:
		return{
			...state,
			data : [],
			isUploading : true,
			
		}
	case UPLOAD_IMAGE_SECCESS:
		return {
			...state,
			data : action.data,
			isUploading : false
		}
	case UPLOAD_IMAGE_ERROR :
		return {
			...state,
			isUploading : false ,
			error : true

		}
	default : 
		return state	

	}		
}

export default uploadImages;