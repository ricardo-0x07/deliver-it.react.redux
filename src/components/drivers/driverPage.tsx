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
import * as driverActions from '../../redux-actions/driverActions';
import DriverList from './driverList';
import {browserHistory} from 'react-router';
import toastr = require('toastr');

interface MyProps {
    drivers: any,
    actions: any
}
interface MyState {
    drivers: any,
}

class DriversPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddDriverPage = this.redirectToAddDriverPage.bind(this);
        console.log('constructor this.props', this.props);
    }

    redirectToAddDriverPage() {
        this.context.router.history.push('/driver');
    }

    deleteDriver = (id) => {
        console.log('deleteDriver this.props', this.props);
        console.log('DriversPage deleteDriver id', id);
        // event.preventDefault();
        this.props.actions.deleteDriver(id);
        toastr.success('driver Deleted');
    }

    render() {
        console.log('render this.props', this.props);
        const {drivers} = this.props;
        return (
            <div>
                <h1>Drivers</h1>
                <input type="submit"
                    value="New Driver"
                    className="btn btn-primary"
                    onClick={this.redirectToAddDriverPage}/>
                <DriverList 
                    drivers={drivers}
                    onDeleteDriver={this.deleteDriver} />
            </div>
        );
    }
}

DriversPage.propTypes = {
    drivers: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    return {
        drivers: state.drivers
    };
}

//Pull in the React Router context so router is available on this.context.router.
DriversPage.contextTypes = {
    router: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    console.log('driverActions', driverActions);
    return {
        actions: bindActionCreators(driverActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversPage);
