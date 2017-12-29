//component to display post
var React = require('react');
function  NumberList(props) {
    const numbers=props.numbers;
    const listItems=numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return(<ul>{listItems}</ul>);
}//eo NumberList fun

export default NumberList;