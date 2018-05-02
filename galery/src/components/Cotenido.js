import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class Contenido extends Component{

	static propTypes = {
		body : PropTypes.object.isRequired
	}

	render(){
		const body = this.props.body
		return(
			<div className = "Cotenido">
			 	<h2>Contenido</h2>
			 	{body}
			</div>
		)
	}

} 
export {Contenido}