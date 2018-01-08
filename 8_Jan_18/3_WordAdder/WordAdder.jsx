import React from 'react';
import ListOfWords from './ListOfWords.jsx'

export default class WordAdder extends React.Component
{
    constructor(props)
    {
        super(props);
       this.state = {words : ['marklar']}
    }//end constru

    handleClick = () =>{
        this.setState(prevState => ({
            words: prevState.words.concat(['marklar'])
        }));
    }//end handleClick

    render()
    {
        return(
            <div>
                <button onClick={this.handleClick}>
                    Button
                </button>

                <ListOfWords words={this.state.words}/>
            </div>
        );//end return
    }//end render
}