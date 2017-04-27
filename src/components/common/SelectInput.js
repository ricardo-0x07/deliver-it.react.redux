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
var SelectInput = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, defaultOption = _a.defaultOption, value = _a.value, error = _a.error, options = _a.options;
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field" },
            React.createElement("select", { name: name, value: value, onChange: onChange, className: "form-control" },
                React.createElement("option", { value: "" }, defaultOption),
                options.map(function (option) {
                    return React.createElement("option", { key: option.value, value: option.value }, option.text);
                })),
            error && React.createElement("div", { className: "alert alert-danger" }, error))));
};
SelectInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    defaultOption: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string,
    options: React.PropTypes.arrayOf(React.PropTypes.object)
};
exports.default = SelectInput;

//# sourceMappingURL=SelectInput.js.map
