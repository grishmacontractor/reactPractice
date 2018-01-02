import React, { Component } from 'react';
import SplitPane from './SplitPane.jsx';
import './ColorBorders.css';

function Contacts() {
    return <div className="Contacts">contacts div</div>;
}

function Chat() {
    return <div className="Chat">chat div</div>;
}

class App1 extends Component {
  render() {
    return (
      <SplitPane left={<Contacts />} right={<Chat />}/>
    );
  }
}

export default App1;
