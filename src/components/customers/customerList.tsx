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
    customers: [any];
    onDeleteCustomer;
}
interface MyState {}
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import toastr = require('toastr');

class CustomerList extends React.Component<MyProps, {}> {
    deleteCustomer(id, event) {
        console.log('CustomerList deleteCustomer id', id);
        event.preventDefault();
       this.props.onDeleteCustomer(id);
    }
    render() {
        var createCustomerRow = function(customer) {
            console.log('customer', customer);
            return (
                <tr key={customer.id}>
                    <td><Link to={"/customer/" + customer.id} >{customer.firstName} {customer.lastName}</Link></td>
                    <td>{customer.email}</td>
                    <td>{customer.address1} {customer.address2}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>{customer.zip}</td>
                    <td>{customer.phone}</td>
                    <td>US$ {customer.balance}</td>
					<td><a href="#" onClick={this.deleteCustomer.bind(this, customer.id)}>Delete</a></td>
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
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map(createCustomerRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

CustomerList.propTypes = {
    onDeleteCustomer: React.PropTypes.func.isRequired,
    customers: React.PropTypes.array.isRequired
}

export default CustomerList;