import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './PlayNine.css';
import Button from './Button'
import Stars from './Stars'
import Answer from './Answer'
import Numbers from './Numbers'
import DoneFrame from './DoneFrame'
import _ from 'lodash';
//---------------------------------------------------------- possibleCombinationSum
//-----------------------------this function is available on link https://gist.github.com/samerbuna/aa1f011a6e42d6deba46 [explaination not given]
let possibleCombinationSum = (arr, n) => {
    if (arr.indexOf(n) >= 0) {
        return true;
    }
    if (arr[0] > n) {
        return false;
    }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount; i++) {
        var combinationSum = 0;
        for (var j = 0; j < listSize; j++) {
            if (i & (1 << j)) {
                combinationSum += arr[j];
            }
        }
        if (n === combinationSum) {
            return true;
        }
    }
    return false;
};

export default class Game extends React.Component {
    static randomNumber = () => 1 + Math.floor(Math.random()*9);
    static initialState = () => ({
        selectedNumbers:[],
        randomNumberOfStars : Game.randomNumber(),//floor rounds down the number to the nearest integer,
        usedNumbers: [],
        answerIsCorrect: null,
        redraws:5,
        doneStatus:null,
    });
state= Game.initialState();
//----------------------------------resetGame function
    resetGame = () => this.setState(Game.initialState());
//----------------------------------selectNumber
    selectNumber = (clickNumber) =>{
        if(this.state.selectedNumbers.indexOf(clickNumber)>=0){return;}
            this.setState(prevState =>({
                answerIsCorrect:null,
                selectedNumbers:prevState.selectedNumbers.concat(clickNumber)
        }));//setState
    }//end selectNumber

    unselectNumber = (clickedNumber) =>{
        this.setState(prevState =>({
            answerIsCorrect:null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber
            )
        }));
    }
//----------------------------------checkAnswer function
    checkAnswer = () =>{
        this.setState(prevState =>({
            answerIsCorrect: prevState.randomNumberOfStars ===
                prevState.selectedNumbers.reduce((acc,n) => acc+n,0)
            })

        );
    }
//----------------------------------acceptAnswer function
    acceptAnswer = () =>
    {
        this.setState(prevState =>({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect:null,
            randomNumberOfStars:Game.randomNumber(),
            }),this.updateDoneStatus
        );
    }
//----------------------------------redraw function
    redraw = () => {
        if(this.state.redraws === 0 ){return;}
        this.setState(prevState =>(
            {
                randomNumberOfStars:Game.randomNumber(),
                answerIsCorrect: null,
                selectedNumbers: [],
                redraws:prevState.redraws-1,
            }
        ),this.updateDoneStatus);
    }

    //--------------------------------------------- possibleSolutions
    possibleSolutions = ({randomNumberOfStars,usedNumbers}) => {
        const possibleNumbers = _.range(1,10).filter(number =>
            usedNumbers.indexOf(number) === -1);
        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    }

//----------------------------------updateDoneStatus function
updateDoneStatus = () => {
        this.setState(
            prevState =>{
                if(prevState.usedNumbers.length === 9){
                    return {doneStatus:'Done Nice'};
                }

                if(prevState.redraws === 0 && !this.possibleSolutions(prevState)){
                    return {doneStatus:'Game Over'};
                }
            }
        );
}
//----------------------------------render function
    render() {
        const {
            doneStatus,
            redraws,
            selectedNumbers,
            randomNumberOfStars,
            answerIsCorrect,
            usedNumbers} = this.state;
      return <div className="container">
          <h3>Play Nine</h3>
          <hr/>
          <div className="row">
              <Stars numberOfStars={randomNumberOfStars}/>
              <Button selectedNumbers={selectedNumbers}
                      checkAnswer={this.checkAnswer}
                      acceptAnswer={this.acceptAnswer}
                      redraw={this.redraw}
                      answerIsCorrect={answerIsCorrect}
                      redraws={redraws}

              />
              <Answer selectedNumbers={selectedNumbers}
                      unselectNumber={this.unselectNumber}
              />
          </div>
          <br/>
          {
              doneStatus?<DoneFrame doneStatus={doneStatus}
                                    resetGame={this.resetGame}
                  />:
                  <Numbers selectedNumbers={selectedNumbers}
                           selectNumber={this.selectNumber}
                           usedNumbers={usedNumbers}
                  />
          }



      </div>;
    }
}//end Game

