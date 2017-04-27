/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("./actionTypes");
function beginAjaxCall() {
    return { type: types.BEGIN_AJAX_CALL };
}
exports.beginAjaxCall = beginAjaxCall;
function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}
exports.ajaxCallError = ajaxCallError;

//# sourceMappingURL=ajaxStatusActions.js.map
