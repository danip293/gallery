		const token = "sAIOwXigJ4BITByLVIAwpIZSjwuUfh3t~1fOpK6~FTNUtEKNEV_FqNjWGTILye-fx2E"
		const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
		const identityID = "~FgT5c4D56wq"
		const galeryID = "~FgT5c4D56wq"
		const query  = "/?resizetofit.width=200&resizetofit.height=200&resizetofit.upscale=true&_format=jpeg"
		const finalUrl = baseUrl+identityID + ":" + galeryID  +"/"

export const ADD_IMAGE = "ADD_IMAGE"
export const DELETE_IMAGE = "DELETE_IMAGE"
export const DELETED_IMAGE = "DELETED_IMAGE"
export const FETCHING_DATA = "FETCHING_DATA"
export const FETCHING_DATA_SECCESS = "FETCHING_DATA_SECCESS"
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"
export const SELECTED_PAGE = "SELECTED_PAGE"



const fetchDataPerPage = (pageNumber )=>{
	return (dispatch) =>{
		
			console.log("buscar pagina " + pageNumber)
			let p = new URLSearchParams();
	   		p.append('page', pageNumber || 1);
	   		dispatch(fetchData(finalUrl + query + "&"+ p))	
	}

}

export const selectedPage = (pageNumber) =>{
		return{
			type:SELECTED_PAGE,
			payload:pageNumber
		}
}

export const selectPage = (pageNumber) =>{
	return (dispatch , getState) =>{
		let state = getState()
				
		if (state.getImages.requestedPages["page"+ pageNumber] === undefined) {

	  		dispatch(fetchDataPerPage(pageNumber))
			dispatch(selectedPage(pageNumber))		
		}
		else{
			console.log("ya la tengo")
			dispatch(selectedPage(pageNumber))
			
		}
	}
}

export const addImage = (img) =>{
	return {
		type : ADD_IMAGE,
		payload : img
	}
}

export const deletedImage = (id) =>{
	return {
		type : DELETED_IMAGE,
		payload : id
	}
}

export const getData = () =>{
	return {
		type : FETCHING_DATA
	}
}

export const getDataSuccess = data =>{
	return {
		type : FETCHING_DATA_SECCESS,
		data 
	}
}

export const getDataFailure = () =>{
	return{
		type : FETCHING_DATA_FAILURE
	}
}


export const fetchData = (Url = finalUrl + query) =>{
	
	return (dispatch) => {	
		let options = {
		    method: 'GET',
		    //mode: 'cors',
		    //body: JSON.stringify(valuesForm),
		    headers: {
		    	"Authorization" : "Bearer "+ token,
      			"Content-type": "application/json; charset=UTF-8"
    		}
		}

		let req = new Request(Url, options);

		dispatch(getData())
		fetch(req)
		    .then((response)=>{
		        if(response.ok){
		            return response.json();   ///recivve los datos del json  y los retorna al siguiente .then 
		        }else{
		            throw new Error('Ha ocurrido un error!')
		        }
		    })
		    .then( (j) =>{
		        //console.log(j);
		        dispatch(getDataSuccess(j))
		    })
		    .catch( (err) =>{
		    	alert(err)
		        //console.log('ERROR:', err.message);
		        dispatch(getDataFailure())
		    });
		
	}
}



export const deleteImage = (id) =>{
	return (dispatch, getState) =>{
		let state = getState()
		let pageNumber = state.getImages.currentPage
		const {count} = state.getImages
		let lastPage = Math.ceil(count / 20)
		

		let options = {
		    method: 'DELETE',
		    //mode: 'cors',
		    //body: JSON.stringify(data),
		    headers: {
      			"Authorization" : "Bearer "+ token,
      			"Content-type": "application/json; charset=UTF-8"
    		}
		}
		let Url= finalUrl+id
		let req = new Request(Url, options);

		
		fetch(req)
		    .then((response)=>{
		        if(response.ok){
		            return response.status;   ///recivve los datos del json  y los retorna al siguiente .then 
		        }else{
		            throw new Error('Ha ocurrido un error !')
		        }
		    })
		    .then( (j) =>{
		    	console.log(j);
		    	
		    	if(state.getImages.requestedPages["page"+(pageNumber + 1)] === undefined && (pageNumber < lastPage)){   /// si voy a borrar una imagen y no tengo los datos de la pagina siguiente
		    		dispatch((deletedImage(id)))
		    		dispatch(fetchDataPerPage(pageNumber))

		    	}else{

		        dispatch((deletedImage(id)))
		    		
		    	}
		        

		    })
		    .catch( (err) =>{
		    	alert(err)
		        console.log('ERROR:', err.message);
		        //dispatch(uploadFailure())
		    });
	}

}

