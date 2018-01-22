import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList.jsx';

var msg1 = ["Hello", "Hi", "Get Well"];

ReactDOM.render(<MessageList messages={msg1} />, document.getElementById('root'));

