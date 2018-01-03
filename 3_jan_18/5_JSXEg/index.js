import React from 'react';
import ReactDOM from 'react-dom';

// Wrong! This is a component and should have been capitalized:
function Hello(props) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
    // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
    return <Hello toWhat="World" />;
}
ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
