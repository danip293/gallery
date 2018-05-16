import { FETCHING_DATA ,FETCHING_DATA_SECCESS, FETCHING_DATA_FAILURE, 
	ADD_IMAGE, DELETED_IMAGE ,SELECTED_PAGE} from '../actions/'

const initialState = {
	data : [],
	diccionary:{},
	list:[],
	nextPage:null,
	previewPage: null,
	CurrentPage: 1 ,
	count: 0,
	isFetching : false,
	error : false 

}



const dictionary = (array,prevState)=>{
	let obj = prevState.diccionary
	array.map(element =>{
		obj[element.id] = element
	})
	return obj
}

const list = (array,prevState)=>{
	let list = prevState.list
	let elements = array.map(element => {
		return element.id

	})
	list.push(...elements)
	return list

}
const list2 = (prevState)=>{
	let list = []
	let obj = prevState.diccionary
		for (var i in obj){
		list.push(i)
		}
	return list
	}






const uploadImages = (state = initialState, action) => {
switch (action.type){
	case ADD_IMAGE:
		return{
			...state,
			data : [],
			isFetching : true,
			
		}
	case DELETED_IMAGE:
		return{
			...state,
			data : state.data.filter(dato => dato.id !==  action.payload ),
			count: state.count - 1,
			
		}	
	case SELECTED_PAGE:
		return{
			...state,
			CurrentPage:action.payload 

		}	
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
			diccionary:dictionary(action.data.results,state),
			list:list2(state),
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