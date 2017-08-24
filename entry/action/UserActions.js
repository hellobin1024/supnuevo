/**
 * Created by dingyiming on 2017/2/15.
 */
var Proxy = require('../../components/proxy/ProxyQ');

import { browserHistory ,hashHistory} from 'react-router';


import {
    // UPDATE_CAR_HISTORY_ORDERS,
    // UPDATE_APPLIED_CAR_ORDERS,
    // DISABLE_CARORDERS_ONFRESH
    ACCESS_TOKEN_ACK,
    UPDATE_ROUTER

} from '../constants/UserConstants';
var flag=0;
export let loginAction=function(name,psw,validate){

    return dispatch=> {

        return new Promise((resolve, reject) => {
            if(flag==0){
            var loginName=name;
            var password=psw;
            var url = "/func/auth/webLogin";
            var param={
                'loginName' :loginName,
                'password' : password,
                'validateCode' :validate
            };
            var ref = this;
            Proxy.query(
                'POST',
                url,
                param,
                null,
                function (res) {
                    var reCode = res.reCode;
                    var loginName = res.loginName;
                    var personId = res.personId;
                    if(reCode==0){
                        dispatch(getReCode(1,loginName,personId));
                        // if(type=="1"){

                            // const path = "/order?product="+product;
                            // hashHistory.push(path);
                            flag = 1;
                            document.getElementById("goToOther").click();

                        // }else{
                        //     const path = "/training";
                        //     hashHistory.push(path);
                        // }
                    }else {
                        var errorMsg = res.errorMessageList[1];
                        alert("登录失败！"+errorMsg);
                    }
                },
                function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }
            );
            }else{
                alert("请刷新页面后重新登录！");
            }
        });

    }
}


export let logoutAction=function(){

    return dispatch=> {

        return new Promise((resolve, reject) => {

            var url = "/func/auth/webLogout";
            var param={};
            Proxy.query(
                'GET',
                url,
                param,
                null,
                function (res) {
                    var reCode = res.reCode;
                    if(reCode==0){
                        var reCode = null;
                        var loginName = null;
                        var personId = null;
                        dispatch(getReCode(reCode,loginName,personId));
                        const path = "/";
                        hashHistory.push(path);
                        flag=0;
                    }else {
                        var errorMsg = res.errorMessageList[1];
                        alert("登出失败！"+errorMsg);
                    }
                },
                function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }
            );
        });
    }
}


export let loginStateAction=function(path){

    return dispatch=> {

        return new Promise((resolve, reject) => {

            var url="/func/merchant/getLonginState";
            Proxy.query(
                'GET',
                url,
                null,
                null,
                function(res) {
                    var reCode = res.re;
                    var data = res.data;
                    if(data!="-1"){
                        var loginName = data.loginName;
                        var personId = data.personId;
                        dispatch(getReCode(reCode,loginName,personId));
                        //const path = "/main";
                        hashHistory.push(path);
                    }
                }.bind(this),
                function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            );
        });
    }
}


let getReCode= (reCode,loginName,personId)=>{

        return {
            type: ACCESS_TOKEN_ACK,
            accessToken: reCode,
            loginName:loginName,
            personId:personId,
            auth:true,
            validate:true
        };
}

