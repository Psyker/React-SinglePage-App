import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import { hashHistory, Router, Route, Redirect } from 'react-router';
import Layout from './layout/layout';
import BlogPage from './pages/blog'
import PicturePage from './pages/picture'
import VideoPage from './pages/video'

const app = (
    <Router history={hashHistory}>
        <Redirect from="/" to="/blog"/>
        <Router path="/" component={Layout}>
            <Route  path="blog" component={BlogPage}/>
            <Route  path="picture" component={PicturePage}/>
            <Route  path="video" component={VideoPage}/>
        </Router>
    </Router>
);

jQuery(function() {
    ReactDOM.render(
        app,
        document.getElementById('comment-box')
    );
});
