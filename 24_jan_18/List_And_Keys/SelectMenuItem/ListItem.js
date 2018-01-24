import React from 'react'

export default class ListItem extends React.Component {
        render() {
            return (
            <div>
            <li  key={this.props.id1}  id={this.props.id1} value={this.props.value1}>{this.props.value1}</li>
            </div>
            )
        }
}
