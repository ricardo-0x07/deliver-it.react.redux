/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var driverActions = require("../../redux-actions/driverActions");
var driverForm_1 = require("./driverForm");
var toastr = require("toastr");
require('es6-object-assign').polyfill();
var ManageDriverPage = (function (_super) {
    __extends(ManageDriverPage, _super);
    function ManageDriverPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.updateDriver = function (driver) {
            _this.props.actions.updateDriver(_this.state.driver)
                .then(function () { return _this.redirect(); })
                .catch(function (error) {
                toastr.error(error);
                _this.setState({ saving: false });
                //   this.state.saving = false;
            });
        };
        _this.redirect = function () {
            _this.setState({ saving: false });
            // this.state.saving = false;
            toastr.success('Driver saved');
            console.log('this.context', _this.context);
            _this.context.router.history.push('/drivers');
        };
        _this.state = {
            driver: Object.assign({}, props.driver),
            errors: {},
            saving: false
        };
        _this.updateDriverState = _this.updateDriverState.bind(_this);
        _this.saveDriver = _this.saveDriver.bind(_this);
        console.log('this.props', _this.props);
        return _this;
    }
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.driver.id != nextProps.driver.id) {
    //     // Necessary to populate form when existing driver is loaded directly.
    //         this.setState({
    //             driver: Object.assign({}, nextProps.driver)
    //         });
    //     }
    // }
    ManageDriverPage.prototype.updateDriverState = function (event) {
        var field = event.target.name;
        var driver = this.state.driver;
        driver[field] = event.target.value;
        return this.setState({
            driver: driver
        });
    };
    ManageDriverPage.prototype.driverFormIsValid = function () {
        var formIsValid = true;
        var errors = {};
        if (this.state.driver.firstName.length < 5) {
            errors.firstName = 'First Name must be at least 5 characters.';
            formIsValid = false;
        }
        this.setState({ errors: errors });
        return formIsValid;
    };
    ManageDriverPage.prototype.saveDriver = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.driverFormIsValid()) {
            return;
        }
        this.setState({ saving: true });
        // this.state.saving = true;
        if (this.state.driver.id) {
            return this.updateDriver(this.state.driver);
        }
        return this.props.actions.createDriver(this.state.driver)
            .then(function () { return _this.redirect(); })
            .catch(function (error) {
            toastr.error(error);
            _this.setState({ saving: false });
            //   this.state.saving = false;
        });
    };
    ManageDriverPage.prototype.render = function () {
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        return (React.createElement("div", null,
            React.createElement(driverForm_1.default, { driver: this.state.driver, onSave: this.saveDriver, onChange: this.updateDriverState, saving: this.state.saving, errors: this.state.errors })));
    };
    return ManageDriverPage;
}(React.Component));
exports.ManageDriverPage = ManageDriverPage;
ManageDriverPage.propTypes = {
    driver: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
ManageDriverPage.contextTypes = {
    router: React.PropTypes.object
};
function getDriverById(drivers, id) {
    var driver = drivers.filter(function (driver) { return driver.id == id; });
    if (driver)
        return driver[0]; //since filter returns an array, have to grab the first.
    return null;
}
function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps state', state);
    console.log('mapStateToProps ownProps', ownProps);
    var driverId = ownProps.match.params.id; // from the path `/driver/:id`
    var driver = {};
    if (driverId && state.drivers.length > 0) {
        driver = getDriverById(state.drivers, driverId);
    }
    return {
        driver: driver,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(driverActions, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ManageDriverPage);

//# sourceMappingURL=ManageDriverForm.js.map
