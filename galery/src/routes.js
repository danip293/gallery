import React from 'react'
import {Route, Switch} from 'react-router-dom'
/////components
import App from './App'
import GalleryAdmin from './components/galleryAdminComponent';
import Gallery from './components/galleryComponent'
import {Page404} from  './components/Page404';


const AppRoutes =  () =>
 	<App>
			<Switch>
				<Route path="/galeriaadmin" component = {GalleryAdmin}/>
				<Route path="/galeria" component = {Gallery}/>
				<Route component = {Page404}/>
			</Switch>
	</App>



export { AppRoutes }