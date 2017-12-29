import React from 'react';
import ReactDOM from 'react-dom';
import Page from './FlavorForm.jsx';
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number*2);
console.log(doubled);
ReactDOM.render(<Page />, document.getElementById('root'));
