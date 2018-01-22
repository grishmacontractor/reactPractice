import React from 'react';
import Button from './Button.jsx';
export default class Message extends React.Component{
    render()
    {
        return (
            <div>
                {this.props.text}
                <Button color={this.props.color}>
                    Delete
                </Button>
            </div>
        );//end return
    }//end render
}//end class