/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorsFormattedForDropdown(authors) {
    return authors.map(function (author) {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}
exports.authorsFormattedForDropdown = authorsFormattedForDropdown;

//# sourceMappingURL=selectors.js.map
