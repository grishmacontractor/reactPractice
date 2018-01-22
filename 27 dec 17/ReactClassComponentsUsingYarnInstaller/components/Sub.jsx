import React from 'react';

export default class Sub1 extends React.Component {
    render() {
        return (
            <div style={{color: 'red'}}>
                <h1>Sub function</h1>
                <h2>result of 7-6 ={subtract(7,6)}</h2>
            </div>);
    }


}
function subtract(a,b)
{
    return a-b;
}