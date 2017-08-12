import React from 'react';
import {render} from 'react-dom';

import "../../css/entry/modules/mainPage.css"


var MainPage =React.createClass({


    test:function (num) {
    },

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
                            <p><a className="btn btn-lg btn-orange" href="EspanolLogin" role="button" style={{marginRight: '50px',marginBottom: '15px', textDecoration: 'none'}}>ESPAÑOL</a>
                                <a className="btn btn-lg btn-orange" href="ChineseLogin" role="button" style={{marginLeft: '50px',marginBottom: '15px', textDecoration: 'none'}}>>中文</a></p>
                        </div>
                    </div>
                    { /*第四部分*/}
                    <div className="templatemo-welcome" id="templatemo-welcome">
                        <div className="container">
                            <div className="templatemo-slogan " style={{textAlign: 'center'}}>
                                <br> </br>
                                <span className="txt_darkgrey">BIENVENIDO A </span>
                                <span className="txt_orange">SUPNUEVO</span>
                            </div>
                            <p className="txt_slogan" style={{textAlign: 'center'}}>
                                <i>Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados</i></p>
                        </div>
                    </div>
                </div>
            return contains;
        },

})
module.exports=MainPage;