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
var react_router_dom_1 = require("react-router-dom");
var DriverList = (function (_super) {
    __extends(DriverList, _super);
    function DriverList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DriverList.prototype.deleteDriver = function (id, event) {
        console.log('DriverList deleteDriver id', id);
        event.preventDefault();
        this.props.onDeleteDriver(id);
    };
    DriverList.prototype.render = function () {
        var createDriverRow = function (driver) {
            console.log('driver', driver);
            return (React.createElement("tr", { key: driver.id },
                React.createElement("td", null,
                    React.createElement(react_router_dom_1.Link, { to: "/driver/" + driver.id },
                        driver.firstName,
                        " ",
                        driver.lastName)),
                React.createElement("td", null, driver.email),
                React.createElement("td", null,
                    driver.address1,
                    " ",
                    driver.address2),
                React.createElement("td", null, driver.city),
                React.createElement("td", null, driver.state),
                React.createElement("td", null, driver.zip),
                React.createElement("td", null, driver.phone),
                React.createElement("td", null,
                    React.createElement("a", { href: "#", onClick: this.deleteDriver.bind(this, driver.id) }, "Delete"))));
        };
        return (React.createElement("div", null,
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Email"),
                        React.createElement("th", null, "Address"),
                        React.createElement("th", null, "City"),
                        React.createElement("th", null, "State"),
                        React.createElement("th", null, "Zip"),
                        React.createElement("th", null, "Phone"))),
                React.createElement("tbody", null, this.props.drivers.map(createDriverRow, this)))));
    };
    return DriverList;
}(React.Component));
DriverList.propTypes = {
    onDeleteDriver: React.PropTypes.func.isRequired,
    drivers: React.PropTypes.array.isRequired
};
exports.default = DriverList;

//# sourceMappingURL=driverList.js.map
