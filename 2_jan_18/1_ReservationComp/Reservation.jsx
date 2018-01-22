import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }//end constructor

    handleInputChange(event){
        const target=event.target;
        const value=target.type === 'checkbox' ? target.checked : target.value;
        console.log("targeType "+target.type);
        console.log("targechecked "+target.checked);
        console.log("targevalue "+target.value);
        console.log("targename "+target.name);
        const name = target.name;

        this.setState({[name]:value});
    }//eo handleInputChange
  render() {
    return (
        <form>
            <label>
                IsGoing: <input name="isGoing"
                                 type='checkbox'
                                 checked={this.state.isGoing}
                                 onChange={this.handleInputChange} />{this.state.isGoing}
            </label>
            <br/>
            <label>
                Number of guests:
                <input name="numberOfGuests"
                       type="number"
                       value={this.state.numberOfGuests}
                       onChange={this.handleInputChange}/>
            </label>
        </form>
    );
  }
}

export default Reservation;
