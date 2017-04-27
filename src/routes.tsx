/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../typings/index.d.ts"/>
"use strict";

import * as React from "react";
import Home from './components/homePage';
import App from './components/app';
import About from './components/about/aboutPage';
import Header from './components/common/header';
import Customers from './components/customers/customerPage';
import ManageCustomerForm from './components/customers/ManageCustomerForm';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default  (
    <Route path="/" component={App}>
      <Route exact path="/" component={Home} />
      <Route path="/customers" component={Customers} />
      <Route exact path="/customer" component={ManageCustomerForm} />
      <Route path="/customer/:id" component={ManageCustomerForm} />
      <Route path="/about" component={About} />
    </Route>
);
