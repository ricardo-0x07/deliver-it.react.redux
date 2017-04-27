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
import CustomerForm from './customerForm';
import toastr = require('toastr');
import {authorsFormattedForDropdown} from '../../selectors/selectors';
require('es6-object-assign').polyfill();
interface DispatchProps {
    onClick1: Function,

}


interface MyProps {
    customer: any,
    actions: any
}
interface MyState {
    customer?: any,
    errors?: any,
    saving?: boolean
}

export class ManageCustomerPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            customer: Object.assign({}, props.customer),
            errors: {},
            saving: false
        };
        this.updateCustomerState = this.updateCustomerState.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        console.log('this.props', this.props);
    }
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.customer.id != nextProps.customer.id) {
    //     // Necessary to populate form when existing customer is loaded directly.
    //         this.setState({
    //             customer: Object.assign({}, nextProps.customer)
    //         });
    //     }
    // }

    updateCustomerState(event) {
        const field = event.target.name;
        let customer = this.state.customer;
        customer[field] = event.target.value;
        return this.setState({
            customer: customer
        });
    }

    customerFormIsValid() {
        let formIsValid = true;
        let errors: any = {};

        if(this.state.customer.firstName.length < 5) {
            errors.firstName = 'First Name must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    saveCustomer(event) {
        event.preventDefault();

        if(!this.customerFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        // this.state.saving = true;
        if(this.state.customer.id) {
            return this.updateCustomer(this.state.customer);
        }

        return this.props.actions.createCustomer(this.state.customer)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
        //   this.state.saving = false;
        });
    }
    
    updateCustomer = (customer) => {
        this.props.actions.updateCustomer(this.state.customer)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
        //   this.state.saving = false;
        });       
    }
    redirect = () => {
        this.setState({saving: false});
        // this.state.saving = false;
        toastr.success('Customer saved');
        console.log('this.context', this.context);
        this.context.router.history.push('/customers');
    }

    render() {
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        return (
            <div>
                <CustomerForm
                    customer={this.state.customer}
                    onSave={this.saveCustomer}
                    onChange={this.updateCustomerState}
                    saving={this.state.saving}
                    errors={this.state.errors} />
            </div>
        );
    }
}

ManageCustomerPage.propTypes = {
    customer: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCustomerPage.contextTypes = {
    router: React.PropTypes.object
};

function getCustomerById(customers, id) {
    const customer = customers.filter(customer => customer.id == id);
    if(customer) return customer[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    const customerId = ownProps.match.params.id; // from the path `/customer/:id`

    let customer = {};

    if(customerId && state.customers.length > 0) {
        customer = getCustomerById(state.customers, customerId);
    }

    return {
        customer: customer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
