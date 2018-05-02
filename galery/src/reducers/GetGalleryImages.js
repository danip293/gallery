import { FETCHING_DATA ,FETCHING_DATA_SECCESS, FETCHING_DATA_FAILURE} from '../constants'

const initialState = {
	data : [],
	nextPage:"",
	previewPage:"",
	count: 0,
	isFetching : false,
	error : false 

}
const uploadImages = (state = initialState, action) => {
switch (action.type){
	case FETCHING_DATA:
		return{
			...state,
			data : [],
			isFetching : true,
			
		}
	case FETCHING_DATA_SECCESS:
		return {
			...state,
			data : action.data.results,
			nextPage: action.data.next,
			previewPage: action.data.previous,
			count: action.data.count,
			isFetching : false
		}
	case FETCHING_DATA_FAILURE :
		return {
			...state,
			isFetching : false ,
			error : true

		}
	default : 
		return state	

	}		
}

export default uploadImages;