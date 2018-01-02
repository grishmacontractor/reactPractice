import React, { Component } from 'react';
import FancyBorder from './FancyBorder.jsx';
import './ColorBorders.css'
class WelcomeDialog extends Component {
    render() {
    return (
       <FancyBorder color="blue">
           <h1 className="h1"> Welcome </h1>
           <p>Thank you for visiting our SpaceCraft...</p>
       </FancyBorder>
    );
  }
}
export default WelcomeDialog;
