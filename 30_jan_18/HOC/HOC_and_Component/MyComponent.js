import React from 'react'

export default class MyComponent extends React.Component {
    render() {
        return (
            <p>
                <h1 name="abc" data="child data">{this.props.data}</h1>
            </p>
        )
    }
}

