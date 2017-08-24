import React from 'react';
import {render} from 'react-dom';

import Header from '../modules/Header'
import Foot from '../modules/Foot'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Agreement from './Agreement'
import Func from './Func'

var MainSection = React.createClass({
    //获取url中的参数
    getUrlParam :function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        // var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        var r = window.location.href.substr(window.location.href.indexOf('?')+1).match(reg);
        if (r != null) return unescape(r[2]); return null; //返回参数值
    },
    getInitialState: function () {
        var route = new Array();
        var language = this.getUrlParam("language")
        if(language!=null){
            language=language.substr(0,7);
        }
        route.push(undefined);
        return ({route: route,language:language});
    },

    render:function(){
        var path=this.props.route.path;
        var ctrl;
        var contains=null;
        if(path!==undefined&&path!==null)
        {
            var route = this.state.route;
            if (route.length != 1)
                route.splice(0, 1);
            route.push(path);
            switch(path)
            {
                case window.App.getAppRoute()+'/login':
                    ctrl = <Login language={this.state.language}/>
                   break;
                case window.App.getAppRoute()+'/register':
                    ctrl = <Register language={this.state.language}/>
                    break;
                case window.App.getAppRoute()+'/agreement':
                    ctrl = <Agreement/>
                    break;
                case window.App.getAppRoute()+'/news':
                    ctrl = <Func pageType={'new'}/>
                    break;
                case window.App.getAppRoute()+'/downloads':
                    ctrl = <Func pageType={'download'}/>
                    break;
                case window.App.getAppRoute()+'/problem':
                    ctrl = <Func pageType={'problem'}/>
                    break;
                default:
                    break;
            }


        }
        contains =

            <div>
                <Header language={this.state.language} path={this.props.route.path}/>
                {ctrl}
                <Foot language={this.state.language}/>
            </div>


        //remove breadcrumb by zyy,yeah i am so native

        return contains;

    },
});
module.exports = MainSection;