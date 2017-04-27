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
var drivers_1 = require("./data/drivers");
var _ = require('lodash');
var delay_1 = require("./delay");
//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (driver) {
    return driver.firstName.toLowerCase() + '-' + driver.lastName.toLowerCase();
};
var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};
var DriversApi = {
    getAllDrivers: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(Object.assign([], _clone(drivers_1.drivers)));
            }, delay_1.default);
        });
        // return _clone(drivers);
    },
    getDriverById: function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var driver = _.find(drivers_1.drivers, { id: id });
                return resolve(_clone(driver));
            }, delay_1.default);
        });
    },
    saveDriver: function (driver) {
        return new Promise(function (resolve, reject) {
            //pretend an ajax call to web api is made here
            console.log('Pretend this just saved the driver to the DB via AJAX call...');
            setTimeout(function () {
                if (driver.id) {
                    var existingAuthorIndex = _.indexOf(drivers_1.drivers, _.find(drivers_1.drivers, { id: driver.id }));
                    drivers_1.drivers.splice(existingAuthorIndex, 1, driver);
                }
                else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    driver.id = _generateId(driver);
                    drivers_1.drivers.push(_clone(driver));
                }
                return resolve(driver);
            }, delay_1.default);
        });
    },
    deleteDriver: function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Pretend this just deleted the driver from the DB via an AJAX call...');
                return resolve(_.remove(drivers_1.drivers, { id: id })[0]);
            }, delay_1.default);
        });
    }
};
exports.default = DriversApi;

//# sourceMappingURL=driversApi.js.map
