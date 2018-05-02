import "babel-polyfill";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router} from 'react-router-dom'
import { AppRoutes } from './routes'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

	<Router>
		<AppRoutes/>
	</Router>


	, document.getElementById('root'));
registerServiceWorker();
 