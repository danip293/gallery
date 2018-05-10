
const baseUrl = "https://galleries-sandbox-api.dubalu.io/"
		const identityID = "~89nsP6etTwi"
		const galeryID = "~89nsP6etTwi"
		const param  = "/?resizetofit.width=200&resizetofit.height=200&resizetofit.upscale=true&_format=jpeg"
		const finalUrl = baseUrl+"/"+identityID + ":" + galeryID + "/" 

export const ADD_IMAGE = "ADD_IMAGE"
export const DELETE_IMAGE = "DELETE_IMAGE"
export const DELETED_IMAGE = "DELETED_IMAGE"
export const FETCHING_DATA = "FETCHING_DATA"
export const FETCHING_DATA_SECCESS = "FETCHING_DATA_SECCESS"
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"

export const UPLOADING_IMAGE = "UPLOADING_IMAGE"
export const UPLOAD_IMAGE_SECCESS = "UPLOAD_IMAGE_SECCESS"
export const UPLOAD_IMAGE_ERROR = "UPLOAD_IMAGE_ERROR"


export const addImage = (img) =>{
	return {
		type : ADD_IMAGE,
		payloaad : img
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


export const fetchData = (Url = finalUrl ) =>{
	Url= Url+param
	return (dispatch) => {
		
	
		let options = {
		    method: 'GET',
		    //mode: 'cors',
		    //body: JSON.stringify(valuesForm),
		    headers: {
		    	"Authorization" : "Bearer sAdFFLwSeLR9JOoLYChPtm6BhRb3kDzD~1fL9qG~at2hJH-nV0lO0KwLn3hP_DMii_I",
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
		        //console.log('ERROR:', err.message);
		        dispatch(getDataFailure())
		    });
		
	}
}



export const deleteImage = (id) =>{
	return (dispatch) =>{
		let options = {
		    method: 'DELETE',
		    //mode: 'cors',
		    //body: JSON.stringify(data),
		    headers: {
      			"Authorization" : "Bearer sAdFFLwSeLR9JOoLYChPtm6BhRb3kDzD~1fL9qG~at2hJH-nV0lO0KwLn3hP_DMii_I",
      			"Content-type": "application/json; charset=UTF-8"
    		}
		}
		let Url= finalUrl+id
		let req = new Request(Url, options);

		//dispatch(uploadingImage())
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
		        //dispatch(uploadSuccess(j))
		        dispatch((deletedImage(id)))
		    })
		    .catch( (err) =>{
		        console.log('ERROR:', err.message);
		        //dispatch(uploadFailure())
		    });
	}

}


// export const uploadingImage = () =>{
// 	return {
// 		type : UPLOADING_IMAGE
// 	}
// }

// export const uploadSuccess = data =>{
// 	return {
// 		type : UPLOAD_IMAGE_SECCESS,
// 		data 
// 	}
// }

// export const uploadFailure = () =>{
// 	return{
// 		type : UPLOAD_IMAGE_ERROR
// 	}
// }

// export const uploadImage = (data) =>{
	
// 	return (dispatch) =>{

		

// 		let options = {
// 		    method: 'POST',
// 		    //mode: 'cors',
// 		    body: JSON.stringify(data),
// 		    headers: {
//       			"Authorization" : "Bearer sA7lLVe99fAjaLbcbUDIGNvkh8d7JjAj~1fFirQ~gqVYU_FPEH1Sv5J4LExwYuJLwEc",
//       			"Content-type": "application/json; charset=UTF-8"
//     		}
// 		}

// 		let req = new Request(finalUrl, options);

// 		dispatch(uploadingImage())
// 		fetch(req)
// 		    .then((response)=>{
// 		        if(response.ok){
// 		            return response.json();   ///recivve los datos del json  y los retorna al siguiente .then 
// 		        }else{
// 		            throw new Error('Ha ocurrido un error !')
// 		        }
// 		    })
// 		    .then( (j) =>{
// 		        //console.log(j);
// 		        dispatch(uploadSuccess(j))
// 		        dispatch(fetchData())
// 		    })
// 		    .catch( (err) =>{
// 		        //console.log('ERROR:', err.message);
// 		        dispatch(uploadFailure())
// 		    });
// 	}
// }
