import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import KatchupsStore from './Reducers/KatchupsStore';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Main from './Components/Main/Main';


const store = createStore(KatchupsStore, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App /> 
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
