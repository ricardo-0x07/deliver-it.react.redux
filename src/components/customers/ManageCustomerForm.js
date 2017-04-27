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
var customerForm_1 = require("./customerForm");
var toastr = require("toastr");
require('es6-object-assign').polyfill();
var ManageCustomerPage = (function (_super) {
    __extends(ManageCustomerPage, _super);
    function ManageCustomerPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.updateCustomer = function (customer) {
            _this.props.actions.updateCustomer(_this.state.customer)
                .then(function () { return _this.redirect(); })
                .catch(function (error) {
                toastr.error(error);
                _this.setState({ saving: false });
                //   this.state.saving = false;
            });
        };
        _this.redirect = function () {
            _this.setState({ saving: false });
            // this.state.saving = false;
            toastr.success('Customer saved');
            console.log('this.context', _this.context);
            _this.context.router.history.push('/customers');
        };
        _this.state = {
            customer: Object.assign({}, props.customer),
            errors: {},
            saving: false
        };
        _this.updateCustomerState = _this.updateCustomerState.bind(_this);
        _this.saveCustomer = _this.saveCustomer.bind(_this);
        console.log('this.props', _this.props);
        return _this;
    }
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.customer.id != nextProps.customer.id) {
    //     // Necessary to populate form when existing customer is loaded directly.
    //         this.setState({
    //             customer: Object.assign({}, nextProps.customer)
    //         });
    //     }
    // }
    ManageCustomerPage.prototype.updateCustomerState = function (event) {
        var field = event.target.name;
        var customer = this.state.customer;
        customer[field] = event.target.value;
        return this.setState({
            customer: customer
        });
    };
    ManageCustomerPage.prototype.customerFormIsValid = function () {
        var formIsValid = true;
        var errors = {};
        if (this.state.customer.firstName.length < 5) {
            errors.firstName = 'First Name must be at least 5 characters.';
            formIsValid = false;
        }
        this.setState({ errors: errors });
        return formIsValid;
    };
    ManageCustomerPage.prototype.saveCustomer = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.customerFormIsValid()) {
            return;
        }
        this.setState({ saving: true });
        // this.state.saving = true;
        if (this.state.customer.id) {
            return this.updateCustomer(this.state.customer);
        }
        return this.props.actions.createCustomer(this.state.customer)
            .then(function () { return _this.redirect(); })
            .catch(function (error) {
            toastr.error(error);
            _this.setState({ saving: false });
            //   this.state.saving = false;
        });
    };
    ManageCustomerPage.prototype.render = function () {
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        return (React.createElement("div", null,
            React.createElement(customerForm_1.default, { customer: this.state.customer, onSave: this.saveCustomer, onChange: this.updateCustomerState, saving: this.state.saving, errors: this.state.errors })));
    };
    return ManageCustomerPage;
}(React.Component));
exports.ManageCustomerPage = ManageCustomerPage;
ManageCustomerPage.propTypes = {
    customer: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
ManageCustomerPage.contextTypes = {
    router: React.PropTypes.object
};
function getCustomerById(customers, id) {
    var customer = customers.filter(function (customer) { return customer.id == id; });
    if (customer)
        return customer[0]; //since filter returns an array, have to grab the first.
    return null;
}
function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    var customerId = ownProps.match.params.id; // from the path `/customer/:id`
    var customer = {};
    if (customerId && state.customers.length > 0) {
        customer = getCustomerById(state.customers, customerId);
    }
    return {
        customer: customer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(customerActions, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);

//# sourceMappingURL=ManageCustomerForm.js.map
