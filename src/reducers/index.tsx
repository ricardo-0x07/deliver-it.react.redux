/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import {combineReducers} from 'redux';
import customers from './customerReducer';
import drivers from './driverReducer';
import deliveryRequests from './deliveryRequestReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    deliveryRequests,
    drivers,
    customers,
    ajaxCallsInProgress,
    router: routerReducer
});

export default rootReducer;
