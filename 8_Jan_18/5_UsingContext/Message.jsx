import React from 'react';
import Button from './Button.jsx';
export default class Message extends React.Component{
    render()
    {
        return (
            <div>

                <Button color={this.props.color}>
                    {this.props.text}
                </Button>
            </div>
        );//end return
    }//end render
}//end class