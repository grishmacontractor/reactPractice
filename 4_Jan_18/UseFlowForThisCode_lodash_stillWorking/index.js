// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
var _ = require('lodash');
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
var e1 = document.getElementById('pad');
if (e1 == null) {
    throw new Error("no pad element");
}

//let e1 = document.getElementById('root');

//let er={throw:new Error("no such element")};
//function abc(){throw new Error('no such element');}

/*_.isNull(e1) ?
    abc()
    :
    ''*/
//<MyComponent foo={42} bar="hi" />;
ReactDOM.render(<MyComponent foo={10} bar="hi" />,e1);
