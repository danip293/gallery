import React  from 'react'


const ListItemComponent = ({obj}) =>{
	return(


			<div className = "imagenContainer"> 
				<div>     
			        <img   src={obj.url}  alt =""/> 		   
	    		</div>
	    	</div>	
      

		)


}
export {ListItemComponent}

