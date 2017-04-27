/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import DriverApi from '../api/driversApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadDriverSuccess(drivers) {
    return {type: types.LOAD_DRIVERS_SUCCESS, drivers};
}

export function createDriverSuccess(driver) {
    return {type: types.CREATE_DRIVER_SUCCESS, driver};
}

export function deleteDriverSuccess(driver) {
    return {type: types.DELETE_DRIVER_SUCCESS, driver};
}

export function updateDriverSuccess(driver) {
    return {type: types.UPDATE_DRIVER_SUCCESS, driver};
}

export function loadDrivers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DriverApi.getAllDrivers().then(drivers => {
            dispatch(loadDriverSuccess(drivers));
        })

        .catch(error => {
            throw (error);
        });
    };
}

export function createDriver(driver) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DriverApi.saveDriver(driver)
        .then(driver => {
            dispatch(createDriverSuccess(driver));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function updateDriver(driver) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DriverApi.saveDriver(driver)
        .then(author => {
            dispatch(updateDriverSuccess(driver));
        })
        .catch(error => {
            throw (error);
        });
    };
}

export function deleteDriver(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return DriverApi.deleteDriver(id)
        .then(deletedDriver => {
            console.log('driverActions deletedDriver', deletedDriver);
            dispatch(deleteDriverSuccess(deletedDriver));
        })
        .catch(error => {
            throw (error);
        });
    };
}
