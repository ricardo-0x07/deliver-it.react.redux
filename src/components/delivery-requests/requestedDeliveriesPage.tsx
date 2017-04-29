/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deliveryRequestActions from '../../redux-actions/deliveryRequestActions';
import DeliveryRequestList from './deliveryRequestList';
import {browserHistory} from 'react-router';
import toastr = require('toastr');

interface MyProps {
    deliveryRequests: any,
    actions: any
}
interface MyState {
    deliveryRequests: any,
}

class DeliveryRequestsPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddDeliveryRequestPage = this.redirectToAddDeliveryRequestPage.bind(this);
        console.log('constructor this.props', this.props);
    }

    redirectToAddDeliveryRequestPage() {
        this.context.router.history.push('/deliveryRequest');
    }

    deleteDeliveryRequest = (id) => {
        console.log('deleteDeliveryRequest this.props', this.props);
        console.log('DeliveryRequestsPage deleteDeliveryRequest id', id);
        // event.preventDefault();
        this.props.actions.deleteDeliveryRequest(id);
        toastr.success('deliveryRequest Deleted');
    }

    render() {
        console.log('render this.props', this.props);
        const {deliveryRequests} = this.props;
        return (
            <div>
                <h1>DeliveryRequests</h1>
                <input type="submit"
                    value="New DeliveryRequest"
                    className="btn btn-primary"
                    onClick={this.redirectToAddDeliveryRequestPage}/>
                <DeliveryRequestList 
                    deliveryRequests={deliveryRequests}
                    onDeleteDeliveryRequest={this.deleteDeliveryRequest} />
            </div>
        );
    }
}

DeliveryRequestsPage.propTypes = {
    deliveryRequests: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    return {
        deliveryRequests: state.deliveryRequests
    };
}

//Pull in the React Router context so router is available on this.context.router.
DeliveryRequestsPage.contextTypes = {
    router: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    console.log('deliveryRequestActions', deliveryRequestActions);
    return {
        actions: bindActionCreators(deliveryRequestActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryRequestsPage);
