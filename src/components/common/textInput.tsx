/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";

import * as React from "react";

const Input = ({name, label, onChange, placeholder, value, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0) {
        wrapperClass += ' has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value} />
                <div className="input">{error}</div>
            </div>
        </div>
    );
};

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
};

export default Input;