import React, { Component } from 'react';

class CustomTextInput extends Component {
    constructor(props){
        super(props);
        this.focusTextInput = this.focusTextInput.bind(this);
    }//end constructor

    focusTextInput()
    {
        this.textInput.focus();
    }

    render()
    {
        return(
        <div>
            <input type="text"
                   ref={(input) => {this.textInput = input;}} />
            <input type="button"
                   value="Click To Get Focus On TextBox With Default Red Borders...."
                   onClick={this.focusTextInput}
            />
        </div>
        );
    }//end render
}

export default CustomTextInput;
