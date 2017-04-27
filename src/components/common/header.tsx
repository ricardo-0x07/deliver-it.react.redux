/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/* global $ jQuery require console module */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";

import * as React from "react";
import {Link, NavLink} from 'react-router-dom'

interface MyProps {}
interface MyState {}

class Header extends React.Component<{}, {}> {
    constructor() {
      super();
    }
    render() {
        return (
            <nav>
                <div className="container-fluid">
                    <NavLink exact to="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" />
                    </NavLink>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/customers">Customers</NavLink></li>
                        <li><NavLink to="/drivers">Drivers</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;