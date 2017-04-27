/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module document window */
/// <reference path="../../typings/index.d.ts"/>
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
// import {$, jQuery} from 'jquery';
// var React = require('react');
var React = require("react");
var header_1 = require("./common/header");
// let RouteHandler  = require('react-router').RouteHandler;
var react_redux_1 = require("react-redux");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        console.log('this.props', this.props);
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement(header_1.default, null),
            this.props.children));
    };
    return App;
}(React.Component));
App.propTypes = {
    children: React.PropTypes.object.isRequired,
    loading: React.PropTypes.bool.isRequired
};
// export default App;
function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(App);

//# sourceMappingURL=app.js.map
