import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';

import MessageList from './MessageList.jsx';

var msg1 = ["Hello", "Hi", "Get Well"];

ReactDOM.render(<MessageList messages={msg1} />, document.getElementById('root'));



//ReactDOM.render(<App/>, document.getElementById('root'));