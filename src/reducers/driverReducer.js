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
    if (state === void 0) { state = initialState_1.default.drivers; }
    switch (action.type) {
        case types.LOAD_DRIVERS_SUCCESS:
            return action.drivers;
        case types.CREATE_DRIVER_SUCCESS:
            return state.concat([
                Object.assign({}, action.driver)
            ]);
        case types.UPDATE_DRIVER_SUCCESS:
            return state.filter(function (driver) { return driver.id !== action.driver.id; }).concat([
                Object.assign({}, action.driver)
            ]);
        case types.DELETE_DRIVER_SUCCESS:
            console.log('DELETE_DRIVER_SUCCESS action', action);
            console.log('DELETE_DRIVER_SUCCESS state', state);
            return state.filter(function (driver) { return driver.id !== action.driver.id; }).slice();
        default:
            return state;
    }
}
exports.default = customerReducer;

//# sourceMappingURL=driverReducer.js.map
