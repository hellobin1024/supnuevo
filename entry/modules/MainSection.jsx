import React from 'react';
import {render} from 'react-dom';

var config=require('../../config.json');
import '../../css/entry/modules/mainSection.css';
import Heard from '../modules/Heard'
import Foot from '../modules/Foot'
import Main from '../modules/MainPage'

import Login from '../modules/Login';
import '../../build/css/JFFormStyle-1.css'
import '../../build/css/jquery-ui.css'
import '../../build/css/style.css'
import '../../css/entry/MainSection.css'
import '../../css/entry/Bootstrap.css'
var SyncActions = require('../../components/flux/actions/SyncActions');


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

                default:
                    break;
            }


        }else{
            ctrl = <Main/>
            path = '/main'
        }
        contains =

            <div>
                { /*第一部分*/}
                <div className="templatemo-top-bar" id="templatemo-top">
                    <div className="container" >
                        <div className="subheader">
                            <div id="phone" className="pull-left">
                                <img src="images/phone.png"  alt="phone" />
                                011-4857-0183
                            </div>
                            <div id="email" className="pull-right">
                                <img src="images/email.png" alt="email" />
                                info@supnuevo.com.ar
                            </div>
                        </div>
                    </div>
                </div>
                { /*第二部分*/}
                <div className="templatemo-top-menu">
                    <div className="container-logo">
                        <div className="navbar navbar-default" role="navigation">
                            <div className="container">
                                <div className="navbar-header">
                                    <img src="images/templatemo_logo.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*第三部分*/}
                <div id="search">
                    <div className="pei-caption">
                        <p><a className="btn btn-lg btn-orange" href="" role="button" style={{marginRight: '50px',marginBottom: '15px', textDecoration: 'none'}}>ESPAÑOL</a>
                            <a className="btn btn-lg btn-orange" href="" role="button" style={{marginLeft: '50px',marginBottom: '15px', textDecoration: 'none'}}>>中文</a></p>
                       </div>
                </div>
                { /*第四部分*/}
                <div className="templatemo-welcome" id="templatemo-welcome">
                    <div className="container">
                        <div className="templatemo-slogan " style={{textAlign: 'center'}}>
                            <span className="txt_darkgrey">BIENVENIDO A </span>
                            <span className="txt_orange">SUPNUEVO</span>
                        </div>
                        <p className="txt_slogan" style={{textAlign: 'center'}}>
                            <i>Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados</i></p>
                    </div>
                </div>


            </div>


        //remove breadcrumb by zyy,yeah i am so native

        return contains;

    },
    componentDidMount: function() {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["mainSection"]).slideDown(300);
        $('.marquee').marquee({ pauseOnHover: true });
    },
    componentWillUnmount: function() {
        //TODO:emit change
        $(this.refs["mainSection"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});
module.exports = MainSection;