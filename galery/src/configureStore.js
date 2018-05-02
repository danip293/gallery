import {createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers'
import thunk from 'redux-thunk'



						//preloaded state
const configureStore = (preloadedState) => {
	let store = createStore(reducers, preloadedState ,
		applyMiddleware(
			    thunk,  // nos permite despachar funciones
			    logger  // buen middleware que registra las acciones
   
    ))
	return store
}

export default configureStore;