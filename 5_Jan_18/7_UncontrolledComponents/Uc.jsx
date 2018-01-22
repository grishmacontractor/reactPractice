import React from 'react'
export default class Uc extends React.Component{
    //As handleSubmit func is written as Arrow Function So there is no need to bind it explicitly in constructor.
    handleSubmit = ()=>{
        console.log(this.name.value);
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