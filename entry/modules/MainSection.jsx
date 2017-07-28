import React from 'react';
import {render} from 'react-dom';

import Main from '../modules/MainPage'
import ChineseLogin from  "../modules/ChineseLogin"

var MainSection = React.createClass({
    iframeLoad:function(evt)
    {
        var target=evt.target;
        //$("#mainFrame").context.documentElement.scrollHeight
        var height=null;
        height=target.contentDocument.body.scrollHeight;
        target.height=height;
        //height=document.body.scrollHeight;
    },
    getInitialState: function () {
        var route = new Array();
        route.push(undefined);
        return ({route: route});
    },

    render:function(){
        var path=this.props.route.path;
        var ctrl;
        var breadcrumb;
        var label;
        var data=this.props.route.data;
        var contains=null;
        if(path!==undefined&&path!==null)
        {
            var route = this.state.route;
            if (route.length != 1)
                route.splice(0, 1);
            route.push(path);
            switch(path)
            {
                case "chineselogin":
                    ctrl = <ChineseLogin/>
                    break;
                default:
                    break;
            }


        }else{
            ctrl = <Main/>
            path = '/main'
        }
        contains =

            <div>
                {ctrl}
            </div>


        //remove breadcrumb by zyy,yeah i am so native

        return contains;

    },
});
module.exports = MainSection;