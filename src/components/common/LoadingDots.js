/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LoadingDots = (function (_super) {
    __extends(LoadingDots, _super);
    function LoadingDots(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = { frame: 1 };
        return _this;
    }
    LoadingDots.prototype.componentDidMount = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.setState({
                frame: _this.state.frame + 1
            });
        }, this.props.interval);
    };
    LoadingDots.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    LoadingDots.prototype.render = function () {
        var dots = this.state.frame % (this.props.dots + 1);
        var text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return React.createElement("span", __assign({}, this.props),
            text,
            "\u00A0");
    };
    return LoadingDots;
}(React.Component));
LoadingDots.defaultProps = {
    interval: 300, dots: 3
};
LoadingDots.propTypes = {
    interval: React.PropTypes.number,
    dots: React.PropTypes.number
};
exports.default = LoadingDots;

//# sourceMappingURL=LoadingDots.js.map
