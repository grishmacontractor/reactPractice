//the Emp component will be reused by App component
import React, { Component } from 'react';
class Emp extends Component
{
    render() {
        return (
                <table>
                    <tr><th>SR.No</th><th>Name</th></tr>
                    <tr><td>1</td><td>John</td></tr>
                    <tr><td>2</td><td>Kabir</td></tr>
                    <tr><td>3</td><td>Alice</td></tr>
                </table>
        );
    }
}
export default Emp;