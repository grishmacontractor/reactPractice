import React from 'react';
import ListItem from './ListItem.jsx';

class NumberList extends React.Component{
    render()
    {
        const numbers=this.props.number;
        const listItems=numbers.map((number) => <ListItem key={number.toString()} value={number} />);
        return(<div><h1>number list</h1><ul>{listItems}</ul></div>);
    }//eo render
}//end of NumberList
export default NumberList;
