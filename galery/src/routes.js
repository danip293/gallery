import React from 'react'
import {Route, Switch} from 'react-router-dom'
/////components
import App from './App'
import GalleryAdmin from './components/GalleryAdminComponent';
// import Gallery from './components/GalleryComponent'
import {Page404} from  './components/Page404';
import {ImageComponent} from './components/ImageComponent'


const AppRoutes =  () =>
 	<App>
			<Switch>
				<Route path="/galeriaadmin" component = {GalleryAdmin}/>
				<Route path="/galeria" component = {ImageComponent}/>
				<Route component = {Page404}/>
			</Switch>
	</App>



export { AppRoutes }