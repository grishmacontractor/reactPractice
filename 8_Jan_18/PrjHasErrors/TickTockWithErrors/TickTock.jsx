import React from 'react';
export default class TickTock extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={seconds:0};
    }
   componentWillMount = ()=>
   {
       console.log("componentWillMount");
       this.intervals = [];
   }//end CWM

    setInterval = () =>{
        console.log("setInterval");
       this.intervals.push(setInterval.apply(null,arguments));
    }//end SI
    componentWillUnmount = () =>{
        console.log("componentWillUnmount");
        this.intervals.forEach(clearInterval);
    }

    componentDidMount = ()=>
    {
        console.log("componentDidMount");
        this.setInterval(this.tick,1000);
    }//end CDM

    tick = ()=>
    {
        console.log("tick");
        this.setState(
            {
                seconds:this.state.seconds+1
            }
        );
    }//end tick


    render() {
        console.log("render");
        return (
            <p>React is running for {this.state.seconds} seconds......</p>
        );
    }//end render
}