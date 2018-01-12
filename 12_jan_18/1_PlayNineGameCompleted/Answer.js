import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './PlayNine.css';

const Answer =(props) => {
    return (<div style={{border:'1px solid'}}  className="col-5">
        {
            props.selectedNumbers.map((number,i) =>{
                return <span key={i}
                             onClick={()=> props.unselectNumber(number)}
                >
                    {number}
                </span>
            })
        }
           </div>);

}
export default Answer;