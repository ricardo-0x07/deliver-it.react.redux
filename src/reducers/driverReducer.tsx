/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import * as types from '../redux-actions/actionTypes';
import initialState from './initialState';

export default function driverReducer(state = initialState.drivers, action) {
    switch (action.type) {
    case types.LOAD_DRIVERS_SUCCESS:
        return action.drivers;
    case types.CREATE_DRIVER_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.driver)
        ];

    case types.UPDATE_DRIVER_SUCCESS:
        return [
            ...state.filter(driver => driver.id !== action.driver.id),
            Object.assign({}, action.driver)
        ];
    case types.DELETE_DRIVER_SUCCESS:
        console.log('DELETE_DRIVER_SUCCESS action', action);
        console.log('DELETE_DRIVER_SUCCESS state', state);
        return [
            ...state.filter(driver => driver.id !== action.driver.id)
        ];
    default:
        return state;
    }
}
