const url = "http://api.tvmaze.com/schedule?country=US&date=2018-03-13";
export default () =>{
	return fetch(url)
		.then(response => Promise.all([response, response.json()]))	
	

} 