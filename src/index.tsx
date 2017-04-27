/*eslint-disable import/default */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../typings/index.d.ts"/>
"use strict";

// import {$} from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './components/app';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Customers from './components/customers/customerPage';
import ManageCustomerForm from './components/customers/ManageCustomerForm';

import Drivers from './components/drivers/driverPage';
import ManageDriverForm from './components/drivers/ManageDriverForm';
import Header from './components/common/header';
import {
  HashRouter as Router,
  Route,
  Link, 
} from 'react-router-dom'
require('es6-object-assign').polyfill();

import routes from './routes';
import configureStore from './store/configureStore.dev';
import {loadCustomers} from './redux-actions/customerActions';
import {loadDrivers} from './redux-actions/driverActions';
import {Provider} from 'react-redux';
import initialState from './reducers/initialState';

import rootReducer from './reducers/index';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHashHistory from 'history/createHashHistory';
import { syncHistoryWithStore, ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// Create a history of your choosing (we're using a browser history in this case)
console.log('createHashHistory', createHashHistory);
const history = createHashHistory()
// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(hashHistory, store)
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  rootReducer,
  applyMiddleware(middleware, thunk, immutableStateInvariantMiddleware())
)

store.dispatch(loadCustomers());
store.dispatch(loadDrivers());



ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/customers" component={Customers} />
          <Route exact path="/customer" component={ManageCustomerForm} />
          <Route path="/customer/:id" component={ManageCustomerForm} />
          <Route path="/drivers" component={Drivers} />
          <Route exact path="/driver" component={ManageDriverForm} />
          <Route path="/driver/:id" component={ManageDriverForm} />
          <Route path="/about" component={About} />
        </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)