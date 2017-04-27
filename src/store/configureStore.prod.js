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
var index_1 = require("../reducers/index");
var redux_thunk_1 = require("redux-thunk");
function configureStore(initialState) {
    return redux_1.createStore(index_1.default, initialState, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.default = configureStore;

//# sourceMappingURL=configureStore.prod.js.map
