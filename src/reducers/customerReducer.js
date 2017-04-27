/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../redux-actions/actionTypes");
var initialState_1 = require("./initialState");
function customerReducer(state, action) {
    if (state === void 0) { state = initialState_1.default.customers; }
    switch (action.type) {
        case types.LOAD_CUSTOMERS_SUCCESS:
            return action.customers;
        case types.CREATE_CUSTOMER_SUCCESS:
            return state.concat([
                Object.assign({}, action.customer)
            ]);
        case types.UPDATE_CUSTOMER_SUCCESS:
            return state.filter(function (customer) { return customer.id !== action.customer.id; }).concat([
                Object.assign({}, action.customer)
            ]);
        case types.DELETE_CUSTOMER_SUCCESS:
            console.log('DELETE_CUSTOMER_SUCCESS action', action);
            console.log('DELETE_CUSTOMER_SUCCESS state', state);
            return state.filter(function (customer) { return customer.id !== action.customer.id; }).slice();
        default:
            return state;
    }
}
exports.default = customerReducer;

//# sourceMappingURL=customerReducer.js.map
