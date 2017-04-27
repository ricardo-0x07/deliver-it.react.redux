/* global $ jQuery require console module */
/*jshint strict:false */
/* eslint camelcase: ["error", {properties: "never"}]*/
/*jshint browserify: true */
/* eslint-disable no-unused-vars*/
/* eslint-disable */
/// <reference path="../../../typings/index.d.ts"/>
"use strict";
import * as React from "react";
interface MyProps {}
interface MyState {}

class About extends React.Component<{}, {}> {
    constructor(prop) {
      super();
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>This application uses the following technologies:</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
}

export default About;