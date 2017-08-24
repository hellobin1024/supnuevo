import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/func.css'
import SliderRight from '../modules/SliderRight'
import News from '../modules/news'
import Downloads from '../modules/downloads'
import Problem from './Problem'
import { connect } from 'react-redux';
import {Link} from 'react-router';



var Func = React.createClass({

    //获取url中的参数
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        // var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        var r = window.location.href.substr(window.location.href.indexOf('?') + 1).match(reg);
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    },
    getInitialState: function () {
        var isnew = this.getUrlParam("register");
        var page = this.props.pageType;
        return ({
            isnew: isnew,
            page:page
        });
    },
    componentWillReceiveProps:function (nextProps) {
        var page = nextProps.pageType;
        this.setState({
            page:page
        })
    },
    render: function () {
        var contains = null;
        var mainBody = [];
        if(this.props.token!==null){
        switch (this.state.page){
            case 'new':
                mainBody = <News/>
                break;
            case 'download':
                mainBody = <Downloads/>
                break;
            case 'problem':
                mainBody = <Problem/>
                break;
            default:
                break;
        }
        contains =
            <div>
                <div id="headline">
                    <div className="center">
                        <header>
                            <h2>* NOVEDADES</h2>
                            <h3>Noticias importantes de Supnuevo.</h3>
                        </header>
                    </div>
                    {(this.state.isnew == "1" || this.state.isnew == 1) ?
                        <div id="prompt1" className="prompt1">
                            <label for="prompt">FELICITACIONES!! USTED YA ES USUARIO DE SUPNUEVO</label>
                        </div> : null
                    }
                </div>
                <div id="container">
                    <SliderRight/>
                    {mainBody}
                    <div className="clearfix"></div>
                </div>
            </div>
        }else{
            contains =
                <div style={{padding: '125px', textAlign: 'center'}}>
                    您未登录！
                    <Link to={window.App.getAppRoute() + '/'}>去登陆！>>>>>></Link>
                </div>
        }

        return contains;
    },
    componentWillMount: function () {
        $(document).ready(function () {
            document.body.style.backgroundColor = "#f2efe9";
            document.body.style.fontFamily = "'Helvetica Neue',Helvetica,Arial,'Microsoft Yahei UI','Microsoft YaHei',SimHei,'宋体',simsun,sans-serif";
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
export default connect(mapStateToProps)(Func);