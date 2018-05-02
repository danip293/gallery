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

////Actions
//import { addTodo, setVisibilityFilter, VisibilityFilters } from './actions/todoActions'
//import { selectSubreddit, fetchPosts } from './actions/AsyncActions'
///asycApp

let store = configureStore();
// Mostramos el estado inicial
//    console.log("estado del store")
//    console.log(store.getState())
// Cada vez que el estado cambie, lo mostramos
// Tenga en cuenta que subscribe() devuelve una función para anular el registro del listener
//        let unsubscribe = store.subscribe(() =>
//          console.log(store.getState())
//        )
//// Enviamos algunas acciones
//store.dispatch(addTodo('Aprender sobre acciones'))
//store.dispatch(addTodo('Aprender sobre reductores'))
//store.dispatch(addTodo('Aprender sobre stores'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
//unsubscribe()
/////provider prove el estado de redux a los componentes hijos
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