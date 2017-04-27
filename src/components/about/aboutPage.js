/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var About = (function (_super) {
    __extends(About, _super);
    function About(prop) {
        return _super.call(this) || this;
    }
    About.prototype.render = function () {
        return (React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, "About"),
            React.createElement("p", null, "This application uses the following technologies:"),
            React.createElement("ul", null,
                React.createElement("li", null, "React"),
                React.createElement("li", null, "React Router"),
                React.createElement("li", null, "Flux"),
                React.createElement("li", null, "Node"),
                React.createElement("li", null, "Gulp"),
                React.createElement("li", null, "Browserify"),
                React.createElement("li", null, "Bootstrap"))));
    };
    return About;
}(React.Component));
exports.default = About;

//# sourceMappingURL=aboutPage.js.map
