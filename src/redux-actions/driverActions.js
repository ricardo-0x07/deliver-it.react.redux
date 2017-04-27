/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driversApi_1 = require("../api/driversApi");
var types = require("./actionTypes");
var ajaxStatusActions_1 = require("./ajaxStatusActions");
function loadDriverSuccess(drivers) {
    return { type: types.LOAD_DRIVERS_SUCCESS, drivers: drivers };
}
exports.loadDriverSuccess = loadDriverSuccess;
function createDriverSuccess(driver) {
    return { type: types.CREATE_DRIVER_SUCCESS, driver: driver };
}
exports.createDriverSuccess = createDriverSuccess;
function deleteDriverSuccess(driver) {
    return { type: types.DELETE_DRIVER_SUCCESS, driver: driver };
}
exports.deleteDriverSuccess = deleteDriverSuccess;
function updateDriverSuccess(driver) {
    return { type: types.UPDATE_DRIVER_SUCCESS, driver: driver };
}
exports.updateDriverSuccess = updateDriverSuccess;
function loadDrivers() {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return driversApi_1.default.getAllDrivers().then(function (drivers) {
            dispatch(loadDriverSuccess(drivers));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.loadDrivers = loadDrivers;
function createDriver(driver) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return driversApi_1.default.saveDriver(driver)
            .then(function (driver) {
            dispatch(createDriverSuccess(driver));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.createDriver = createDriver;
function updateDriver(driver) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return driversApi_1.default.saveDriver(driver)
            .then(function (author) {
            dispatch(updateDriverSuccess(driver));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.updateDriver = updateDriver;
function deleteDriver(id) {
    return function (dispatch) {
        dispatch(ajaxStatusActions_1.beginAjaxCall());
        return driversApi_1.default.deleteDriver(id)
            .then(function (deletedDriver) {
            console.log('driverActions deletedDriver', deletedDriver);
            dispatch(deleteDriverSuccess(deletedDriver));
        })
            .catch(function (error) {
            throw (error);
        });
    };
}
exports.deleteDriver = deleteDriver;

//# sourceMappingURL=driverActions.js.map
