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
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var customerActions = require("../../redux-actions/customerActions");
var customerList_1 = require("./customerList");
var toastr = require("toastr");
var CustomersPage = (function (_super) {
    __extends(CustomersPage, _super);
    function CustomersPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.deleteCustomer = function (id) {
            console.log('deleteCustomer this.props', _this.props);
            console.log('CustomersPage deleteCustomer id', id);
            // event.preventDefault();
            _this.props.actions.deleteCustomer(id);
            toastr.success('customer Deleted');
        };
        _this.redirectToAddCustomerPage = _this.redirectToAddCustomerPage.bind(_this);
        console.log('constructor this.props', _this.props);
        return _this;
    }
    CustomersPage.prototype.redirectToAddCustomerPage = function () {
        this.context.router.history.push('/customer');
    };
    CustomersPage.prototype.render = function () {
        console.log('render this.props', this.props);
        var customers = this.props.customers;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Customers"),
            React.createElement("input", { type: "submit", value: "New Customer", className: "btn btn-primary", onClick: this.redirectToAddCustomerPage }),
            React.createElement(customerList_1.default, { customers: customers, onDeleteCustomer: this.deleteCustomer })));
    };
    return CustomersPage;
}(React.Component));
CustomersPage.propTypes = {
    customers: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    return {
        customers: state.customers
    };
}
//Pull in the React Router context so router is available on this.context.router.
CustomersPage.contextTypes = {
    router: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    console.log('customerActions', customerActions);
    return {
        actions: redux_1.bindActionCreators(customerActions, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CustomersPage);

//# sourceMappingURL=customerPage.js.map
