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
var CustomerList = (function (_super) {
    __extends(CustomerList, _super);
    function CustomerList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerList.prototype.deleteCustomer = function (id, event) {
        console.log('CustomerList deleteCustomer id', id);
        event.preventDefault();
        this.props.onDeleteCustomer(id);
    };
    CustomerList.prototype.render = function () {
        var createCustomerRow = function (customer) {
            console.log('customer', customer);
            return (React.createElement("tr", { key: customer.id },
                React.createElement("td", null,
                    React.createElement(react_router_dom_1.Link, { to: "/customer/" + customer.id },
                        customer.firstName,
                        " ",
                        customer.lastName)),
                React.createElement("td", null, customer.email),
                React.createElement("td", null,
                    customer.address1,
                    " ",
                    customer.address2),
                React.createElement("td", null, customer.city),
                React.createElement("td", null, customer.state),
                React.createElement("td", null, customer.zip),
                React.createElement("td", null, customer.phone),
                React.createElement("td", null,
                    "US$ ",
                    customer.balance),
                React.createElement("td", null,
                    React.createElement("a", { href: "#", onClick: this.deleteCustomer.bind(this, customer.id) }, "Delete"))));
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
                        React.createElement("th", null, "Phone"),
                        React.createElement("th", null, "Balance"))),
                React.createElement("tbody", null, this.props.customers.map(createCustomerRow, this)))));
    };
    return CustomerList;
}(React.Component));
CustomerList.propTypes = {
    onDeleteCustomer: React.PropTypes.func.isRequired,
    customers: React.PropTypes.array.isRequired
};
exports.default = CustomerList;

//# sourceMappingURL=customerList.js.map
