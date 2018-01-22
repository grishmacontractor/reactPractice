import React from 'react';
import ListOfWords from './ListOfWords.jsx'

export default class WordAdder extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {words : ['marklar']}
    }//end constru

    handleClick = (event) =>{
        let val=this.input.value;
        this.setState(prevState => ({
            words: prevState.words.concat([val])
        }));
        event.preventDefault();
    }//end handleClick

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleClick}>
                <input type="text" ref={(input) => this.input = input}/>
                <button type="submit">
                    Submit
                </button>

                <ListOfWords words={this.state.words}/>
                </form>
            </div>
        );//end return
    }//end render
}