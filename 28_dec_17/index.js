import React from 'react';
import ReactDOM from 'react-dom';
import Post from './PostComp.jsx';
// var post1 = {
//     title:'react v0.5',
//     content1:'the result is release of serveral months',
//     comments:['Great Work','Machine Dont work','Learn React']
// };//end of post data
ReactDOM.render(<Post data="test" />, document.getElementById('root'));
