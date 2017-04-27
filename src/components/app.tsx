/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module document window */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
// import {$, jQuery} from 'jquery';
// var React = require('react');
import * as React from "react";
import Header from './common/header';
import Home from './homePage';
import About from './about/aboutPage';
import Customers from './customers/customerPage';
import ManageCustomerForm from './customers/ManageCustomerForm';
import {Route} from 'react-router-dom'
// let RouteHandler  = require('react-router').RouteHandler;
import { connect } from 'react-redux';

class App extends React.Component<{}, {}> {

    render() {
        console.log('this.props', this.props);
        return (
            <div className="container-fluid">
                <Header />
                { this.props.children }
            </div>
        );
    }
}

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

export default connect(mapStateToProps)(App);
