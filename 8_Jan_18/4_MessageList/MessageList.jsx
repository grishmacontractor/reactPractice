import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component{
   render()
    {
        const color="purple";
        const children1 = this.props.messages.map((message) =>
        <Message text={message} color={color} />
        );
        return (
            <div>
                {children1}
            </div>
        );//end return
    }//end render
}//end class