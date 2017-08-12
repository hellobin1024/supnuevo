import React from 'react';
import {render} from 'react-dom';
import "../../css/entry/modules/register.css"



var RegisterChinese = React.createClass({

    repaintImage:function () {
        var img = document.getElementById("validateImage");
        img.src = "validatecode.jpg?rnd=" + Math.random()  ;
    },

    componentDidMount: function () {
        var field_values = {
            //id        :  value
            'nickName'  : 'nickName',
            'password'  : 'password',
            'cpassword' : 'password',
            'email'  : 'email',
            'qq':'qq',
            'verify':'verify',
            'agree':'agree'
        };
        //reset progress bar
        $('#progress').css('width','0');
        $('#progress_text').html('0% Complete');
        $('#submit_first').click(function(){
            //remove classes
            $('#first_step input').removeClass('error').removeClass('valid');
            var error = 0;
            //检查昵称不能为空
            var fields2 = $('#nickName');

            fields2.each(function(){
                //前端校验
                var value2 = $(this).val();
                if( value2.length<1) {
                    $(this).addClass('error');
                    $(this).effect("shake", { times:3 }, 50);
                    document.getElementById("nickNameMsg").innerHTML="昵称不能为空 ";
                    error++;

                } else {

                }

                var nickName = document.getElementById("nickName").value;// 获取输入框信息
                var merchantType = document.getElementById("merchantType").value;
               // var url = '<%=request.getContextPath()%>/supnuevo/supnuevoRegisterNewMerchantName.do?usernickName='+nickName+'&merchantType='+merchantType;

                $.ajax({
                    url:url,
                    type:"POST",
                    dataType:"json",
                    async:false,
                    cache:false,
                    success:function(result){
                        if(result){//如果检验失败
                            $('#nickName').addClass('error');
                            $('#nickName').effect("shake", { times:3 }, 50);
                            document.getElementById("nickNameMsg").innerHTML="该用户已存在 "
                            error++;
                        }else if (nickName!=null && nickName!="" && nickName.indexOf(" ")== -1){
                            document.getElementById("nickNameMsg").innerHTML="";
                            $('#nickName').addClass('valid');
                        }else if ( nickName.indexOf(" ") >= 0){
                            $('#nickName').addClass('error');
                            $('#nickName').effect("shake", { times:3 }, 50);
                            document.getElementById("nickNameMsg").innerHTML="不允许有空格 "
                            error++;
                        }
                    }
                });

            });
            //检查密码不能为空
            var fields = $('#password');
            fields.each(function(){
                var value = $(this).val();
                var passWord = document.getElementById("password").value;// 获取输入框信息
                var reg = /^[0-9a-zA-Z]+$/;
                if( value.length<1 || value==field_values[$(this).attr('id')] ) {
                    $(this).addClass('error');
                    $(this).effect("shake", { times:3 }, 50);
                    document.getElementById("passwordMsg").innerHTML="密码不能为空 ";
                    error++;
                }else if ( passWord.indexOf(" ") >= 0){
                    $('#password').addClass('error');
                    $('#password').effect("shake", { times:3 }, 50);
                    document.getElementById("passwordMsg").innerHTML="不允许有空格"
                    error++;
                }else if ( !reg.test(passWord)){
                    $('#password').addClass('error');
                    $('#password').effect("shake", { times:3 }, 50);
                    document.getElementById("passwordMsg").innerHTML="您输入的字符不是数字或者字母 "
                    error++;
                }else {
                    $(this).addClass('valid');
                    document.getElementById("passwordMsg").innerHTML="";
                }
            });
            //验证两次输入的密码是否一致
            var fields3 = $('#cpassword');
            fields3.each(function(){
                var value3 = $(this).val();
                if( $('#password').val() != $('#cpassword').val() || $('#cpassword').val().length<1 ) {
                    $(this).removeClass('valid').addClass('error');
                    $(this).effect("shake", { times:3 }, 50);
                    document.getElementById("cpasswordMsg").innerHTML="两次输入的密码不一致";
                    error++;
                } else {
                    $(this).addClass('valid');
                    document.getElementById("cpasswordMsg").innerHTML="";
                }
            });
            //检查是否同意服务条款  agreeMsg
            var fields4 = $('#agree');
            fields4.each(function(){
                var ck =document.getElementById("agree");
                if(ck.checked){//选中
                    ck.value=1;
                }else{
                    ck.value=0;
                }
                value4=ck.value;
                if( value4 != 1 ) {
                    $(this).addClass('error');
                    $(this).effect("shake", { times:3 }, 50);
                    document.getElementById("agreeMsg").innerHTML="请接受supnuevo服务条款 ";
                    error++;
                } else {
                    /* $(this).addClass('valid'); */
                    document.getElementById("agreeMsg").innerHTML="";
                }
            });

            //检查是否填写验证码
            var fields6 = $('#verify');
            fields6.each(function(){
                if( ($('#verify').val() ==null || $('#verify').val() =="")){
                    $(this).addClass('error');
                    $(this).effect("shake", { times:3 }, 50);
                    document.getElementById("verifyMsg").innerHTML="验证码不能为空 ";
                    error++;
                }else {
                    //$(this).addClass('valid');
                    document.getElementById("verifyMsg").innerHTML="";
                }

                var verify = document.getElementById("verify").value;// 获取输入框信息
                var url = '<%=request.getContextPath() %>/supnuevo/supnuevoRegisterNewMerchantVerify.do?verify='+verify;
                //alert(url);

                $.ajax({
                    url:url,
                    type:"POST",
                    dataType:"json",
                    async:false,
                    cache:false,
                    success:function(result){
                        if(result){//如果检验失败
                            $('#verify').addClass('error');
                            $('#verify').effect("shake", { times:3 }, 50);
                            document.getElementById("verifyMsg").innerHTML="验证码有误 ";
                            error++;
                        }else if (verify!=null && verify!=""){
                            $('#verify').addClass('valid');
                            document.getElementById("verifyMsg").innerHTML="";
                        }
                    }
                });
            });
            //检查是否填写email或者qq
            // var fields5 = $('#email');
            // fields5.each(function(){
            //     if( ($('#email').val() ==null || $('#email').val() =="") &&  ($('#qq').val() == null ||  $('#qq').val() =="")){
            //         document.getElementById("emailMsg").innerHTML="“email”和“网上社交工具及注册号”请至少填写一种";
            //         $(this).addClass('error');
            //         $(this).effect("shake", { times:3 }, 50);
            //
            //         error++;
            //     }else {
            //         //$(this).addClass('valid');
            //         //document.getElementById("emailMsg").innerHTML="";
            //     }
            //
            //     //email是否已经注册
            //     var email = document.getElementById("email").value;// 获取输入框信息
            //     var merchantType = document.getElementById("merchantType").value;
            //     var url = '<%=request.getContextPath() %>/supnuevo/supnuevoRegisterNewMerchantEmali.do?email='+email+'&merchantType='+merchantType;
            //     //alert(url);
            //
            //     $.ajax({
            //         url:url,
            //         type:"POST",
            //         dataType:"json",
            //         async:false,
            //         cache:false,
            //         success:function(result){
            //             if(result && ($('#email').val() !=null && $('#email').val() !="") ){//如果检验失败
            //                 $('#email').addClass('error');
            //                 $('#email').effect("shake", { times:3 }, 50);
            //                 document.getElementById("emailMsg").innerHTML="您所使用的邮箱已被注册";
            //                 error++;
            //             }else if($('#email').val() !=null && $('#email').val() !=""){
            //                 $('#email').addClass('valid');
            //                 document.getElementById("emailMsg").innerHTML="";
            //             }
            //         }
            //     });
            //     //qq 是否已经注册
            //     var qq = document.getElementById("qq").value;// 获取输入框信息
            //     var merchantType = document.getElementById("merchantType").value;
            //    // var url = '<%=request.getContextPath() %>/supnuevo/supnuevoRegisterNewMerchantQq.do?qq='+qq+'&merchantType='+merchantType;
            //     //alert(url);
            //
            //     $.ajax({
            //         url:url,
            //         type:"POST",
            //         dataType:"json",
            //         async:false,
            //         cache:false,
            //         success:function(result){
            //             if(result){//如果检验失败
            //                 $('#qq').addClass('error');
            //                 $('#qq').effect("shake", { times:3 }, 50);
            //                 document.getElementById("qqMsg").innerHTML="您所使用的网上社交工具及注册号已被注册";
            //                 error++;
            //             }else{
            //                 document.getElementById("qqMsg").innerHTML=""
            //             }
            //         }
            //     });
            // });


            if(error==0 ) {
                //提交菜单
                return true;
            } else {
                return false;
            }
        });




    },

    render: function () {
        var contains = null;
        contains =
            <div>
                <div id="header">
                    <div id="logo"><img src="images/logo.png"/> </div>
                    <div id="help"> <a className="btn-black" href="MainPage">首页 </a> | <a className="btn-black" href="ChineseLogin">登录 </a></div>
                    <div className="clear1"> </div>
                </div>

               
                <div id="register">
                    <input type="hidden" id="error" value="${systemPrompt}" />
                    <form action="" method="post"  id="formasdf" onSubmit="return check();"
                          onKeyPress="if(event.keyCode==13||event.which==13){return false;}">
                        
                        <div id="first_step">
                            <h1>欢迎注册 <span>supnuevo</span></h1>
                            <input type="hidden" id="merchantType" name="merchantType" value="1"/>
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <tr>
                                    <td className="info" align='right'>注册身份:  &nbsp;</td>
                                    <td>
                                        <select name="userType" id="userType" className="input-text"  onChange="justWe()">
                                            <option value="1">买方</option>
                                            <option value="2">卖方</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info" align='right'>昵称:  &nbsp;</td>
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
										<td className="info" align='right'>网上社交工具及注册号:  &nbsp;</td>
										<td><input type="text" name="qq" id="qq"   className="input-text" value="" />
                                            <span id="qqMsg" className="errorMessage"> </span></td>
									</tr>
									<tr>
										<td className="info" align='right'>密码:  &nbsp;</td>
										<td><input type="password" name="password" id="password" className="input-text" value=""
										onMouseOver="showTip(event)" onMouseOut="hideTip(event)"/>
                                    <span id="passwordMsg" className="errorMessage"> </span>
                                    <span id="divTip1" style={{visibility:'hidden'}}>密码只能由数字和字母组成</span></td>
                            </tr>
                            <tr>
                                <td className="info" align='right'>密码效验:  &nbsp;</td>
                                <td><input type="password" name="cpassword" id="cpassword" className="input-text" value="" />
                                    <span id="cpasswordMsg" className="errorMessage"> </span></td>
                            </tr>
                            <tr>
                                <td className="info" align='right'>验证码:  &nbsp;</td>
                                <td>
                                    <table id="tableVerify">
                                        <tr valign="bottom">
                                            <td><input type="text" name="verify" id="verify"  className="input-text" /></td>
                                            <td><img id="validateImage" src="validatecode.jpg" /></td>
                                            <td ><a href="#" onClick="repaintImage();" style={{color:'#7e231b'}}>看不清，换一张</a>
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
                                            <td className="agree2" ><label >同意 </label></td>
                                            <td className="clause"><a href="#"  className="clause2" target="_blank">supnuevo服务条款</a> </td>
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

        <div  className="end">Copyright &copy; 2015.Shandong university. &nbsp;&nbsp; 支持邮箱  info@supnuevo.com.ar</div>

            </div>

        return contains;
    },
    componentWillMount:function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#e6e0d0";
        })
    }
})
module.exports=RegisterChinese;