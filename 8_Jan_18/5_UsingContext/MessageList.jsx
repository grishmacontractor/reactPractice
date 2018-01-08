import React from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';

export default class MessageList extends React.Component{
    getChildContext()
    {
        return {color: "purple"};
    }
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
MessageList.childContextTypes = {
    color: PropTypes.string
};