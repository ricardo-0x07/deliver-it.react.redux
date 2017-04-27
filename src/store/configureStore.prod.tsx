/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
