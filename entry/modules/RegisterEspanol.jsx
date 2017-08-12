import React from 'react';
import {render} from 'react-dom';
import "../../css/entry/modules/register.css"


var RegisterEspanol = React.createClass({

    render: function () {
        var contains = null;
        contains =
            <div>
                <div id="header">
                    <div id="logo"><img src="images/logo.png"/> </div>
                    <div id="help"> <a className="btn-black"  href="MainPage">PAGINA DE INICIO </a> | <a className="btn-black" href="EspanolLogin">INGRESAR </a></div>
                    <div className="clear1"> </div>
                </div>


                <div id="register">
                    <input type="hidden" id="error" value="${systemPrompt}" />
                    <form action="" method="post"  id="formasdf" onSubmit="return check();"
                          onKeyPress="if(event.keyCode==13||event.which==13){return false;}">

                        <div id="first_step">
                            <h1>Bienvenido a Supnuevo. FAVOR DE REGISTRARSE</h1>
                            <input type="hidden" id="merchantType" name="merchantType" value="1"/>
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <tr>
                                    <td className="info" align='right'>TIPO DE USUARIO: &nbsp;</td>
                                    <td>
                                        <select name="userType" id="userType" className="input-text"  onChange="justWe()">
                                            <option value="1">COMPRADOR</option>
                                            <option value="2">VENDEDOR</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'>APODO:&nbsp;</td>
                                    <td>
                                        <input type="text" name="nickName" id="nickName" className="input-text" />
                                        <span id="nickNameMsg" className="errorMessage"> </span></td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'>E-MAIL:  &nbsp;</td>
                                    <td><input type="text" name="email" id="email"  className="input-text" value="" />
                                        <span id="emailMsg" className="errorMessage"> </span></td>
                                </tr>

                                <tr>
                                    <td className="info" align='right'>CONTRASEÑA:  &nbsp;</td>
                                    <td><input type="password" name="password" id="password" className="input-text" value=""
                                               onMouseOver="showTip(event)" onMouseOut="hideTip(event)"/>
                                        <span id="passwordMsg" className="errorMessage"> </span>
                                        <span id="divTip1" style={{visibility:'hidden'}}>密码只能由数字和字母组成</span></td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'>REPETIR CONTRASEÑA:  &nbsp;</td>
                                    <td><input type="password" name="cpassword" id="cpassword" className="input-text" value="" />
                                        <span id="cpasswordMsg" className="errorMessage"> </span></td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'>CODIGO DE SEGURIDAD:  &nbsp;</td>
                                    <td>
                                        <table id="tableVerify">
                                            <tr valign="bottom">
                                                <td><input type="text" name="verify" id="verify"  className="input-text" /></td>

                                                <td ><a href="#" onClick="repaintImage();"style={{color:'#7e231b'}}>CAMBIAR COD.DE SEGURIDAD</a>
                                                </td>
                                                <span id="verifyMsg" className="errorMessage"> </span>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'> </td>
                                    <td>
                                        <table style={{width:'330px',margin:'auto'}}>
                                            <tr valign="bottom"><td><input type="checkbox" name="agree" id="agree" value="" /></td>
                                                <td className="agree2" ><label >&nbsp;&nbsp;ACEPTO </label></td>
                                                <td className="clause"><a href="" title="" className="clause2" target="_blank">CONDICIONES LEGALES</a> </td>
                                                <td><span id="agreeMsg" className="errorMessage"> </span></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <table style={{width:'85px',margin:'auto'}}>
                                            <tr>
                                                <td>
                                                    <input className="send submit" type="submit" name="submit_first" id="submit_first" value="" > </input>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                </tr>
                            </table>

                        </div>
                        <div className="clear"> </div>
                    </form>

                </div>

                <div  className="end">Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados &nbsp;&nbsp;&nbsp; E-MAIL del soporte:  info@supnuevo.com.ar</div>

            </div>

        return contains;
    },
    componentWillMount:function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#e6e0d0";
        })
    }
})
module.exports=RegisterEspanol;