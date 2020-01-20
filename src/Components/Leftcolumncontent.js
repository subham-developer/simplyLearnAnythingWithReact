import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
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
import Singleview from './Singleview';
import Notfound from './Notfound';
import Rightcolumncontent from './Rightcolumncontent';
import axios from "axios";




export default class Leftcoulmncontent extends Component {
    constructor(props){
        super(props)
        console.log(`I am from LeftCorner${props.urlHistory}`)
        this.state = {
            urlNewNameSlug: '',
            viewFullArticle: false,
            title: '',
            description: '',
            content: ''
        }
    }
    onClickLink = (para) => {
        console.log(para);
        // this.setState({
        //     urlNewNameSlug: `${para}`,
        //     viewFullArticle: true,
        // });
        console.log('Hi Shubham');
        console.log(this.state.urlNewNameSlug);
        console.log(this.state.viewFullArticle);
        axios({
            method:'GET',
            url: `/api/View/${para}`,
            // data: {
            //     slug:  `${slug}`
            // }
        }).then(response => {
            // console.log(response)
            // console.log(response.data.gettingPosts.length)
            console.log(response.data.postViews[0].body)
            // if(response.data.gettingPosts.length != 0){
                this.setState({
                    urlNewNameSlug: `${para}`,
                    viewFullArticle: true,
                    title: `${response.data.postViews[0].title}`,
                    description: `${response.data.postViews[0].updated_at}`,
                    content: `${response.data.postViews[0].body}`,
                })
            // }else {
            //     console.log('empty')
            // }
        });
        // .catch(response => {
        //     console.log('I am Error Logs');
        // });
    }
    render() {
        if(! this.state.viewFullArticle){
            return (
                <Router>
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
                                            <span onClick={this.onClickLink.bind(this,`${content.slug}`)}>Read More</span>
                                            {/* <Link to={`/slug`}>Read More</Link> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Rightcolumncontent />
                        </Router>
                );
        }
        return (
            <Router>
                <div className="leftcolumn">
                    <Singleview title={`${this.state.title}`} description={`${this.state.description}`} content={`${this.state.content}`}/>
                    {/* <Rightcolumncontent /> */}
                </div>
                <Rightcolumncontent />
            </Router>
        );
                
    }
}









                