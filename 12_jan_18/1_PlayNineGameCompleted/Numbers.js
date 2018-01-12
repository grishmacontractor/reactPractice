import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './PlayNine.css';
import _ from 'lodash';

const Numbers = (props) => {
    const numberClassName = (number) =>{
        if(props.usedNumbers.indexOf(number) >= 0){
            return 'used';
        }
        if(props.selectedNumbers.indexOf(number) >= 0){
            return 'selected';
        }
    }//numberClassName
        return(
        <div className="card text-center">
            <div>
                {
                    Numbers.list.map((number,index)=>{
                       return <span key={index}
                                    className={numberClassName(number)}
                                    onClick={() =>props.selectNumber(number)}
                       >
                           {number}
                                    </span>
                    })
                }
            </div>
        </div>
    );
}
Numbers.list = _.range(1,10);
export default Numbers;