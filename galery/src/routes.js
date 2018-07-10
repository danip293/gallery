import React from 'react'
import {Route, Switch} from 'react-router-dom'
/////components
import App from './App'
import GalleryAdmin from './components/GalleryAdminComponent';
import Gallery from './components/GalleryComponent';
import galeria from './components/galleryGrid.jsx'

import {Page404} from  './components/Page404';



const AppRoutes =  () =>
 	<App>
			<Switch>
				<Route path="/galeriaadmin" component = {GalleryAdmin}/>
				<Route path="/galeria" component = {galeria}/>
				<Route component = {Page404}/>
			</Switch>
	</App>



export { AppRoutes }