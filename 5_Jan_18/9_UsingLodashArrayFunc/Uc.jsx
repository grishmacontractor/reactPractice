/*//@flow*/
import React from 'react'
import LODASH from 'lodash/array'

export default class Uc extends React.Component{
    //type this.name: string;
    //As handleSubmit func is written as Arrow Function So there is no need to bind it explicitly in constructor.
    handleSubmit = ()=>{
        console.log(this.name.value);
        console.log(LODASH.chunk(['a', 'b', 'c', 'd'], 2));
        console.log("compact "+LODASH.compact([0, 1, false, 2, '', 3]));
        console.log("indexof "+LODASH.indexOf([1, 2, 1, 2], 2));
    }
    render()
    {
        return(
            <div>
                <input defaultValue="Bob" type="text" ref={(input) => this.name=input} />
                    <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}//end of class