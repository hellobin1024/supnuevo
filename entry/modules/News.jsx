import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/func.css'

var News = React.createClass({

    render: function () {
        var contains = null;
        contains =
            <div className="list">
                <div className="infor">
                    <h3>ULTIMAS NOTICIAS</h3>
                </div>
                <figure className="news1">
                    <img src="/images/news1.png" alt="新闻一的图片" style={{float: 'left'}}/>
                    <p style={{textDecoration: 'underline'}}><strong>MISIÓN</strong></p>
                    <p>&nbsp; &nbsp;SISTEMA ONLINE SUPNUEVO SRL basándose en el medio comercial mundial más
                        dinámico como lo es el Business-to-business (B2B), ha desarrollado una exclusiva
                        plataforma en chino y español (única en el mercado argentino), diseñada teniendo en
                        cuenta las amplias necesidades de compradores y vendedores. De esta manera, en forma muy
                        sencilla, transparente y dinámica, ambas partes podrán negociar libremente y en
                        confidencialidad con ínfimos costos operativos.</p>
                    <p style={{textDecoration: 'underline'}}><strong>VENTAJAS</strong></p>
                    <p>&nbsp; &nbsp;* Lograr un amplio nivel de acercamiento entre compradores y vendedores a
                        nivel nacional.<br/>
                        &nbsp; &nbsp;* Rapidez y seguridad en las comunicaciones.<br/>
                        &nbsp; &nbsp;* Posibilidad de recibir mayor número de ofertas o demandas.<br/>
                        &nbsp; &nbsp;* Transparencia en todas las transacciones.<br/>
                        &nbsp; &nbsp;* Proceso de negociación más rápido. <br/>
                        &nbsp; &nbsp;* Compradores: excelencia en la información de costos y de calidad de
                        compras.<br/>
                        &nbsp; &nbsp;* Vendedores: excelencia en la calidad de ventas con bajísimos costos
                        operativos y operaciones más claras y efectivas. <br/>
                    </p>
                    <p><strong>Atentamente</strong></p>
                    <p>&nbsp; &nbsp;SUPNUEVO</p>
                    <p>&nbsp; &nbsp;Sistema Online Supnuevo SRL</p>
                    <p>&nbsp; &nbsp;www.supnuevo.com.ar</p>
                    <p>&nbsp; &nbsp;Noticia publicada por Supnuevo el&nbsp;
                        <time>25-03-2016</time>
                    </p>
                    <br/>
                </figure>

                <div className="infor">
                    <h3>NOVEDADES</h3>
                </div>

                <div className="more">MÁS NOTICIAS</div>
            </div>

        return contains;
    },
})
module.exports = News;