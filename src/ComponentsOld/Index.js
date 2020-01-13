import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Sidebar from './Sidebar';
import Blog from './Blog';

class Index extends Component{
    render(){
        return(
            <div>
                {/* <Header /> */}
                {/* <MainFeaturedPost /> */}
                {/* <FeaturedPost /> */}
                <Blog />
                {/* <Sidebar /> */}

                {/* <Footer /> */}
            </div>
        );
    }
}

export default Index;