import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './PlayNine.css';
import Button from './Button'
import Stars from './Stars'
import Answer from './Answer'
import Numbers from './Numbers'

export default class Game extends React.Component {
    state = {
        selectedNumbers:[],
        randomNumberOfStars : 1 + Math.floor(Math.random()*9),//floor rounds down the number to the nearest integer,
        answerIsCorrect: null,

    };
    selectNumber = (clickNumber) =>{
        if(this.state.selectedNumbers.indexOf(clickNumber)>=0){return;}
            this.setState(prevState =>({
                selectedNumbers:prevState.selectedNumbers.concat(clickNumber)
        }));//setState
    }//end selectNumber

    unselectNumber = (clickedNumber) =>{
        this.setState(prevState =>({
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber
            )
        }));
    }

    checkAnswer = () =>{
        this.setState(prevState =>({
            answerIsCorrect: prevState.randomNumberOfStars ===
                prevState.selectedNumbers.reduce((acc,n) => acc+n,0)
            })

        );
    }
    render() {
        const {selectedNumbers, randomNumberOfStars, answerIsCorrect} = this.state;
      return <div className="container">
          <h3>Play Nine</h3>
          <hr/>
          <div className="row">
              <Stars numberOfStars={randomNumberOfStars}/>
              <Button selectedNumbers={selectedNumbers}
                      checkAnswer={this.checkAnswer}
                      answerIsCorrect={answerIsCorrect}
              />
              <Answer selectedNumbers={selectedNumbers}
                      unselectNumber={this.unselectNumber}
              />
          </div>
          <br/>
          <Numbers selectedNumbers={selectedNumbers}
                   selectNumber={this.selectNumber}
          />
      </div>;
    }
}//end Game

