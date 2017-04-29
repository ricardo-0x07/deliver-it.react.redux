/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

//This file is mocking a web API by hitting hard coded data.
import {deliveryRequests} from './data/requests';
var _ = require('lodash');
import delay from './delay';

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (deliveryRequest) {
	return deliveryRequest.firstName.toLowerCase() + '-' + deliveryRequest.lastName.toLowerCase();
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var DeliveryRequestsApi = {
	getAllDeliveryRequests: function () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], _clone(deliveryRequests)));
			}, delay);
		});
		// return _clone(deliveryRequests);
	},

	getDeliveryRequestById: function (id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				var deliveryRequest = _.find(deliveryRequests, { id: id });
				return resolve(_clone(deliveryRequest));
			}, delay);
		});
	},

	saveDeliveryRequest: function (deliveryRequest) {
		return new Promise((resolve, reject) => {
			//pretend an ajax call to web api is made here
			console.log('Pretend this just saved the deliveryRequest to the DB via AJAX call...');

			setTimeout(() => {
				if (deliveryRequest.id) {
					var existingAuthorIndex = _.indexOf(deliveryRequests, _.find(deliveryRequests, { id: deliveryRequest.id }));
					deliveryRequests.splice(existingAuthorIndex, 1, deliveryRequest);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new authors in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					deliveryRequest.id = _generateId(deliveryRequest);
					deliveryRequests.push(_clone(deliveryRequest));
				}

				return resolve(deliveryRequest);
			}, delay);
		});
	},

	deleteDeliveryRequest: function (id) {
		return new Promise((resolve, reject) => {
		   setTimeout(() => {
               console.log('Pretend this just deleted the deliveryRequest from the DB via an AJAX call...');
			   return resolve(_.remove(deliveryRequests, { id: id })[0]);
		   }, delay);
		});
	}
};

export default DeliveryRequestsApi;