//functional component to highlight text
import React from 'react';
import ReactDOM from 'react-dom';
function Highlight(props)
{
    return <h1>Text to highlight is <br/><mark>{props.name}</mark></h1>
}
const element=<Highlight name="Grishma"/>
ReactDOM.render(element, document.getElementById('root'));