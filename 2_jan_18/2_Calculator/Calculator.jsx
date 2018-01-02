import React, { Component } from 'react';

function  BoilingVerdict(props) {
   // console.log("in BV fun value celsius= "+props.celsius);
    if (props.celsius >= 100) {

        return <p>The Water would boil.</p>;

    }
   // console.log("out if value celsius= "+props.celsius);
    return <p>The Water would not boil.</p>;

}//end fun
class Calculator extends Component{
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.state={temperature: ''};
    }//end constructor

    handleChange(e)
    {
        this.setState({temperature:e.target.value});
        console.log("value = "+e.target.value);
    }

    render()
    {
        const temperature = this.state.temperature;
       // console.log("-------------------\nfrom render passing boiling verdict element celsius  "+parseFloat(temperature));
        return(
            <fieldset>
                <legend>
                    Enter Temperature in Celsius:
                </legend>

                <input value={temperature} onChange={this.handleChange} />

                <BoilingVerdict celsius={temperature} />
            </fieldset>
        );
    }//end render
}//end class

export default Calculator;