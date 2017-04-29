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

export default function deliveryRequestReducer(state = initialState.deliveryRequests, action) {
    switch (action.type) {
    case types.LOAD_DELIVERYREQUESTS_SUCCESS:
        return action.deliveryRequests;
    case types.CREATE_DELIVERYREQUEST_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.deliveryRequest)
        ];

    case types.UPDATE_DELIVERYREQUEST_SUCCESS:
        return [
            ...state.filter(deliveryRequest => deliveryRequest.id !== action.deliveryRequest.id),
            Object.assign({}, action.deliveryRequest)
        ];
    case types.DELETE_DELIVERYREQUEST_SUCCESS:
        return [
            ...state.filter(deliveryRequest => deliveryRequest.id !== action.deliveryRequest.id)
        ];
    default:
        return state;
    }
}
