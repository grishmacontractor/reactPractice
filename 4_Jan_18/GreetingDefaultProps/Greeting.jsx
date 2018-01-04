import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Greeting extends Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}//end class

Greeting.defaultProps = {name:'Stranger'};


export default Greeting;
