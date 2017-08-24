import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/home.css'
import foot from "../../data/foot.json"

var Foot = React.createClass({

    getInitialState:function () {
        var language = this.props.language;
        var data = null;
        if(language=="Chinese"){
            data = foot[1];
        }else {
            data = foot[0];
        }
        return({
            data:data,
            language:language,
        })
    },
    render: function () {
        var contains = null;
        var content = this.state.data.content;
        contains =
            <div className="end">
                {content}
            </div>

        return contains;
    },

})
module.exports=Foot;