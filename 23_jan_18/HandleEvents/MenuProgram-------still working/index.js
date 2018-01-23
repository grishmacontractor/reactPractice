import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './App';

const item = ['Home', 'Services', 'About', 'Contact us'];
ReactDOM.render(<Menu items={item} />, document.getElementById('root'));

