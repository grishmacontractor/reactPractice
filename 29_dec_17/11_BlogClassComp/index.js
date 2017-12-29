import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog.jsx';

const posts = [
    {id:1, title:'SchoolFees', content:'increase be 10%'},
    {id:2, title:'CollegeFees', content:'increase be 20%'}
];
ReactDOM.render(<Blog posts={posts}/>, document.getElementById('root'));
