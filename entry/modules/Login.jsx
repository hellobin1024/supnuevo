import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import "../../css/entry/modules/Login.css"
import login from "../../data/login.json"
var UserActions=require('../../entry/action/UserActions');

var Login = React.createClass({

    login:function(){
        var ChineseLogin = $('#loginPage');
        var username = $(ChineseLogin).find("input[name='username']").val();
        var password = $(ChineseLogin).find("input[name='password']").val();
        this.loginSetCookie(username,password);
        if (username==''||username==null) {
            alert('请填写用户名！');
        } else if(password ==''||password == null){
            alert('请填写密码！');
        }
        else {
             // var type=this.getUrlParam("loginType");
             // var product=parseInt(this.getUrlParam("product"));
             this.props.dispatch(UserActions.loginAction(username,password,null));
        }
    },

    loginSetCookie:function(username,password){

        var userValue = username;
        //alert(userValue);
        var exp = new Date();
        exp.setTime(exp.getTime() + (30*24*60*60*1000));
        window.document.cookie = "username=" + escape (userValue) + "; expires=" + exp.toGMTString()+";path=/";

        // var auto = document.getElementById("login_autoLoginCheckbox").checked;
        //
        // if(auto)
        // {
        //     var password = password;
        //     window.document.cookie = "password="+escape(password)+"; expires=" + exp.toGMTString()+";path=/";
        //     window.document.cookie = "autocheck=true; expires="+ exp.toGMTString()+";path=/";
        // }else{
        //     window.document.cookie = "password=; expires=" + exp.toGMTString()+";path=/";
        //     window.document.cookie = "autocheck=false; expires="+ exp.toGMTString()+";path=/";
        // }

    },
    loginCheckAuto:function (){
        var checkValue = this.loginGetCookieValue("autocheck");
        if(checkValue=="true")
            document.all("login_autoLoginCheckbox").checked = checkValue;
    },

    loginAutoLogin:function (){
        this.loginGetCookie("username","username");
        this.loginGetCookie("password","password");
        this.loginCheckAuto();
    },

    loginGetCookieValue:function (name){
        var arg = name + "="; // 要查找的对象
        var arglength = arg.length;
        var cookielength = window.document.cookie.length;
        var i = 0;
        while (i < cookielength)
        {
            var j = i + arglength;
            if (window.document.cookie.substring(i, j) == arg) {
                return this.loginGetCookieVal (j);
            }
            i = window.document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return null;
    },

    loginGetCookie:function(showText, name){
        var arg = name + "="; // 要查找的对象
        var arglength = arg.length;
        var cookielength = window.document.cookie.length;
        var i = 0;
        while (i < cookielength)
        {
            var j = i + arglength;
            if (window.document.cookie.substring(i, j) == arg) {
                var a=this.loginGetCookieVal (j)
                document.getElementById(showText).value = a;
                return true;
            }
            i = window.document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return true;
    },

    loginGetCookieVal:function  (offset) {
        var endstr = window.document.cookie.indexOf (";", offset);
        if (endstr == -1)
            endstr = window.document.cookie.length;
        return unescape(window.document.cookie.substring(offset, endstr));
    },
    getInitialState:function () {
        var language = this.props.language;
        var data = null;
        if(language=="Chinese"){
            data = login[1];
        }else {
            data = login[0];
        }
      return({
          language:language,
          data:data
      })
    },

    render: function () {
        var contains = null;
        if( this.state.data!=null&& this.state.data!=undefined){
            var data= this.state.data;
            contains =
                <div id="loginPage" onLoad={this.loginAutoLogin} style={{padding: '70px'}}>
                    <div id="loginform">
                        <table style={{width:"100%", border:"0"}}>
                            <tbody>
                            <tr>
                                <td>
                                    <table  style={{width:"100%", height:"144px"}}>
                                        <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td style={{width:'750px', textAlign:'center'}}>
                                                <table style={{width:"750px"}}>
                                                    <tbody>
                                                    <tr>
                                                        <td height="445"  id={data.img} style={{verticalAlign: 'bottom'}}>
                                                            <table width="100%" height="144">
                                                                <tbody>
                                                                <tr>
                                                                    <td width="110" height="300">&nbsp;</td>
                                                                    <td width="260" style={{verticalAlign: 'top'}}>
                                                                        <table width="100%"   style={{lineHeight: '30px'}}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td height="30" colSpan="3"> </td>
                                                                                <td width="13%" rowSpan="8"> <a href="#"> </a></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="9%" height="13"> </td>
                                                                                <td width="22%"><div className="txt2c">{data.username}</div></td>
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
                                                                                <td><div className="txt2c">{data.password}</div></td>
                                                                                <td><input type="password" id="password" name="password" size="23"
                                                                                           className="input1"/> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td> </td>
                                                                                <td align="right" >
                                                                                    <input type="checkbox" name="login_autoLoginCheckbox" value = '1' id="ALIASCHECK"/>
                                                                                </td>
                                                                                <td align="left" ><div className="txt2c">{data.savepsw}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td rowSpan="4"> </td>
                                                                                <td colSpan="2" valign="bottom">
                                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td height="10">&nbsp;</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td className="registeBut">
                                                                                                <a className="txt3c" onClick={this.login}  style={{display:"block"}}>{data.login}</a>
                                                                                                <Link to={window.App.getAppRoute() + '/news'} id="goToOther"></Link>
                                                                                            </td>
                                                                                            <td width="10"> </td>
                                                                                            <td className="registeBut">
                                                                                                <Link className="txt3c" style={{display:"block"}} to={window.App.getAppRoute()+"/register?language="+this.state.language}>
                                                                                                    {data.register}
                                                                                                </Link>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                </tbody>
                                                            </table></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        }else {
            contains=
                <div>
                    {this.state.language=="Chinese"?
                        <div>
                            数据加载出错！
                        </div>:
                        <div>
                            Date load error！
                        </div>
                    }
                </div>

        }
    return contains;
    },

    componentWillMount:function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#e6e0d0";
        })
    },
});
const mapStateToProps = (state, ownProps) => {

    const props = {
        token: state.userInfo.accessToken,
        name: state.userInfo.loginName,
        personId:state.userInfo.personId
    }

    return props
}
export default connect(mapStateToProps)(Login);