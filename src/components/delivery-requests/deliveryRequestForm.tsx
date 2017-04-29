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

const DeliveryRequestForm = ({deliveryRequest, onSave, onChange, saving, errors}) => {
    console.log('deliveryRequest', deliveryRequest);
    return (
        <form>
            <h1>Manage DeliveryRequest</h1>
            <TextInput
                name="firstName"
                label="First Name"
                value={deliveryRequest.firstName}
                placeholder="John"
                onChange={onChange}
                error={errors.firstName} />


            <TextInput
                name="lastName"
                label="Last Name"
                value={deliveryRequest.lastName}
                placeholder="Crane"
                onChange={onChange}
                error={errors.lastName} />

            <EmailInput
                name="email"
                label="Email"
                value={deliveryRequest.email}
                placeholder="John.Crane@Email.com"
                onChange={onChange}
                error={errors.email} />

            <TextInput
                name="address1"
                label="Address Line 1"
                value={deliveryRequest.address1}
                placeholder="Crane"
                onChange={onChange}
                error={errors.address1} />

            <TextInput
                name="address2"
                label="Address Line 2"
                value={deliveryRequest.address2}
                placeholder="Crane"
                onChange={onChange}
                error={errors.address2} />

            <TextInput
                name="city"
                label="City"
                value={deliveryRequest.city}
                placeholder="Crane"
                onChange={onChange}
                error={errors.city} />

            <TextInput
                name="state"
                label="State"
                value={deliveryRequest.state}
                placeholder="Crane"
                onChange={onChange}
                error={errors.state} />

            <TextInput
                name="zip"
                label="Zip"
                value={deliveryRequest.zip}
                placeholder="Crane"
                onChange={onChange}
                error={errors.zip} />

            <TextInput
                name="phone"
                label="Phone"
                value={deliveryRequest.phone}
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

DeliveryRequestForm.propTypes = {
    deliveryRequest: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default DeliveryRequestForm;
