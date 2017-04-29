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
import DeliveryRequestForm from './deliveryRequestForm';
import toastr = require('toastr');
import {authorsFormattedForDropdown} from '../../selectors/selectors';
require('es6-object-assign').polyfill();
interface DispatchProps {
    onClick1: Function,

}


interface MyProps {
    deliveryRequest: any,
    actions: any
}
interface MyState {
    deliveryRequest?: any,
    errors?: any,
    saving?: boolean
}
export class ManageDeliveryRequestPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            deliveryRequest: Object.assign({}, props.deliveryRequest),
            errors: {},
            saving: false
        };
        this.updateDeliveryRequestState = this.updateDeliveryRequestState.bind(this);
        this.saveDeliveryRequest = this.saveDeliveryRequest.bind(this);
        console.log('this.props', this.props);
    }
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.deliveryRequest.id != nextProps.deliveryRequest.id) {
    //     // Necessary to populate form when existing deliveryRequest is loaded directly.
    //         this.setState({
    //             deliveryRequest: Object.assign({}, nextProps.deliveryRequest)
    //         });
    //     }
    // }

    updateDeliveryRequestState(event) {
        const field = event.target.name;
        let deliveryRequest = this.state.deliveryRequest;
        deliveryRequest[field] = event.target.value;
        return this.setState({
            deliveryRequest: deliveryRequest
        });
    }

    deliveryRequestFormIsValid() {
        let formIsValid = true;
        let errors: any = {};

        if(this.state.deliveryRequest.firstName.length < 5) {
            errors.firstName = 'First Name must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    saveDeliveryRequest(event) {
        event.preventDefault();

        if(!this.deliveryRequestFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        // this.state.saving = true;
        if(this.state.deliveryRequest.id) {
            return this.updateDeliveryRequest(this.state.deliveryRequest);
        }

        return this.props.actions.createDeliveryRequest(this.state.deliveryRequest)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
        //   this.state.saving = false;
        });
    }
    
    updateDeliveryRequest = (deliveryRequest) => {
        this.props.actions.updateDeliveryRequest(this.state.deliveryRequest)
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
        toastr.success('DeliveryRequest saved');
        console.log('this.context', this.context);
        this.context.router.history.push('/deliveryRequests');
    }

    render() {
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        return (
            <div>
                <DeliveryRequestForm
                    deliveryRequest={this.state.deliveryRequest}
                    onSave={this.saveDeliveryRequest}
                    onChange={this.updateDeliveryRequestState}
                    saving={this.state.saving}
                    errors={this.state.errors} />
            </div>
        );
    }
}

ManageDeliveryRequestPage.propTypes = {
    deliveryRequest: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageDeliveryRequestPage.contextTypes = {
    router: React.PropTypes.object
};

function getDeliveryRequestById(deliveryRequests, id) {
    const deliveryRequest = deliveryRequests.filter(deliveryRequest => deliveryRequest.id == id);
    if(deliveryRequest) return deliveryRequest[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    const deliveryRequestId = ownProps.match.params.id; // from the path `/deliveryRequest/:id`

    let deliveryRequest = {};

    if(deliveryRequestId && state.deliveryRequests.length > 0) {
        deliveryRequest = getDeliveryRequestById(state.deliveryRequests, deliveryRequestId);
    }

    return {
        deliveryRequest: deliveryRequest,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deliveryRequestActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDeliveryRequestPage);
