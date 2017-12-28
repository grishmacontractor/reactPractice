import React from 'react';
function Clock(props){
    return(
        <div>
            <h1>Current Time</h1>
            <h2>It is {props.date1.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock;
/*
function tick() {
    ReactDOM.render(<Clock date1={new Date()}/>, document.getElementById('root'));
}*/