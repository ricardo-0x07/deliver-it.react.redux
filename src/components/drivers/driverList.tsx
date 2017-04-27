/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";

import * as React from "react";
interface MyProps {
    drivers: [any];
    onDeleteDriver;
}
interface MyState {}
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import toastr = require('toastr');

class DriverList extends React.Component<MyProps, {}> {
    deleteDriver(id, event) {
        console.log('DriverList deleteDriver id', id);
        event.preventDefault();
       this.props.onDeleteDriver(id);
    }
    render() {
        var createDriverRow = function(driver) {
            console.log('driver', driver);
            return (
                <tr key={driver.id}>
                    <td><Link to={"/driver/" + driver.id} >{driver.firstName} {driver.lastName}</Link></td>
                    <td>{driver.email}</td>
                    <td>{driver.address1} {driver.address2}</td>
                    <td>{driver.city}</td>
                    <td>{driver.state}</td>
                    <td>{driver.zip}</td>
                    <td>{driver.phone}</td>
					<td><a href="#" onClick={this.deleteDriver.bind(this, driver.id)}>Delete</a></td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.drivers.map(createDriverRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

DriverList.propTypes = {
    onDeleteDriver: React.PropTypes.func.isRequired,
    drivers: React.PropTypes.array.isRequired
}

export default DriverList;