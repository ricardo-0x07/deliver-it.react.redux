/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import * as types from './actionTypes';

export function beginAjaxCall() {
    return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
    return {type: types.AJAX_CALL_ERROR};
}
