import React from 'react';
import {render} from 'react-dom';

import "../../css/entry/modules/chineseLogin.css"


var ChineseLogin = React.createClass({

    // getUrlParam :function(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //     var r = window.location.href.substr(window.location.href.indexOf('?')+1).match(reg);
    //     if (r != null)
    //         return unescape(r[2]);
    //     return null;
    // },

    examplePost:function () {
        var url = "/func/allow/getEventMemberByEventId";
        var param={
            id:33,
            test:88
        }
        //var ref = this;
        Proxy.query(
            'POST',
            url,
            param,
            null,
            function (res) {
                var a = res.data;
            },
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );

    },

    exampleGet:function () {
        var url = "/func/allow/getEventMemberByEventId";
        Proxy.query(
            'GET',
            url,
            null,
            null,
            function (res) {
                var a = res.data;
            },
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );

    },

    login:function(){
        var ChineseLogin = $('#loginPage');
        var username = $(ChineseLogin).find("input[name='username']").val();
        var password = $(ChineseLogin).find("input[name='password']").val();

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

    // viewSwitch:function(ob){
    //     var view=ob;
    //     this.setState({view:view});
    // },

    // loginAutoLogin:function (){
    //     this.loginGetCookie("username","username");
    //     this.loginGetCookie("password","password");
    //     this.loginCheckAuto();
    // },
    //
    // loginGetCookieValue:function (name){
    //     var arg = name + "="; // 要查找的对象
    //     var arglength = arg.length;
    //     var cookielength = window.document.cookie.length;
    //     var i = 0;
    //     while (i < cookielength)
    //     {
    //         var j = i + arglength;
    //         if (window.document.cookie.substring(i, j) == arg) {
    //             return this.loginGetCookieVal (j);
    //         }
    //         i = window.document.cookie.indexOf(" ", i) + 1;
    //         if (i == 0)
    //             break;
    //     }
    //     return null;
    // },
    //
    // loginGetCookie:function(showText, name){
    //     var arg = name + "="; // 要查找的对象
    //     var arglength = arg.length;
    //     var cookielength = window.document.cookie.length;
    //     var i = 0;
    //     while (i < cookielength)
    //     {
    //         var j = i + arglength;
    //         if (window.document.cookie.substring(i, j) == arg) {
    //             var a=this.loginGetCookieVal (j)
    //             document.getElementById(showText).value = a;
    //             return true;
    //         }
    //         i = window.document.cookie.indexOf(" ", i) + 1;
    //         if (i == 0)
    //             break;
    //     }
    //     return true;
    // },

    showModal:function () {
        $('#successModal').modal('show');
    },

    closeModal:function () {

        $('#successModal').modal('hide');
    },


        render: function () {
        var contains = null;
        contains =
            <div id="loginPage" >
                <div id="header">
                    <div id="logo">
                        <div id="help">
                            <span id="about" style={{cursor:'pointer'}} onClick={this.showModal} className="btn-black" >关于我们 </span>
                        </div>
                    </div>
                    <div className="clear"> </div>
                </div>

                <input type="hidden" id="error" />
                <div id="loginform">
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
                                                <td height="445" valign="bottom" id="loginbj2">
                                                    <table width="100%" height="144" border="0" cellPadding="0" cellSpacing="0">
                                                    <tr>
                                                        <td width="110" height="300">&nbsp;</td>
                                                        <td width="260" valign="top">
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0"  style={{lineHeight: '30px'}}>
                                                                <tr>
                                                                    <td height="30" colSpan="3"> </td>
                                                                    <td width="13%" rowSpan="8"> <a href="#"> </a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="9%" height="13"> </td>
                                                                    <td width="21%"><div className="txt2c">用户名：</div></td>
                                                                    <td width="57%" valign="middle">
                                                                        <input type="text" id="username" name="username" size="23" className="input1"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="9" colSpan="3"> </td>
                                                                    <td width="13%" rowSpan="8"> <a href="#"> </a> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> </td>
                                                                    <td><div className="txt2c">密 码：</div></td>
                                                                    <td><input type="password" id="password" name="password" size="23"
                                                                               className="input1"/> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> </td>
                                                                    <td align="right" >
                                                                        <input type="checkbox" name="login_autoLoginCheckbox" value = '1' id="ALIASCHECK" size="23"/>
                                                                    </td>
                                                                    <td align="left" ><div className="txt2c">记住密码</div></td>
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
                                                                                <td>
                                                                                    <span  onClick={this.login}  >登录</span>
                                                                                </td>
                                                                                <td width="10"> </td>
                                                                                <td width="65" height="11" bgcolor="7d7f86" className="txt3c"
                                                                                    onMouseOver="this.bgColor='#640000'" onMouseOut="this.bgColor='#7d7f86'">
                                                                                    <a href="RegisterChinese"  style={{display:'block'}}>注册新用户</a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </table></td>
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

                <div className="end"> Copyright &copy; 2015- S.O.S. srl / Todos los derechos reservados &nbsp;&nbsp; 支持邮箱  info@supnuevo.com.ar
                </div>
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
                                <h2>任务</h2>&nbsp;&nbsp;&nbsp;&nbsp;如您所知，网络商业平台，是当今最有活力的商业环境，Sistema Online Supnuevo SRL 为此开发了这个企业对企业（B2B）模式的在线交易平台，其具有独特的中文与西班牙文双语功能。在设计上充分的考虑到了买卖双方各种需求，有着广泛的实用性，能简单，清晰，快捷的满足您在交易过程中的各种需要，买卖双方可以透明地，诚信地磋商，其交易成本也已减少到微不足道的水平。<br> </br>
                                <h2>优点：</h2>&nbsp;&nbsp;&nbsp;&nbsp;* 排除了地域对商业的束缚，不管买卖双方各自地理位置在哪里，都能自由的，方便的洽谈交易。<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* 快速且安全的信息传递，使您在商业竞争中占尽先机。<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* 卖方将获得更大的市场，买方将获得更宽的供货渠道。<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* 透明且直接的信息交流，克服了因交易中间环节产生的误会对商业信誉的伤害。<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* 对于买家而言，大量的供货商及商品信息必然会提高进货工作的效率和质量。<br> </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;* 对于卖家而言，便捷，廉价的营销活动必然带来更大的商业利益。<br> </br>
                                <h3>Sistema Online Supnuevo SRL</h3> <br> </br>
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
    },
});
module.exports=ChineseLogin;