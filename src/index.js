import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <App />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
