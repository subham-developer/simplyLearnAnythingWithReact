import React, { Component } from 'react';
import Aboutme from './Aboutme';
import Leftcolumncontent from './Leftcolumncontent';
import Rightcolumncontent from './Rightcolumncontent';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="leftcolumn">
                    <Aboutme />
                </div>
                <Rightcolumncontent />
            </div>
        );
    }
}

