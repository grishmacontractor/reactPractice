//program to disp additon value in a constant element
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
ReactDOM.render(add(5,1), document.getElementById('root'));
function add(a,b) {
    var c=a+b;
    const element=(
        <div><h1>value of c is {c}</h1></div>
    );
    return element;
}
