/**
 * Created by panfei on 2016/11/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';

var Header = React.createClass({
    render: function() {
        return(<div>
            <h2 style={{textAlign: 'center'}}>This is a  webpack demo</h2>
        </div>)
    }
});

ReactDOM.render(<Header></Header>, document.getElementById("container"));