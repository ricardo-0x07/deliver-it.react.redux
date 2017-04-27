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

export default function customerReducer(state = initialState.customers, action) {
    switch (action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS:
        return action.customers;
    case types.CREATE_CUSTOMER_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.customer)
        ];

    case types.UPDATE_CUSTOMER_SUCCESS:
        return [
            ...state.filter(customer => customer.id !== action.customer.id),
            Object.assign({}, action.customer)
        ];
    case types.DELETE_CUSTOMER_SUCCESS:
        console.log('DELETE_CUSTOMER_SUCCESS action', action);
        console.log('DELETE_CUSTOMER_SUCCESS state', state);
        return [
            ...state.filter(customer => customer.id !== action.customer.id)
        ];
    default:
        return state;
    }
}
