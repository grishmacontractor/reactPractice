import React from 'react'
export default class ControlledC extends React.Component{
    //As handleSubmit func is written as Arrow Function So there is no need to bind it explicitly in constructor.
   constructor()
   {
       super();
       this.state={name:""}
   }
    handleSubmit = ()=>{
        console.log(this.state.name);
    }
    onInputChange = (event) => {
       this.setState({name:event.target.value});
    }
    render()
    {
        return(
            <div>
                <input type="text" defaultValue="Bob" value={this.state.name} onChange={this.onInputChange} />
                    <button disabled={this.state.name.length ? false: true} onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}//end of class