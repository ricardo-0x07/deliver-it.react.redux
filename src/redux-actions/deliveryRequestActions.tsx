/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import DeliveryRequestApi from '../api/deliveryRequestsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadDeliveryRequestSuccess(deliveryRequests) {
    return {type: types.LOAD_DRIVERS_SUCCESS, deliveryRequests};
}

export function createDeliveryRequestSuccess(deliveryRequest) {
    return {type: types.CREATE_DRIVER_SUCCESS, deliveryRequest};
}

export function deleteDeliveryRequestSuccess(deliveryRequest) {
    return {type: types.DELETE_DRIVER_SUCCESS, deliveryRequest};
}

export function updateDeliveryRequestSuccess(deliveryRequest) {
    return {type: types.UPDATE_DRIVER_SUCCESS, deliveryRequest};
}

export function loadDeliveryRequests() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DeliveryRequestApi.getAllDeliveryRequests().then(deliveryRequests => {
            dispatch(loadDeliveryRequestSuccess(deliveryRequests));
        })

        .catch(error => {
            throw (error);
        });
    };
}

export function createDeliveryRequest(deliveryRequest) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DeliveryRequestApi.saveDeliveryRequest(deliveryRequest)
        .then(deliveryRequest => {
            dispatch(createDeliveryRequestSuccess(deliveryRequest));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function updateDeliveryRequest(deliveryRequest) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DeliveryRequestApi.saveDeliveryRequest(deliveryRequest)
        .then(author => {
            dispatch(updateDeliveryRequestSuccess(deliveryRequest));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function deleteDeliveryRequest(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DeliveryRequestApi.deleteDeliveryRequest(id)
        .then(deletedDeliveryRequest => {
            console.log('deliveryRequestActions deletedDeliveryRequest', deletedDeliveryRequest);
            dispatch(deleteDeliveryRequestSuccess(deletedDeliveryRequest));
        })
        .catch(error => {
            throw (error);
        });
    };
}
