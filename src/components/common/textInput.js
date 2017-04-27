/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Input = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, placeholder = _a.placeholder, value = _a.value, error = _a.error;
    var wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }
    return (React.createElement("div", { className: wrapperClass },
        React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field" },
            React.createElement("input", { type: "text", name: name, className: "form-control", placeholder: placeholder, onChange: onChange, value: value }),
            React.createElement("div", { className: "input" }, error))));
};
Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
};
exports.default = Input;

//# sourceMappingURL=textInput.js.map
