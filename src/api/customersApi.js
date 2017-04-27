/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//This file is mocking a web API by hitting hard coded data.
var customers_1 = require("./data/customers");
var _ = require('lodash');
var delay_1 = require("./delay");
//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (customer) {
    return customer.firstName.toLowerCase() + '-' + customer.lastName.toLowerCase();
};
var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};
var CustomersApi = {
    getAllCustomers: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(Object.assign([], _clone(customers_1.customers)));
            }, delay_1.default);
        });
        // return _clone(customers);
    },
    getCustomerById: function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var customer = _.find(customers_1.customers, { id: id });
                return resolve(_clone(customer));
            }, delay_1.default);
        });
    },
    saveCustomer: function (customer) {
        return new Promise(function (resolve, reject) {
            //pretend an ajax call to web api is made here
            console.log('Pretend this just saved the customer to the DB via AJAX call...');
            setTimeout(function () {
                if (customer.id) {
                    var existingAuthorIndex = _.indexOf(customers_1.customers, _.find(customers_1.customers, { id: customer.id }));
                    customers_1.customers.splice(existingAuthorIndex, 1, customer);
                }
                else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    customer.id = _generateId(customer);
                    customers_1.customers.push(_clone(customer));
                }
                return resolve(customer);
            }, delay_1.default);
        });
    },
    deleteCustomer: function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Pretend this just deleted the customer from the DB via an AJAX call...');
                return resolve(_.remove(customers_1.customers, { id: id })[0]);
            }, delay_1.default);
        });
    }
};
exports.default = CustomersApi;

//# sourceMappingURL=customersApi.js.map
