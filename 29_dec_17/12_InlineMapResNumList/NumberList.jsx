import React from 'react';
import ListItem from "./ListItem";

class NumberList extends React.Component{
    render()
    {
        const numbers=this.props.numbers;
        return(
            <div>
            <h1>inline map result</h1>
            <ul>
                {numbers.map((number) =>
                  <ListItem key={number.toString()} value={number}/>
                )}
            </ul>
            </div>
        );
    }//eo render
}//end of NumberList
export default NumberList;
