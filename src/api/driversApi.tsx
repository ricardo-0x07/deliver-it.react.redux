/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

//This file is mocking a web API by hitting hard coded data.
import {drivers} from './data/drivers';
var _ = require('lodash');
import delay from './delay';

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (driver) {
	return driver.firstName.toLowerCase() + '-' + driver.lastName.toLowerCase();
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var DriversApi = {
	getAllDrivers: function () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], _clone(drivers)));
			}, delay);
		});
		// return _clone(drivers);
	},

	getDriverById: function (id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				var driver = _.find(drivers, { id: id });
				return resolve(_clone(driver));
			}, delay);
		});
	},

	saveDriver: function (driver) {
		return new Promise((resolve, reject) => {
			//pretend an ajax call to web api is made here
			console.log('Pretend this just saved the driver to the DB via AJAX call...');

			setTimeout(() => {
				if (driver.id) {
					var existingAuthorIndex = _.indexOf(drivers, _.find(drivers, { id: driver.id }));
					drivers.splice(existingAuthorIndex, 1, driver);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new authors in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					driver.id = _generateId(driver);
					drivers.push(_clone(driver));
				}

				return resolve(driver);
			}, delay);
		});
	},

	deleteDriver: function (id) {
		return new Promise((resolve, reject) => {
		   setTimeout(() => {
               console.log('Pretend this just deleted the driver from the DB via an AJAX call...');
			   return resolve(_.remove(drivers, { id: id })[0]);
		   }, delay);
		});
	}
};

export default DriversApi;