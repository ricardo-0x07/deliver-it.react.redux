/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
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
var react_router_dom_1 = require("react-router-dom");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super.call(this) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("nav", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", className: "navbar-brand" },
                    React.createElement("img", { src: "images/pluralsight-logo.png" })),
                React.createElement("ul", { className: "nav navbar-nav" },
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/customers" }, "Customers")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/drivers" }, "Drivers")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/about" }, "About"))))));
    };
    return Header;
}(React.Component));
exports.default = Header;

//# sourceMappingURL=header.js.map
