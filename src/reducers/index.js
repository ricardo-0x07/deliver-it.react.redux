/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var customerReducer_1 = require("./customerReducer");
var driverReducer_1 = require("./driverReducer");
var ajaxStatusReducer_1 = require("./ajaxStatusReducer");
var react_router_redux_1 = require("react-router-redux");
var rootReducer = redux_1.combineReducers({
    drivers: driverReducer_1.default,
    customers: customerReducer_1.default,
    ajaxCallsInProgress: ajaxStatusReducer_1.default,
    router: react_router_redux_1.routerReducer
});
exports.default = rootReducer;

//# sourceMappingURL=index.js.map
