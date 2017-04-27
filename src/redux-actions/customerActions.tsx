/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import CustomerApi from '../api/customersApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCustomerSuccess(customers) {
    return {type: types.LOAD_CUSTOMERS_SUCCESS, customers};
}

export function createCustomerSuccess(customer) {
    return {type: types.CREATE_CUSTOMER_SUCCESS, customer};
}

export function deleteCustomerSuccess(customer) {
    return {type: types.DELETE_CUSTOMER_SUCCESS, customer};
}

export function updateCustomerSuccess(customer) {
    return {type: types.UPDATE_CUSTOMER_SUCCESS, customer};
}

export function loadCustomers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return CustomerApi.getAllCustomers().then(customers => {
            dispatch(loadCustomerSuccess(customers));
        })

        .catch(error => {
            throw (error);
        });
    };
}

export function createCustomer(customer) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return CustomerApi.saveCustomer(customer)
        .then(customer => {
            dispatch(createCustomerSuccess(customer));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function updateCustomer(customer) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return CustomerApi.saveCustomer(customer)
        .then(author => {
            dispatch(updateCustomerSuccess(customer));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function deleteCustomer(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return CustomerApi.deleteCustomer(id)
        .then(deletedCustomer => {
            console.log('customerActions deletedCustomer', deletedCustomer);
            dispatch(deleteCustomerSuccess(deletedCustomer));
        })
        .catch(error => {
            throw (error);
        });
    };
}
