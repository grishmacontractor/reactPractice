import React, { Component } from 'react';
import Columns from './Columns';
class Table extends Component {
    render() {
        return (
            <table border="1">
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

export default Table;
