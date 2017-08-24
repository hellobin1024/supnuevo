import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/home.css'
import header from "../../data/header.json"
import {Link} from 'react-router';
import { connect } from 'react-redux';
var UserActions=require('../action/UserActions');


var Header = React.createClass({

    showModal:function () {
        $('#successModal').modal('show');
    },

    closeModal:function () {
        $('#successModal').modal('hide');
    },
    getInitialState:function () {
        var data =null;
        var loginState = false;
        var language = this.props.language;
        var reg = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;//正则表达式 URI 分解为协议（ftp、http 等等）、域地址和页/路径
        var regs =window.location.href.match(reg)[4];
        var start = regs.indexOf('/');
        var end = regs.indexOf('?');
        var path =regs.substr(start,end);
        if(language=="Chinese"){
            data = header[1];
        }else {
            data = header[0];
        }
        if(loginState==false||this.props.path=='/new'){ // 刷新时如果flux中登录状态丢失，从后台获取
            this.props.dispatch(UserActions.loginStateAction(this.props.path));
        }
        return({
            data:data,
            language:language,
            path:path
        })
    },
    componentDidMount:function () {
        var content = document.getElementById("modalCon");
        content.innerHTML += this.state.data.modal;
    },
    componentDidUpdate:function () {
        var linknav = document.getElementById("linknav");
        if(linknav!==null){
            switch (this.state.path){
                case '/news':
                    $('#downloads').removeAttr("class");
                    $('#problem').removeAttr("class");
                    $('#new').attr("class","active");
                    break;
                case '/downloads':
                    $('#new').removeAttr("class");
                    $('#problem').removeAttr("class");
                    $('#downloads').attr("class","active");
                    break;
                case '/problem':
                    $('#new').removeAttr("class");
                    $('#downloads').removeAttr("class");
                    $('#problem').attr("class","active");
                    break;
                default:
                    break;
            }
        }
    },
    componentWillReceiveProps:function (nextProps) {
        var path = nextProps.path;
        var token = nextProps.token;
        var loginName= nextProps.loginName;
        var personId=nextProps.personId;
        var loginState = false;
        if(token=='1' || token==1){
            var loginState = true;
        }
        this.setState({path:path, loginState:loginState, userName:loginName, personId:personId})

    },

    render: function () {
        var contains = null;
        var contents = this.state.data;
        var propPath = null;
        if(this.props.path=='/news'||this.props.path=='/downloads'||this.props.path=='/problem'){
            propPath='login'
        }

        contains =
                <div id="header">
                    <div id="logo">
                        <img src="images/logo.png"/>
                    </div>
                    {(this.props.token == 1&&propPath=='login') ||
                    (this.props.token == "1"&&propPath=='login') ?
                        <nav className="link" id="linknav">
                                <ul>
                                    <li id="new">
                                        <Link to={window.App.getAppRoute()+"/news"}>NOVEDADES</Link>
                                    </li>
                                    <li id="downloads">
                                        <Link to={window.App.getAppRoute()+"/downloads"}>INSTRUCCIONES</Link>
                                    </li>
                                    <li id="problem">
                                        <Link to={window.App.getAppRoute()+"/problem"}>PREGUNTAS</Link>
                                    </li>
                                </ul>
                        </nav> :
                        (this.state.path == "/register" ?
                            <div id="help">
                                <Link to={window.App.getAppRoute() + "/"} className="btn-black">
                                    {contents.page}
                                </Link>
                                |
                                <Link to={window.App.getAppRoute() + "/login?language=" + this.state.language}
                                      className="btn-black">
                                    {contents.login}
                                </Link>
                            </div> :
                            <div id="help">
                            <span id="about" style={{cursor: 'pointer'}} onClick={this.showModal}
                                  className="btn-black">{contents.content} </span>
                            </div>
                        )
                    }
                    <div className="clear"> </div>



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
                             style={{position: 'absolute', top: '20%', width: '55em', marginLeft: '25%'}}>
                            <div className="modal-content"
                                 style={{position: 'relative', width: '100%',background: '#fbe5e8',
                                     fontSize: '12px', borderStyle: 'solid', borderWidth: 'thick',
                                     borderColor: '#d8b1b5', lineHeight: '20px'}}>

                                    <div id="closeModal" style={{background: '#d8b1b5'}}>
                                        <img src="images/close.png" onClick={this.closeModal} style={{marginLeft:'96%',cursor:'pointer'}}></img>
                                    </div>
                                    <div id="modalCon">

                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>

        return contains;
    },
})
const mapStateToProps = (state, ownProps) => {
    const props = {
        token: state.userInfo.accessToken,
        loginName: state.userInfo.loginName,
        personId: state.userInfo.personId
    }
    return props
}
export default connect(mapStateToProps)(Header);