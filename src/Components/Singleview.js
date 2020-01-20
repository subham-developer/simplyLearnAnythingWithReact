import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import parse from 'html-react-parser';
import ReadMoreAndLess from 'react-read-more-less';
import Fullarticle from './Fullarticle';
import ReadMoreReact from 'read-more-react';
import '../css/readMore.css';
// import Interweave from 'interweave';
import { Markup } from 'interweave';
import ShowMoreText from 'react-show-more-text';
import ReactMarkdown from 'react-markdown';
import { renderToStaticMarkup } from 'react-dom/server';
// import parse from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import Rightcolumncontent from './Rightcolumncontent';





export default class Singleview extends Component {
    constructor(props){
        super(props)
        console.log(`I am from LeftCorner${props}`)
    }
    render() {
        return (
                <Router>
                    {/* <div className="card"> */}
                    {/* <h2></h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg" style={{height:"200px"}}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
                    <div className="card">
                        <h2>{this.props.title}</h2>
                        <h5>{this.props.description}</h5>
                        <div className="fakeimg" style={{height:"200px"}}>Image</div>
                        {/* <p>{this.props.content}</p> */}
                        <p><ReactMarkdown source={this.props.content} escapeHtml={false} /></p>
                    </div>
                    {/* </div> */} 
                </Router>
        );
    }
}









                