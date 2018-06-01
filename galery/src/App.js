import React ,{Component} from 'react';
import PropTypes from 'prop-types'
import Menus from './menu.js'
import {Link} from 'react-router-dom'
import './App.css';
import './example.css'
import '../node_modules/dropzone/dist/min/dropzone.min.css'
import './file-picker.css'
import logo from './logo.svg';
import { Provider } from 'react-redux'; ///// conecta los containers al store de redux

import configureStore from './configureStore';
import {Contenido} from './components/Cotenido'



let store = configureStore();
class  App extends Component{
	
	static propTypes = {
		children : PropTypes.object.isRequired

	};

	render(){
		const {children} =  this.props
		return(
			<Provider store = {store} >
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						 <ul className="Menu">
								{
									 Menus.map((item, key) => 
										<li key={key}><Link to={item.url}>{item.title}</Link></li>)
								}
						</ul>
					</header>
					<Contenido body = {children}/>
					
					
				</div>
			</Provider>
		)
}}


export default App;