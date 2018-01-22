import React, { Component } from 'react';
import CustomTextInput from "./CustomTextInput.jsx";


class AutoFocusTextInput extends Component {
   componentDidMount()
   {
       this.textInput.focusTextInput();
   }

    render()
    {
        return (
        <CustomTextInput ref={(input) =>{this.textInput = input;}}/>
        );
    }//end render
}

export default AutoFocusTextInput;
