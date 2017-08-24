/**
 * Created by outstudio on 16/5/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import MainSection from './modules/MainSection.jsx';
import MainPage from './modules/MainPage'


import {Component} from 'react'

class AppRouter extends Component {
    render() {

        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute  component={MainPage}/>
                    <Route path={window.App.getAppRoute() + "/"} component={MainPage}/>
                    <Route path={window.App.getAppRoute() + "/login"} component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/register"} component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/agreement"} component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/news"} component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/downloads"} component={MainSection}/>
                    <Route path={window.App.getAppRoute() + "/problem"} component={MainSection}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter