//program to display welcome component
import React from 'react';
import ReactDOM from 'react-dom';
function Welcome(props)
{
    return <h1>Using user-defined Welcome Component
        <br/>Welcome,{props.name}</h1>
}
const element=<Welcome name="Grishma"/>
ReactDOM.render(element, document.getElementById('root'));
