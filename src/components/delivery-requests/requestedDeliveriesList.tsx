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
    deliveryRequests: [any];
    onDeleteDeliveryRequest;
}
interface MyState {}
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import toastr = require('toastr');

class DeliveryRequestList extends React.Component<MyProps, {}> {
    deleteDeliveryRequest(id, event) {
        console.log('DeliveryRequestList deleteDeliveryRequest id', id);
        event.preventDefault();
       this.props.onDeleteDeliveryRequest(id);
    }
    render() {
        var createDeliveryRequestRow = function(deliveryRequest) {
            console.log('deliveryRequest', deliveryRequest);
            return (
                <tr key={deliveryRequest.id}>
                    <td><Link to={"/deliveryRequest/" + deliveryRequest.id} >{deliveryRequest.firstName} {deliveryRequest.lastName}</Link></td>
                    <td>{deliveryRequest.email}</td>
                    <td>{deliveryRequest.address1} {deliveryRequest.address2}</td>
                    <td>{deliveryRequest.phone}</td>
                    <td>{deliveryRequest.recycle_type}</td>
                    <td>{deliveryRequest.bin_type}</td>
                    <td>{deliveryRequest.status}</td>
                    <td>{deliveryRequest.scheduled}</td>
					<td><a href="#" onClick={this.deleteDeliveryRequest.bind(this, deliveryRequest.id)}>Delete</a></td>
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
                            <th>Phone</th>
                            <th>Recycle Type</th>
                            <th>Bin Request Type</th>
                            <th>Status</th>
                            <th>Scheduled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.deliveryRequests.map(createDeliveryRequestRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

DeliveryRequestList.propTypes = {
    onDeleteDeliveryRequest: React.PropTypes.func.isRequired,
    deliveryRequests: React.PropTypes.array.isRequired
}

export default DeliveryRequestList;