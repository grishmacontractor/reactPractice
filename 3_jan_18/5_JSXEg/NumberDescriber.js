import React from 'react';
import ReactDOM from 'react-dom';

function NumberDescriber(props)
{
    let description;
    if(props.number % 2 === 0) {
        description = <b>odd</b>;
    }
    else {
        description = <i>even</i>;
    }

        return <div>{props.number} is an {description} number</div>;
}
ReactDOM.render(<NumberDescriber number="4"/>,document.getElementById('root'))