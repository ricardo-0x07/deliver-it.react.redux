/*eslint-disable import/default */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {$} from 'jquery';
var React = require("react");
var ReactDOM = require("react-dom");
var homePage_1 = require("./components/homePage");
var aboutPage_1 = require("./components/about/aboutPage");
var customerPage_1 = require("./components/customers/customerPage");
var ManageCustomerForm_1 = require("./components/customers/ManageCustomerForm");
var driverPage_1 = require("./components/drivers/driverPage");
var ManageDriverForm_1 = require("./components/drivers/ManageDriverForm");
var header_1 = require("./components/common/header");
var react_router_dom_1 = require("react-router-dom");
require('es6-object-assign').polyfill();
var customerActions_1 = require("./redux-actions/customerActions");
var driverActions_1 = require("./redux-actions/driverActions");
var react_redux_1 = require("react-redux");
var index_1 = require("./reducers/index");
var redux_immutable_state_invariant_1 = require("redux-immutable-state-invariant");
var redux_thunk_1 = require("redux-thunk");
var redux_1 = require("redux");
var createHashHistory_1 = require("history/createHashHistory");
var react_router_redux_1 = require("react-router-redux");
// Create a history of your choosing (we're using a browser history in this case)
console.log('createHashHistory', createHashHistory_1.default);
var history = createHashHistory_1.default();
// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(hashHistory, store)
// Build the middleware for intercepting and dispatching navigation actions
var middleware = react_router_redux_1.routerMiddleware(history);
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
var store = redux_1.createStore(index_1.default, redux_1.applyMiddleware(middleware, redux_thunk_1.default, redux_immutable_state_invariant_1.default()));
store.dispatch(customerActions_1.loadCustomers());
store.dispatch(driverActions_1.loadDrivers());
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_dom_1.HashRouter, { history: history },
        React.createElement("div", null,
            React.createElement(header_1.default, null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homePage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/customers", component: customerPage_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer", component: ManageCustomerForm_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/customer/:id", component: ManageCustomerForm_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/drivers", component: driverPage_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/driver", component: ManageDriverForm_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/driver/:id", component: ManageDriverForm_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/about", component: aboutPage_1.default })))), document.getElementById('app'));

//# sourceMappingURL=index.js.map
