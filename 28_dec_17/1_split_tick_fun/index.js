import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Clock from './split_clock.jsx';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
function tick() {
    ReactDOM.render(<Clock date1={new Date()}/>, document.getElementById('root'));
}
setInterval(tick,1000);