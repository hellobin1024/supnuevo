import React from 'react';
import {render} from 'react-dom';
import "../../css/entry/modules/register.css";
import register from "../../data/register.json";
import { connect } from 'react-redux';
import {Link} from 'react-router';
var UserActions=require('../../entry/action/UserActions');

var ProxyQ = require('../../components/proxy/ProxyQ');

var Register = React.createClass({

    repaintImage: function () {
        var img = document.getElementById("validateImage");
        img.src = "/supnuevo/validatecode.jpg?rnd=" + Math.random();
    },

    register: function () {
        var field_values = {
            merchantType: '',
            nickName: '',
            password: '',
            email: '',
            qq: '',
            verify: ''

        };
        $('#first_step input').removeClass('error').removeClass('valid');
        var error = 0;
        //检查昵称不能为空
        var fields2 = $('#nickName');

        fields2.each(function () {
            //前端校验
            var value2 = $(this).val();
            if (value2.length < 1) {
                $(this).addClass('error');
                $(this).effect("shake", {times: 3}, 50);
                document.getElementById("nickNameMsg").innerHTML = "昵称不能为空 ";
                error++;
            }
            else {
                var nickName = document.getElementById("nickName").value;// 获取输入框信息
                field_values.nickName = nickName;
                var merchantType = document.getElementById("merchantType").value;
                field_values.merchantType = merchantType;
                if (nickName != null && nickName != "" && nickName.indexOf(" ") == -1) {
                    document.getElementById("nickNameMsg").innerHTML = "";
                    $('#nickName').addClass('valid');
                } else if (nickName.indexOf(" ") >= 0) {
                    $('#nickName').addClass('error');
                    $('#nickName').effect("shake", {times: 3}, 50);
                    document.getElementById("nickNameMsg").innerHTML = "不允许有空格 "
                    error++;
                }
            }

        });
        //检查密码不能为空
        var fields = $('#password');
        fields.each(function () {
            var value = $(this).val();
            var passWord = document.getElementById("password").value;// 获取输入框信息
            field_values.password = passWord;
            var reg = /^[0-9a-zA-Z]+$/;
            if (value.length < 1) {
                $(this).addClass('error');
                $(this).effect("shake", {times: 3}, 50);
                document.getElementById("passwordMsg").innerHTML = "密码不能为空 ";
                error++;
            } else if (passWord.indexOf(" ") >= 0) {
                $('#password').addClass('error');
                $('#password').effect("shake", {times: 3}, 50);
                document.getElementById("passwordMsg").innerHTML = "不允许有空格"
                error++;
            } else if (!reg.test(passWord)) {
                $('#password').addClass('error');
                $('#password').effect("shake", {times: 3}, 50);
                document.getElementById("passwordMsg").innerHTML = "您输入的字符不是数字或者字母 "
                error++;
            } else {
                $(this).addClass('valid');
                document.getElementById("passwordMsg").innerHTML = "";
            }
        });
        //验证两次输入的密码是否一致
        var fields3 = $('#cpassword');
        fields3.each(function () {
            var value3 = $(this).val();
            if ($('#password').val() != $('#cpassword').val() || $('#cpassword').val().length < 1) {
                $(this).removeClass('valid').addClass('error');
                $(this).effect("shake", {times: 3}, 50);
                document.getElementById("cpasswordMsg").innerHTML = "两次输入的密码不一致";
                error++;
            } else {
                $(this).addClass('valid');
                document.getElementById("cpasswordMsg").innerHTML = "";
            }
        });
        //检查是否同意服务条款  agreeMsg
        var fields4 = $('#agree');
        fields4.each(function () {
            var ck = document.getElementById("agree");
            if (ck.checked) {//选中
                ck.value = 1;
            } else {
                ck.value = 0;
            }
            var value4 = ck.value;
            if (value4 != 1) {
                $(this).addClass('error');
                $(this).effect("shake", {times: 3}, 50);
                document.getElementById("agreeMsg").innerHTML = "请接受supnuevo服务条款 ";
                error++;
            } else {
                /* $(this).addClass('valid'); */
                document.getElementById("agreeMsg").innerHTML = "";
            }
        });

        //检查是否填写验证码
        var fields6 = $('#verify');
        fields6.each(function () {
            if (($('#verify').val() == null || $('#verify').val() == "")) {
                $(this).addClass('error');
                $(this).effect("shake", {times: 3}, 50);
                document.getElementById("verifyMsg").innerHTML = "验证码不能为空 ";
                error++;
            } else {
                //$(this).addClass('valid');
                document.getElementById("verifyMsg").innerHTML = "";
            }
            var verify = document.getElementById("verify").value;// 获取输入框信息
            field_values.verify = verify;
        });
        //检查是否填写email或者qq
        var fields5 = $('#email');
        fields5.each(function () {
            if (($('#email').val() == null || $('#email').val() == "") && ($('#qq').val() == null || $('#qq').val() == "")) {
                document.getElementById("emailMsg").innerHTML = "“email”和“网上社交工具及注册号”请至少填写一种";
                $(this).addClass('error');
                $(this).effect("shake", {times: 3}, 50);

                error++;
            } else {
                if ($('#email').val() != null && $('#email').val() != "") {
                    var reMail = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
                    var s = new RegExp(reMail);

                    if (!s.test($(this).val())) {
                        document.getElementById("emailMsg").innerHTML = "邮箱不正确！";
                        error++;
                    }
                }
                if ($('#qq').val() != null && $('#qq').val() != "") {
                    document.getElementById("emailMsg").innerHTML = "";
                }
            }

            //email是否已经注册
            var email = document.getElementById("email").value;// 获取输入框信息
            field_values.email = email;
            //qq 是否已经注册
            var qq = document.getElementById("qq").value;// 获取输入框信息
            field_values.qq = qq;
        });

        if (error == 0) {
            //提交菜单
            var params = field_values;
            var url = "/func/merchant/registerNewMerchantInfo";
            var ref = this;
            ProxyQ.query(
                'POST',
                url,
                params,
                null,
                function (req) {
                    if(req.re==1){
                        alert("注册成功！");
                        ref.props.dispatch(UserActions.loginAction(params.nickName,params.password,null));
                    }
                },
                function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }
            );
            return true;
        } else {
            return false;
        }


    },

    showTip: function () {
        var oDiv = document.getElementById("divTip1");
        oDiv.style.visibility = "visible";
    },
    hideTip: function () {
        var oDiv = document.getElementById("divTip1");
        oDiv.style.visibility = "hidden";
    },

    getInitialState: function () {
        var data = null;
        var language = this.props.language;
        if (language == "Chinese") {
            data = register[1];
        } else {
            data = register[0];
        }
        return ({
            data: data,
            language: language,
        })
    },

    render: function () {
        var contains = null;
        if (this.state.data != null && this.state.data != undefined) {
            var data = this.state.data;
            contains =
                <div style={{padding: '70px'}}>
                    <div id="register">
                        <input type="hidden" id="error" value="${systemPrompt}"/>
                        <div id="formasdf">

                            <div id="first_step">
                                {this.state.language == "Chinese" ?
                                    <h1><span style={{color: 'black'}}>{data.title1}</span><span>{data.title2}</span>
                                    </h1>
                                    : <h1>{data.title}</h1>
                                }
                                <input type="hidden" id="merchantType" name="merchantType" value="1"/>
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tr>
                                        <td className="info" align='right'>{data.type}  &nbsp;</td>
                                        <td>
                                            <select name="userType" id="userType" className="input-text"
                                                    onChange="justWe()">
                                                <option value="1">{data.typeOpt1}</option>
                                                <option value="2">{data.typeOpt2}</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="info" align='right'>{data.nikename}  &nbsp;</td>
                                        <td>
                                            <input type="text" name="nickName" id="nickName" className="input-text"/>
                                            <span id="nickNameMsg" className="errorMessage"> </span></td>
                                    </tr>
                                    <tr>
                                        <td className="info" align='right'>{data.email}  &nbsp;</td>
                                        <td><input type="text" name="email" id="email" className="input-text"/>
                                            <span id="emailMsg" className="errorMessage"> </span></td>
                                    </tr>
                                    {this.state.language == "Chinese" ?
                                        <tr>
                                            <td className="info" align='right'>网上社交工具及注册号:  &nbsp;</td>
                                            <td><input type="text" name="qq" id="qq" className="input-text"/>
                                                <span id="qqMsg" className="errorMessage"> </span></td>
                                        </tr> : null
                                    }

                                    <tr>
                                        <td className="info" align='right'>{data.password}  &nbsp;</td>
                                        <td><input type="password" name="password" id="password" className="input-text"
                                                   onMouseOver={this.showTip} onMouseOut={this.hideTip}/>
                                            <span id="passwordMsg" className="errorMessage"> </span>
                                            <span id="divTip1" style={{visibility: 'hidden'}}>{data.pswprompt}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="info" align='right'>{data.checkpsw}  &nbsp;</td>
                                        <td><input type="password" name="cpassword" id="cpassword"
                                                   className="input-text"/>
                                            <span id="cpasswordMsg" className="errorMessage"> </span></td>
                                    </tr>
                                    <tr>
                                        <td className="info" align='right'>{data.verification}  &nbsp;</td>
                                        <td>
                                            <table id="tableVerify">
                                                <tr valign="bottom">
                                                    <td><input type="text" name="verify" id="verify"
                                                               className="input-text"/></td>
                                                    <td><img id="validateImage" src="/supnuevo/validatecode.jpg"/></td>
                                                    <td><a href="#" onClick={this.repaintImage}
                                                           style={{color: '#7e231b'}}>{data.changevcode}</a>
                                                    </td>
                                                    <span id="verifyMsg" className="errorMessage"> </span>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="info" align='right'></td>
                                        <td>
                                            <table style={{width: '330px', margin: 'auto'}}>
                                                <tr valign="bottom">
                                                    <td><input type="checkbox" name="agree" id="agree"/></td>
                                                    <td className="agree2">{data.agree}</td>
                                                    <td className="clause">
                                                        <Link to={window.App.getAppRoute()+"/agreement"} className="clause2"
                                                           target="_blank">{data.clause}
                                                        </Link>
                                                    </td>
                                                    <td><span id="agreeMsg" className="errorMessage"
                                                              style={{margin: '1px'}}> </span></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <table style={{width: '85px', margin: 'auto'}}>
                                                <tr>
                                                    <td>
                                                        <input onClick={this.register} className={data.regBut} type="button"
                                                               id="submit_first"> </input>
                                                        <Link to={window.App.getAppRoute() + '/news?register=1'} id="goToOther"></Link>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                    </tr>
                                </table>

                            </div>
                            <div className="clear"></div>
                        </div>

                    </div>
                </div>
        } else {
            contains =
                <div>
                    {this.state.language == "Chinese" ?
                        <div>
                            数据加载出错！
                        </div> :
                        <div>
                            Date load error！
                        </div>
                    }
                </div>
        }
        return contains;
    },
    componentWillMount: function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#e6e0d0";
        })
    }
})
const mapStateToProps = (state, ownProps) => {

    const props = {
        token: state.userInfo.accessToken,
        name: state.userInfo.loginName,
        personId:state.userInfo.personId
    }

    return props
}
export default connect(mapStateToProps)(Register);