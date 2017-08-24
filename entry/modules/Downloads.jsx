import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/func.css'

var Downloads = React.createClass({

    render: function () {
        var contains = null;
        contains =

            <div className="list">
                <div className="infor">
                    <h3>PASO 1</h3>
                </div>
                <figure className="paso1">
                    <img src="/images/download1.png" id="imgdownload1"/>
                    <div className="contentdownload">
                        <ol id="point1">
                            <li>
                                <mark>1</mark>
                                ：Descargue e instale por primera y única vez el Programa Java.
                            </li>
                            <li>
                                <mark>2</mark>
                                ：Vaya a Descargar Java. Luego: Guardar Archivo / ¿Desea permitir que el programa
                                realice cambios en su equipo? SI / Instalar
                            </li>
                        </ol>
                    </div>
                </figure>
                <div className="infor">
                    <h3>PASO 2</h3>
                </div>
                <figure className="news">
                    <img src="/images/download2.png"/>
                    <div className="contentdownload">
                        <ol id="point2">
                            <li>
                                <mark>1</mark>
                                ：DESCARGAR SOFTWARE S.O.S. srl (Supnuevo). Sugerimos guardarlo en ESCRITORIO para
                                tenerlo ubicado como Acceso Rápido.
                            </li>
                            <li>
                                <mark>2</mark>
                                ：Aconsejamos actualizar a la última versión de S.O.S. Le informaremos cuando hacerlo
                                por medio del sector “CONSULTAS” que lo verá al abrir el programa. Ésta última
                                versión será compatible con la anterior por lo cual los datos que haya ingresado con
                                anterioridad no se perderán.
                            </li>
                            <li>
                                <mark>3</mark>
                                ：Ya tiene el programa instalado en su PC. Ahora solo tiene que elegir idioma,
                                ingresar Usuario, Clave y puede comenzar a operar.
                            </li>
                        </ol>
                    </div>
                </figure>
                <div className="infor">
                    <h3>PASO 3</h3>
                </div>
                <figure className="news">
                    <img src="/images/download3.png"/>
                    <div className="contentdownload">
                        <ol id="point3">
                            <li>
                                <mark>1</mark>
                                ：DESCARGAR PROGRAMA COMMODITY
                            </li>
                            <li>
                                <mark>2</mark>
                                ：Este es un programa de gestión integral desarrollado para el <span
                                style={{textDecoration: 'underline'}}>Usuario Vendedor</span>. Es un programa que una
                                vez instalado en su computadora no interactúa en Internet. Permite que, luego de
                                cargarse los productos con sus precios, estos sean importados desde el programa
                                S.O.S (Supnuevo) del vendedor en forma sencilla.
                            </li>
                            <li>
                                <mark>3</mark>
                                ：Sugerimos guardar una copia en ESCRITORIO para tenerlo ubicado como Acceso Rápido.
                            </li>
                        </ol>
                    </div>
                </figure>
            </div>

        return contains;
    },
})
module.exports = Downloads;