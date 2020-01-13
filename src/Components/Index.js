import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Ckeditor from './Ckeditor';
import { BrowserRouter as Router, Redirect, useHistory, Link, Route, Switch } from 'react-router-dom';


export default class Index extends Component {
    render() {
        return (
            <div>
                <Header /> 
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
