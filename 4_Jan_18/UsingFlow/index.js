// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

type Props = {
    foo: number,
    bar: string,
};

class MyComponent extends React.Component<Props> {
    render() {
        //this.props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

        return <div>{this.props.bar}</div>;
    }
}
let e1 = document.getElementById('root');
if (e1 == null) {
    throw new Error("no root element");
}
//<MyComponent foo={42} bar="hi" />;
ReactDOM.render(<MyComponent foo={10} bar="hi" />, e1);

/*
import React from 'react';
import ReactDOM from 'react-dom';
//import Greeting from './Greeting.jsx';


type Props = {
    foo: number,
    bar: string,
};

class MyComponent<Props> extends React.Component<Props>{
    render() {
        const bar1 = this.props.foo; // Error! You did not define a `doesNotExist` prop.

        return <div>{bar1}</div>;
    }
}



ReactDOM.render(<MyComponent foo={10} bar="hello" />, document.getElementById('root'));

*/
