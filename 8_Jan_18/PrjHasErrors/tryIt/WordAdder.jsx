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
            let: val=this.input.value,
            //words: prevState.words.concat({[val]})
            words: val
        }));
    }//end handleClick

    render()
    {
        return(
            <div>
                <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <button onClick={this.handleClick}>
                    Button
                </button>

                <ListOfWords words={this.state.words}/>
            </div>
        );//end return
    }//end render
}