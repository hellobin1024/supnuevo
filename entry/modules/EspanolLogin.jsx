import React from 'react';
import {render} from 'react-dom';

import "../../css/entry/modules/espanolLogin.css"


var EspanolLogin = React.createClass({

    render: function () {
        var contains = null;
        contains =
            <div>

                <body bgcolor="e6e0d0"  >

                <div id="header">
                    <div id="logo">
                        <div id="help">

                            <span id="about" style={{cursor:'pointer'}} className="btn-black">ACERCA DE NOSOTROS </span>
                        </div>
                    </div>
                    <div className="clear"> </div>
                </div>

                <input type="hidden" id="error" value="${systemPrompt}" />
                <div id="loginform" action="" method="post">
                    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                        <tr>
                            <td>

                                <table width="100%" height="144" border="0" cellPadding="0" cellSpacing="0">
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td valign="top">
                                            <table width="750" border="0" align="center" cellPadding="0"
                                                   cellSpacing="0">
                                                <tr>
                                                    <td height="445" valign="bottom" id="loginbj1">
                                                        <table width="100%" height="144" border="0" cellPadding="0" cellSpacing="0">
                                                        <tr>
                                                            <td width="110" height="300">&nbsp;</td>
                                                            <td width="260" valign="top">
                                                                <table width="100%" border="0" cellSpacing="0" cellPadding="0"  style={{lineHeight:'30px'}}>
                                                                    <tr>
                                                                        <td height="30" colSpan="3">
                                                                        </td>
                                                                        <td width="13%" rowSpan="8">
                                                                            <a href="#"> </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="7%" height="13"> </td>
                                                                        <td width="30%"><div className="txt2c">USUARIO:</div>
                                                                        </td>
                                                                        <td width="57%" valign="middle">
                                                                            <input type="text" id="userName" name="userName" size="23" className="input1"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="9" colSpan="3"> </td>
                                                                        <td width="13%" rowSpan="8"> <a href="#"> </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        </td>
                                                                        <td><div className="txt2c">CONTRASEÑA:</div>
                                                                        </td>
                                                                        <td>
                                                                            <input type="password" id="password" name="password" size="23" className="input1" onKeyDown="keyLogin();"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        </td>
                                                                        <td align="right" >
                                                                            <input type="checkbox" name="login_autoLoginCheckbox" value = '1' id="ALIASCHECK" size="23" />
                                                                        </td>
                                                                        <td align="left" >
                                                                            <div className="txt2c">GUARDAR PASSWORD</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td rowSpan="4"> </td>
                                                                        <td colSpan="2" valign="bottom">
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td height="10">&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td width="35%"> </td>
                                                                                    <td width="40%" height="11" bgcolor="7d7f86" className="txt3c" onMouseOver="this.bgColor='#640000'" onMouseOut="this.bgColor='#7d7f86'">
                                                                                        <a href="#" onClick="takeUser()" style={{display: 'block'}}>INGRESAR</a>
                                                                                    </td>
                                                                                    <td width="25%"> </td>
                                                                                </tr>
                                                                            </table>
                                                                            <table border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td height="5">&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td width="35%"> </td>
                                                                                    <td width="40%" height="11" bgcolor="7d7f86" className="txt3c" onMouseOver="this.bgColor='#640000'" onMouseOut="this.bgColor='#7d7f86'"><a href="" onClick="resUser()" style={{display: 'block'}}>REGISTRARSE</a>
                                                                                    </td>
                                                                                    <td width="25%"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table></td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </table>

                </td>
                </tr>
            </table>
    </div>
        <div className="end">Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados &nbsp;&nbsp; E-MAIL del soporte : info@supnuevo.com.ar </div>
    </body>
            </div>

        return contains;
    },
})
module.exports=EspanolLogin;