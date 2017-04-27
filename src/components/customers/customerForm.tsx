/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";

import * as React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import EmailInput from '../common/EmailInput';

const CustomerForm = ({customer, onSave, onChange, saving, errors}) => {
    console.log('customer', customer);
    return (
        <form>
            <h1>Manage Customer</h1>
            <TextInput
                name="firstName"
                label="First Name"
                value={customer.firstName}
                placeholder="John"
                onChange={onChange}
                error={errors.firstName} />


            <TextInput
                name="lastName"
                label="Last Name"
                value={customer.lastName}
                placeholder="Crane"
                onChange={onChange}
                error={errors.lastName} />

            <EmailInput
                name="email"
                label="Email"
                value={customer.email}
                placeholder="John.Crane@Email.com"
                onChange={onChange}
                error={errors.email} />

            <TextInput
                name="address1"
                label="Address Line 1"
                value={customer.address1}
                placeholder="Crane"
                onChange={onChange}
                error={errors.address1} />

            <TextInput
                name="address2"
                label="Address Line 2"
                value={customer.address2}
                placeholder="Crane"
                onChange={onChange}
                error={errors.address2} />

            <TextInput
                name="city"
                label="City"
                value={customer.city}
                placeholder="Crane"
                onChange={onChange}
                error={errors.city} />

            <TextInput
                name="state"
                label="State"
                value={customer.state}
                placeholder="Crane"
                onChange={onChange}
                error={errors.state} />

            <TextInput
                name="zip"
                label="Zip"
                value={customer.zip}
                placeholder="Crane"
                onChange={onChange}
                error={errors.zip} />

            <TextInput
                name="phone"
                label="Phone"
                value={customer.phone}
                placeholder="Crane"
                onChange={onChange}
                error={errors.phone} />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

CustomerForm.propTypes = {
    customer: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CustomerForm;
