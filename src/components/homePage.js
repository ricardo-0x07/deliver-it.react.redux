/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
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
var react_router_dom_1 = require("react-router-dom");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super.call(this) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, "DeliverIt Administration"),
            React.createElement("p", null, "React, React Router, and Redux for ultra-responsive web apps."),
            React.createElement(react_router_dom_1.Link, { to: "about", className: " btn btn-primary" }, "Learn more...")));
    };
    return Home;
}(React.Component));
exports.default = Home;

//# sourceMappingURL=homePage.js.map
