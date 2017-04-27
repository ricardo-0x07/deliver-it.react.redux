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
var driverList_1 = require("./driverList");
var toastr = require("toastr");
var DriversPage = (function (_super) {
    __extends(DriversPage, _super);
    function DriversPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.deleteDriver = function (id) {
            console.log('deleteDriver this.props', _this.props);
            console.log('DriversPage deleteDriver id', id);
            // event.preventDefault();
            _this.props.actions.deleteDriver(id);
            toastr.success('driver Deleted');
        };
        _this.redirectToAddDriverPage = _this.redirectToAddDriverPage.bind(_this);
        console.log('constructor this.props', _this.props);
        return _this;
    }
    DriversPage.prototype.redirectToAddDriverPage = function () {
        this.context.router.history.push('/driver');
    };
    DriversPage.prototype.render = function () {
        console.log('render this.props', this.props);
        var drivers = this.props.drivers;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Drivers"),
            React.createElement("input", { type: "submit", value: "New Driver", className: "btn btn-primary", onClick: this.redirectToAddDriverPage }),
            React.createElement(driverList_1.default, { drivers: drivers, onDeleteDriver: this.deleteDriver })));
    };
    return DriversPage;
}(React.Component));
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
        actions: redux_1.bindActionCreators(driverActions, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DriversPage);

//# sourceMappingURL=driverPage.js.map
