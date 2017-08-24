import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import "../../css/entry/modules/mainPage.css"


var MainPage =React.createClass({


    render:function () {
        var contains=null;
            contains=
                <div >
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
                                        <img src="images/templatemo_logo.png"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /*第三部分*/}
                    <div id="search">
                        <div className="pei-caption">
                            <p>
                                <Link className="btn btn-lg btn-orange" style={{marginRight: '50px',marginBottom: '15px', textDecoration: 'none'}}
                                      to={window.App.getAppRoute()+"/login?language=Spanish"}>
                                    ESPAÑOL
                                </Link>
                                <Link className="btn btn-lg btn-orange" style={{marginRight: '50px',marginBottom: '15px', textDecoration: 'none'}}
                                      to={window.App.getAppRoute()+"/login?language=Chinese"}>
                                    中文
                                </Link>
                            </p>
                        </div>
                    </div>
                    { /*第四部分*/}
                    <div className="templatemo-welcome" id="templatemo-welcome">
                        <div className="container">
                            <div className="templatemo-slogan " style={{textAlign: 'center'}}>
                                <span className="txt_darkgrey">BIENVENIDO A </span>
                                <span className="txt_orange">SUPNUEVO</span>
                            <p className="txt_slogan" style={{textAlign: 'center'}}>
                                <i>Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados</i>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            return contains;
        },
    componentWillMount:function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#fff";
        })
    },
})
module.exports=MainPage;