/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TextInput_1 = require("../common/TextInput");
var EmailInput_1 = require("../common/EmailInput");
var CustomerForm = function (_a) {
    var customer = _a.customer, onSave = _a.onSave, onChange = _a.onChange, saving = _a.saving, errors = _a.errors;
    console.log('customer', customer);
    return (React.createElement("form", null,
        React.createElement("h1", null, "Manage Customer"),
        React.createElement(TextInput_1.default, { name: "firstName", label: "First Name", value: customer.firstName, placeholder: "John", onChange: onChange, error: errors.firstName }),
        React.createElement(TextInput_1.default, { name: "lastName", label: "Last Name", value: customer.lastName, placeholder: "Crane", onChange: onChange, error: errors.lastName }),
        React.createElement(EmailInput_1.default, { name: "email", label: "Email", value: customer.email, placeholder: "John.Crane@Email.com", onChange: onChange, error: errors.email }),
        React.createElement(TextInput_1.default, { name: "address1", label: "Address Line 1", value: customer.address1, placeholder: "Crane", onChange: onChange, error: errors.address1 }),
        React.createElement(TextInput_1.default, { name: "address2", label: "Address Line 2", value: customer.address2, placeholder: "Crane", onChange: onChange, error: errors.address2 }),
        React.createElement(TextInput_1.default, { name: "city", label: "City", value: customer.city, placeholder: "Crane", onChange: onChange, error: errors.city }),
        React.createElement(TextInput_1.default, { name: "state", label: "State", value: customer.state, placeholder: "Crane", onChange: onChange, error: errors.state }),
        React.createElement(TextInput_1.default, { name: "zip", label: "Zip", value: customer.zip, placeholder: "Crane", onChange: onChange, error: errors.zip }),
        React.createElement(TextInput_1.default, { name: "phone", label: "Phone", value: customer.phone, placeholder: "Crane", onChange: onChange, error: errors.phone }),
        React.createElement("input", { type: "submit", disabled: saving, value: saving ? 'Saving...' : 'Save', className: "btn btn-primary", onClick: onSave })));
};
CustomerForm.propTypes = {
    customer: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};
exports.default = CustomerForm;

//# sourceMappingURL=customerForm.js.map
