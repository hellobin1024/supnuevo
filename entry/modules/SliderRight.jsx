import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/func.css'

var SliderRight = React.createClass({

    download1: function () {
        window.location.href = window.App.getAppRoute()+"/downloads/jre-7u45-windows-i586.exe";
    },
    download2: function () {
        window.location.href =  window.App.getAppRoute()+"/downloads/supnuevo.jar";
    },
    download3: function () {
        window.location.href =  window.App.getAppRoute()+"/downloads/commodityms.jar";
    },
    downloadAPK1: function () {
        window.location.href =  window.App.getAppRoute()+"/downloads/Comprando Precios Claros_v2.11_apkpure.com.apk";
    },
    downloadAPK2: function () {
        window.location.href =  window.App.getAppRoute()+"/downloads/Compro Bien Precios Claros_v0.3.0_apkpure.com.apk";
    },
    render: function () {
        var contains = null;
        contains =
            <aside className="sidebar">
                <div className="sidebox">
                    <h2>descargar</h2>
                    <div id="tag">
                        <div id="details">
                            <div id="prompt">DESCARGAR JAVA</div>
                            <div id="download">
                                <input type="button" name="button" className="button" value="" onClick={this.download1}/>
                            </div>
                            <div id="blank2"></div>
                            <div id="prompt2">DESCARGAR SOFTWARE S.O.S srl</div>
                            <div id="download2">
                                <input type="button" name="button" className="button" value="" onClick={this.download2}/>
                            </div>
                            <div id="blank2"></div>
                            <div id="prompt">DESCARGAR PROGRAMA COMMODITY</div>
                            <div id="download">
                                <input type="button" name="button" className="button" value="" onClick={this.download3}/>
                            </div>
                            <div id="blank2"></div>

                            <div id="prompt2">DESCARGAR COMPRANDO.APK</div>
                            <div id="download2">
                                <input type="button" name="button" className="button" value=""
                                       onClick={this.downloadAPK1}/>
                            </div>
                            <div id="blank2"></div>

                            <div id="prompt">DESCARGAR COMPRO BIEN.APK</div>
                            <div id="download">
                                <input type="button" name="button" className="button" value=""
                                       onClick={this.downloadAPK2}/>
                            </div>
                            <div id="blank2"></div>

                            <div className="twoDimension">手机客户端下载</div>
                            <div className="twoDimensionCode">
                                <img src="/images/twoDimensionCodeAndroid.png"/>
                            </div>
                            <div className="twoDimensionblank"></div>
                            <div id="blank "><img style={{width: '198px'}} src="/images/blank.jpg"/></div>
                        </div>
                    </div>
                </div>
            </aside>

        return contains;
    },
})
module.exports = SliderRight;