import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/home.css';
import '../../css/entry/modules/app.css';

var App =React.createClass({

    render:function(){

     return (
         <div>
             {this.props.children}
         </div>
     )}
});
export default App;