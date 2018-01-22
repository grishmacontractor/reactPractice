import React from 'react';
import ReactDOM from 'react-dom';
import Glossary from './Glossary'
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
const data = [
    {id:1,
        term:'A2A',
        description:'application-to-application An approach to enterprise application integration that provides visibility into internal systems, so that these systems can share information or business processes.'},
    {id:2,
        term:'AA',
        description:'automated attendant\tA device, typically attached to a private branch exchange or voice mail system, that answers incoming calls.'},
];
ReactDOM.render(<Glossary items={data} />, document.getElementById('root'));

