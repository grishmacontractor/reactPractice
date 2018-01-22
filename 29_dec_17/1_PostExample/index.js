import React from 'react';
import ReactDOM from 'react-dom';
import Post from './1_PostExample/PostComp.jsx';
var post1 = {
    title:'react v0.5',
    content:'the result is release of serveral months',
    comments:['Great Work','Machine Don\'t work','Learn React']
};//end of post data
ReactDOM.render(<Post data={post1} />, document.getElementById('root'));
