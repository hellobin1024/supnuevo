import React from 'react';
import {render} from 'react-dom';

import "../../css/entry/modules/espanolLogin.css"


var EspanolLogin = React.createClass({

    login:function(){
        var EspanolLogin = $('#loginPage');
        var username = $(EspanolLogin).find("input[name='username']").val();
        var password = $(EspanolLogin).find("input[name='password']").val();

        // this.loginSetCookie(username,password);
        if (username==''||username==null) {
            alert('请填写用户名！');
        } else if(password ==''||password == null){
            alert('请填写密码！');
        }
        else {
            // var type=this.getUrlParam("loginType");
            // var product=parseInt(this.getUrlParam("product"));
            // this.props.dispatch(UserActions.loginAction(username,password,validate,type,product));
        }
    },

    showModal:function () {
        $('#successModal').modal('show');
    },
    render: function () {
        var contains = null;
        contains =
            <div id="loginPage">
                <div id="header">
                    <div id="logo">
                        <div id="help">

                            <span id="about" style={{cursor:'pointer'}} onClick={this.showModal} className="btn-black">ACERCA DE NOSOTROS </span>
                        </div>
                    </div>
                    <div className="clear"> </div>
                </div>

                <input type="hidden" id="error" />
                <div id="loginform" action="" method="post">
                    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                        <tr>
                            <td>

                                <table  style={{marginLeft:'30%'}} width="100%" height="144" border="0" cellPadding="0" cellSpacing="0">
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

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="7%" height="13"> </td>
                                                                        <td width="30%"><div className="txt2cc">USUARIO:</div>
                                                                        </td>
                                                                        <td width="57%" valign="middle">
                                                                            <input type="text" id="username" name="username" size="23" className="input1"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="9" colSpan="3"> </td>
                                                                        <td width="13%" rowSpan="8">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        </td>
                                                                        <td><div className="txt2cc">CONTRASEÑA:</div>
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" id="password" name="password" size="23" className="input1"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        </td>
                                                                        <td align="right" >
                                                                            <input type="checkbox" name="login_autoLoginCheckbox" value = '1' id="ALIASCHECK" size="23" />
                                                                        </td>
                                                                        <td align="left" >
                                                                            <div className="txt2cc">GUARDAR PASSWORD</div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td rowSpan="4"> </td>
                                                                        <td colSpan="2">
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td height="10">&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tr>
                                                                                    <td width="35%"> </td>
                                                                                    <td width="40%" height="11" bgcolor="7d7f86" className="txt3c" >
                                                                                        <span style={{cursor:'pointer'}} onClick={this.login} >INGRESAR</span>
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
                                                                                    <td width="40%" height="11" bgcolor="7d7f86" className="txt3c" onMouseOver="this.bgColor='#640000'" onMouseOut="this.bgColor='#7d7f86'">
                                                                                        <a href="RegisterEspanol"  style={{display: 'block'}}>REGISTRARSE</a>
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


                <div className="modal fade bs-example-modal-sm login-container"
                     tabIndex="-1"
                     role="dialog"
                     aria-labelledby="myLargeModalLabel"
                     aria-hidden="true"
                     ref="successModal"
                     id="successModal"
                     data-keyboard="false"
                     style={{zIndex: 1045}}>
                    <div className="modal-dialog modal-sm"
                         style={{position: 'absolute', top: '30%', width: '50%', marginLeft: '25%'}}>
                        <div className="modal-content"
                             style={{position: 'relative', width: '100%', padding: '40px'}}>

                            <div className="modal-body">
                                <span id="closeModal" style={{cursor:'pointer'}} onClick={this.closeModal} className="btn-black" ><h4 style={{marginLeft:'100%'}}>×</h4></span>
                                <h2>MISIÓN</h2>&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>SISTEMA ONLINE SUPNUEVO SRL</strong>
                                basándose en el medio comercial mundial más dinámico como lo es el Business-to-business (B2B),  ha desarrollado una exclusiva plataforma en chino y español (única en el mercado argentino), diseñada teniendo en cuenta las amplias necesidades de compradores y vendedores. De esta manera, en forma muy sencilla, transparente  y dinámica, ambas partes podrán negociar libremente y en confidencialidad con ínfimos  costos operativos.<br> </br>
                                <h2>Ventajas del Sistema</h2>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Lograr un amplio nivel de acercamiento entre compradores y vendedores a nivel nacional.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Rapidez y seguridad en las comunicaciones.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Posibilidad de recibir mayor número de ofertas.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Transparencia en todas las transacciones.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Proceso de negociación más rápido.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Importantes medidas de confidencialidad administradas por el usuario.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* Es una herramienta que colabora con los actuales sistemas comerciales o que, por sus características, puede utilizarse en forma exclusiva.<br> </br>
                                <h2>¿Es comprador?</h2>&nbsp;&nbsp;&nbsp;&nbsp;• Va a tener los costos actualizados de gran cantidad de productos.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp; • Contará con una amplia oferta  de importante cantidad de proveedores.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp; • Facilidad y rapidez para hacer consultas de precios y efectuar sus pedidos.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;• Acceder a promociones y servicios exclusivos.
                                <h2>¿Es vendedor?</h2>
                                &nbsp;&nbsp;&nbsp;&nbsp;• Tendrá una amplia red de supermercados adheridos al sistema en todo el país.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp; • Podrá llegar con acciones directas.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp; • Contará con un diagrama comercial adaptable a sus necesidades.<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;• Bajísimos costos operativos y transacciones más claras y efectivas."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        return contains;
    },
    componentWillMount:function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#e6e0d0";
        })
    }
})
module.exports=EspanolLogin;