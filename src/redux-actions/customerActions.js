/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customersApi_1 = require("../api/customersApi");
var types = require("./actionTypes");
var ajaxStatusActions_1 = require("./ajaxStatusActions");
function loadCustomerSuccess(customers) {
    return { type: types.LOAD_CUSTOMERS_SUCCESS, customers: customers };
}
exports.loadCustomerSuccess = loadCustomerSuccess;
function createCustomerSuccess(customer) {
    return { type: types.CREATE_CUSTOMER_SUCCESS, customer: customer };
}
exports.createCustomerSuccess = createCustomerSuccess;
function deleteCustomerSuccess(customer) {
    return { type: types.DELETE_CUSTOMER_SUCCESS, customer: customer };
}
exports.deleteCustomerSuccess = deleteCustomerSuccess;
function updateCustomerSuccess(customer) {
    return { type: types.UPDATE_CUSTOMER_SUCCESS, customer: customer };
}
exports.updateCustomerSuccess = updateCustomerSuccess;
function loadCustomers() {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return customersApi_1.default.getAllCustomers().then(function (customers) {
            dispatch(loadCustomerSuccess(customers));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.loadCustomers = loadCustomers;
function createCustomer(customer) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return customersApi_1.default.saveCustomer(customer)
            .then(function (customer) {
            dispatch(createCustomerSuccess(customer));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.createCustomer = createCustomer;
function updateCustomer(customer) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return customersApi_1.default.saveCustomer(customer)
            .then(function (author) {
            dispatch(updateCustomerSuccess(customer));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.updateCustomer = updateCustomer;
function deleteCustomer(id) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return customersApi_1.default.deleteCustomer(id)
            .then(function (deletedCustomer) {
            console.log('customerActions deletedCustomer', deletedCustomer);
            dispatch(deleteCustomerSuccess(deletedCustomer));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.deleteCustomer = deleteCustomer;

//# sourceMappingURL=customerActions.js.map
