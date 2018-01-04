import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const children = this.props.children;
        return (
            <div>{children}</div>
        );
    }
}//end class

MyComponent.propTypes = {children: PropTypes.element.isRequired};


export default MyComponent;
