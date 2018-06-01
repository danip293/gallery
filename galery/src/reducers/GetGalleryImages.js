import { Map ,List} from 'immutable'
import { FETCHING_DATA ,FETCHING_DATA_SECCESS, FETCHING_DATA_FAILURE, 
	ADD_IMAGE, DELETED_IMAGE ,SELECTED_PAGE,PAGE_FETCHED,SELECT_IMG_COVER} from '../actions/gallery'

const initialState = {
	dictionary : Map(),
	list : List (),
	currentPage: 1 ,
	count: 0,
	isFetching : false,
	error : false, 
	requestedPages:Map(),
	pageSize : 5
	


}

const dictionary = (array,prevState)=>{
	let newDictionary = prevState.dictionary
	for (var i = 0; i < array.length; i++) {
		newDictionary = newDictionary.set(array[i].id.toString(),array[i])
	}
	return newDictionary
}

const list = (array,prevState)=>{
	let list = prevState.list
	let page = ((prevState.currentPage-1) * prevState.pageSize) 
	
	for (var i = 0; i < array.length; i++) {
		list = list.set(page + i,array[i].id)
	}
	return list
}


const uploadImages = (state = initialState, action) => {
switch (action.type){
	case SELECT_IMG_COVER:

	let newDic = state.dictionary.map( x =>{
		x.cover = false
		return(x)
	})

	let obj = state.dictionary.get(action.payload.toString())
	obj.cover = true

	newDic = newDic.set(action.payload.toString(), obj)

		return{
			...state,
			dictionary : newDic,
			

		}
	case ADD_IMAGE:
		let newList = state.list
		newList = newList.unshift(action.payload.id)

		let newDictionary = state.dictionary
		newDictionary= newDictionary.set([action.payload.id].toString(),action.payload) 

		return{
			...state,
			list: newList,
			dictionary:newDictionary,
			count: state.count + 1,
		}

	case DELETED_IMAGE:
		return{
			...state,
			count: state.count - 1,
			list: state.list.filter(dato => dato !== action.payload),
			dictionary : state.dictionary.delete(action.payload.toString())
		}	

	case SELECTED_PAGE:
		return{
			...state,
			currentPage:action.payload 
		}
	case PAGE_FETCHED:
		let pages = state.requestedPages
		pages = pages.set("page" + action.payload,true)
		return {
			...state,
			requestedPages: pages ,
		}
		
	case FETCHING_DATA:
		return{
			...state,
			isFetching : true,	
		}

	case FETCHING_DATA_SECCESS:
		return {
			...state,
			dictionary:dictionary(action.data.results,state),
			list:list(action.data.results,state),
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