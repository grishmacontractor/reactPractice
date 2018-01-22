import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from './Mailbox.jsx';

const messages = ['msg1','Re:msg1','Re:Re: msg1'];
ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root'));
