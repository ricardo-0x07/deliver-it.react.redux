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
var DriverForm = function (_a) {
    var driver = _a.driver, onSave = _a.onSave, onChange = _a.onChange, saving = _a.saving, errors = _a.errors;
    console.log('driver', driver);
    return (React.createElement("form", null,
        React.createElement("h1", null, "Manage Driver"),
        React.createElement(TextInput_1.default, { name: "firstName", label: "First Name", value: driver.firstName, placeholder: "John", onChange: onChange, error: errors.firstName }),
        React.createElement(TextInput_1.default, { name: "lastName", label: "Last Name", value: driver.lastName, placeholder: "Crane", onChange: onChange, error: errors.lastName }),
        React.createElement(EmailInput_1.default, { name: "email", label: "Email", value: driver.email, placeholder: "John.Crane@Email.com", onChange: onChange, error: errors.email }),
        React.createElement(TextInput_1.default, { name: "address1", label: "Address Line 1", value: driver.address1, placeholder: "Crane", onChange: onChange, error: errors.address1 }),
        React.createElement(TextInput_1.default, { name: "address2", label: "Address Line 2", value: driver.address2, placeholder: "Crane", onChange: onChange, error: errors.address2 }),
        React.createElement(TextInput_1.default, { name: "city", label: "City", value: driver.city, placeholder: "Crane", onChange: onChange, error: errors.city }),
        React.createElement(TextInput_1.default, { name: "state", label: "State", value: driver.state, placeholder: "Crane", onChange: onChange, error: errors.state }),
        React.createElement(TextInput_1.default, { name: "zip", label: "Zip", value: driver.zip, placeholder: "Crane", onChange: onChange, error: errors.zip }),
        React.createElement(TextInput_1.default, { name: "phone", label: "Phone", value: driver.phone, placeholder: "Crane", onChange: onChange, error: errors.phone }),
        React.createElement("input", { type: "submit", disabled: saving, value: saving ? 'Saving...' : 'Save', className: "btn btn-primary", onClick: onSave })));
};
DriverForm.propTypes = {
    driver: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};
exports.default = DriverForm;

//# sourceMappingURL=driverForm.js.map
