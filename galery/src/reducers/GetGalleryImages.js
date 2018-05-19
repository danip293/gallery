import { FETCHING_DATA ,FETCHING_DATA_SECCESS, FETCHING_DATA_FAILURE, 
	ADD_IMAGE, DELETED_IMAGE ,SELECTED_PAGE} from '../actions/'

const initialState = {
	data : [],
	diccionary:{},
	list:[],
	nextPage:null,
	previewPage: null,
	currentPage: 1 ,
	count: 0,
	isFetching : false,
	error : false, 
	requestedPages:{},
	data2 : []

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
	let page = prevState.currentPage
	page = ((page * 2 )-2)*10 
	
	let elements = array.map((element,key) => {
		list[page + key] = element.id
		return element.id
	})

	return list

}


const uploadImages = (state = initialState, action) => {
switch (action.type){
	case ADD_IMAGE:

		let newList= state.list
		newList.unshift(action.payload.id)

		let newDiccionary = state.diccionary
		newDiccionary[action.payload.id] = action.payload

		return{
			...state,
			list: newList,
			diccionary:newDiccionary,
			count: state.count + 1,

			
		}
	case DELETED_IMAGE:
		return{
			...state,
			data : state.data.filter(dato => dato.id !==  action.payload ),
			count: state.count - 1,
			list: state.list.filter(dato => dato !== action.payload)
			
		}	
	case SELECTED_PAGE:
		let pages = state.requestedPages
		pages["page" + action.payload] = true
		
		return{
			...state,
			requestedPages: pages ,
			currentPage:action.payload 

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
			list:list(action.data.results,state),
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