/**
 * Created by outstudio on 16/5/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import MainSection from './modules/MainSection.jsx';


import {Component} from 'react'

class AppRouter extends Component {
    render() {

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute  component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/"} component={MainSection}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter