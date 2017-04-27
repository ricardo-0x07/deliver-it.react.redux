/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

//This file is mocking a web API by hitting hard coded data.
import {customers} from './data/customers';
var _ = require('lodash');
import delay from './delay';

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (customer) {
	return customer.firstName.toLowerCase() + '-' + customer.lastName.toLowerCase();
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CustomersApi = {
	getAllCustomers: function () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], _clone(customers)));
			}, delay);
		});
		// return _clone(customers);
	},

	getCustomerById: function (id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				var customer = _.find(customers, { id: id });
				return resolve(_clone(customer));
			}, delay);
		});
	},

	saveCustomer: function (customer) {
		return new Promise((resolve, reject) => {
			//pretend an ajax call to web api is made here
			console.log('Pretend this just saved the customer to the DB via AJAX call...');

			setTimeout(() => {
				if (customer.id) {
					var existingAuthorIndex = _.indexOf(customers, _.find(customers, { id: customer.id }));
					customers.splice(existingAuthorIndex, 1, customer);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new authors in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					customer.id = _generateId(customer);
					customers.push(_clone(customer));
				}

				return resolve(customer);
			}, delay);
		});
	},

	deleteCustomer: function (id) {
		return new Promise((resolve, reject) => {
		   setTimeout(() => {
               console.log('Pretend this just deleted the customer from the DB via an AJAX call...');
			   return resolve(_.remove(customers, { id: id })[0]);
		   }, delay);
		});
	}
};

export default CustomersApi;