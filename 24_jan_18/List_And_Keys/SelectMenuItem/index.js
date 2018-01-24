import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './Lists';

const item = ['Home', 'Services', 'About', 'Contact us'];
ReactDOM.render(<Lists items={item} />, document.getElementById('root'));

