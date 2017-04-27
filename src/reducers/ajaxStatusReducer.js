/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../redux-actions/actionTypes");
var initialState_1 = require("./initialState");
function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}
function ajaxStatusReducer(state, action) {
    if (state === void 0) { state = initialState_1.default.ajaxCallsInProgress; }
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}
exports.default = ajaxStatusReducer;

//# sourceMappingURL=ajaxStatusReducer.js.map
