import React, { Component } from 'react';
import './ColorBorders.css';
import FancyBorder from './FancyBorder.jsx';

class Dialog extends Component{
    render()
    {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <p className="Dialog-message">
                    {this.props.message}
                    {this.props.children}
                </p>

            </FancyBorder>
        );//end return
    }//end render
}
export default Dialog;
