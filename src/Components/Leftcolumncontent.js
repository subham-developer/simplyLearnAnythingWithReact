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

export default class Leftcoulmncontent extends Component {
    constructor(props){
        super(props)
        console.log(`I am from LeftCorner${props.urlHistory}`)
    }
    render() {
        return (
            <div className="leftcolumn">
                {/* <div className="card"> */}
                {/* <h2></h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="fakeimg" style={{height:"200px"}}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
                {
                    this.props.contents.map(content => {
                        const bodyPara = <Markup content={content.body}/> 
                        console.log(bodyPara)
                        return (
                            
                            <div className="card">
                                <h2>{content.title}</h2>
                                <h5>Title description{content.updated_at}</h5>
                                {/* <div className="fakeimg" style={{height:"200px"}}>Image</div> */}
                                {/* <p>{(content.body).textContent}</p> */}
                                {/* <Markup content={content.body}/> */}
                                
                                <ReactMarkdown source={content.body} escapeHtml={false} />
                                {/* <ReactMarkdown source={content.body} escapeHtml={false} /> */}
                                {/* <ReadMoreAndLess
                                    ref={this.ReadMore}
                                    className="read-more-content"
                                    charLimit={50}
                                    readMoreText="Read more"
                                    readLessText="Read less"
                                >
                                    <ReactMarkdown source={content.body} escapeHtml={false} />
                                    {parse(content.body,
                                            {
                                                replace: ({ attribs, children }) => {
                                                if (!attribs) return;

                                                if (attribs.id === 'main') {
                                                    return (
                                                    <h1 style={{ fontSize: 42 }}>
                                                        {domToReact(children, parserOptions)}
                                                    </h1>
                                                    );
                                                } else if (attribs.class === 'prettify') {
                                                    return (
                                                    <span style={{ color: 'hotpink' }}>
                                                        {domToReact(children, parserOptions)}
                                                    </span>
                                                    );
                                                }
                                                }
                                            }
                                            )}
                                </ReadMoreAndLess> */}
                            </div>
                        )
                    })
                }
                {/* </div> */} 
            </div>
           
        );
    }
}









                