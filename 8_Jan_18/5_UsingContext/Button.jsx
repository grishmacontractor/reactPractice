import React from 'react';
import PropTypes from 'prop-types';
export default class Button extends React.Component{
    render()
    {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );//end return
    }//end render
}//end class

Button.contextTypes = {
    color: PropTypes.string
};