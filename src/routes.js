/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var homePage_1 = require("./components/homePage");
var app_1 = require("./components/app");
var aboutPage_1 = require("./components/about/aboutPage");
var customerPage_1 = require("./components/customers/customerPage");
var ManageCustomerForm_1 = require("./components/customers/ManageCustomerForm");
var react_router_dom_1 = require("react-router-dom");
exports.default = (React.createElement(react_router_dom_1.Route, { path: "/", component: app_1.default },
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homePage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/customers", component: customerPage_1.default }),
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer", component: ManageCustomerForm_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/customer/:id", component: ManageCustomerForm_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/about", component: aboutPage_1.default })));

//# sourceMappingURL=routes.js.map
