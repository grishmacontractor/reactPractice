import React from 'react';

export default class ChildComponent extends React.Component {

    render() {
        return (
            <div>
            <input type='button' onClick={this.props.callParentMethod} value='Button In ChildComponent' />
            </div>
        )
    }
}
