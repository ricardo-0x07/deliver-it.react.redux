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
import DriverForm from './driverForm';
import toastr = require('toastr');
import {authorsFormattedForDropdown} from '../../selectors/selectors';
require('es6-object-assign').polyfill();
interface DispatchProps {
    onClick1: Function,

}


interface MyProps {
    driver: any,
    actions: any
}
interface MyState {
    driver?: any,
    errors?: any,
    saving?: boolean
}
export class ManageDriverPage extends React.Component<MyProps, MyState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            driver: Object.assign({}, props.driver),
            errors: {},
            saving: false
        };
        this.updateDriverState = this.updateDriverState.bind(this);
        this.saveDriver = this.saveDriver.bind(this);
        console.log('this.props', this.props);
    }
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.driver.id != nextProps.driver.id) {
    //     // Necessary to populate form when existing driver is loaded directly.
    //         this.setState({
    //             driver: Object.assign({}, nextProps.driver)
    //         });
    //     }
    // }

    updateDriverState(event) {
        const field = event.target.name;
        let driver = this.state.driver;
        driver[field] = event.target.value;
        return this.setState({
            driver: driver
        });
    }

    driverFormIsValid() {
        let formIsValid = true;
        let errors: any = {};

        if(this.state.driver.firstName.length < 5) {
            errors.firstName = 'First Name must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    saveDriver(event) {
        event.preventDefault();

        if(!this.driverFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        // this.state.saving = true;
        if(this.state.driver.id) {
            return this.updateDriver(this.state.driver);
        }

        return this.props.actions.createDriver(this.state.driver)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
        //   this.state.saving = false;
        });
    }
    
    updateDriver = (driver) => {
        this.props.actions.updateDriver(this.state.driver)
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
        toastr.success('Driver saved');
        console.log('this.context', this.context);
        this.context.router.history.push('/drivers');
    }

    render() {
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        return (
            <div>
                <DriverForm
                    driver={this.state.driver}
                    onSave={this.saveDriver}
                    onChange={this.updateDriverState}
                    saving={this.state.saving}
                    errors={this.state.errors} />
            </div>
        );
    }
}

ManageDriverPage.propTypes = {
    driver: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageDriverPage.contextTypes = {
    router: React.PropTypes.object
};

function getDriverById(drivers, id) {
    const driver = drivers.filter(driver => driver.id == id);
    if(driver) return driver[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    const driverId = ownProps.match.params.id; // from the path `/driver/:id`

    let driver = {};

    if(driverId && state.drivers.length > 0) {
        driver = getDriverById(state.drivers, driverId);
    }

    return {
        driver: driver,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(driverActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDriverPage);
