import React from 'react';
import { Button } from 'react-bootstrap';
import About from './About';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
// import PageNotFound from '../components/Images/PageNotFound.jpg';
export default class Notfound extends React.Component{
    render(){
        return(
          <Router>
            <div>
            {/* <img src={PageNotFound} wodth="50%" height="80%" /> */}
            <p style={{textAlign:"center"}}>
              <Link to="/"><Button className="btn btn-danger">Go to Home</Button></Link>
            </p>
          </div>
          <switch>
            {/* <Route exact path="/" Component={About}></Route> */}
          </switch>
          </Router>
        );
    }
}