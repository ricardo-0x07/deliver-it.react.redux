/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../typings/index.d.ts"/>
"use strict";
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

interface MyProps {}
interface MyState {}
class Home extends React.Component<{}, {}> {
    constructor() {
      super();
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>DeliverIt Administration</h1>
                <p>React, React Router, and Redux for ultra-responsive web apps.</p>
                <Link to="about" className=" btn btn-primary">Learn more...</Link>
            </div>
        );
    }
}

export default Home;