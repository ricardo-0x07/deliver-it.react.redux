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
import * as customerActions from '../../redux-actions/customerActions';
import CustomerList from './customerList';
import {browserHistory} from 'react-router';
import toastr = require('toastr');

interface MyProps {
    customers: any,
    actions: any
}
interface MyState {
    customers: any,
}

class CustomersPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCustomerPage = this.redirectToAddCustomerPage.bind(this);
        console.log('constructor this.props', this.props);
    }

    redirectToAddCustomerPage() {
        this.context.router.history.push('/customer');
    }

    deleteCustomer = (id) => {
        console.log('deleteCustomer this.props', this.props);
        console.log('CustomersPage deleteCustomer id', id);
        // event.preventDefault();
        this.props.actions.deleteCustomer(id);
        toastr.success('customer Deleted');
    }

    render() {
        console.log('render this.props', this.props);
        const {customers} = this.props;
        return (
            <div>
                <h1>Customers</h1>
                <input type="submit"
                    value="New Customer"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCustomerPage}/>
                <CustomerList 
                    customers={customers}
                    onDeleteCustomer={this.deleteCustomer} />
            </div>
        );
    }
}

CustomersPage.propTypes = {
    customers: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    return {
        customers: state.customers
    };
}

//Pull in the React Router context so router is available on this.context.router.
CustomersPage.contextTypes = {
    router: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    console.log('customerActions', customerActions);
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);
