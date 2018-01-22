import React from 'react';
import ReactDOM from 'react-dom';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
        console.log(items[i]);
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}
ReactDOM.render(<ListOfTenThings />,document.getElementById('root'));