import React, { Component } from 'react';
export default class Glossary extends Component {
    render() {
        return (
            <dl>
                {this.props.items.map(item =>(
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                ))}
            </dl>

        );
    }
}