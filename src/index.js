//* SERVICES
import React from 'react'
import {hydrate,render} from 'react-dom'

//* SERVICIOS DE API
import { Provider } from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from "./reducers"

//* COMPONENTS
import App from './App'

//* REVISAR QUE HACE
const store = createStore(reducers,compose(applyMiddleware(thunk)))


const rootElement = document.getElementById("root");

if(rootElement.hasChildNodes()){
  hydrate(<App />,rootElement);
}else{
  render(<App />,rootElement);
}
