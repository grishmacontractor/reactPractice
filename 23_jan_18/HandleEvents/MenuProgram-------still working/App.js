import React from 'react';

export default class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data:0
        }
    }
    handleClick = (index) =>  {
        alert(index)
     this.setState({data: index})
    }


    render() {
        const items1= this.props.items;
        const listitems = items1.map((m,index) => {
            //alert(m)
            <li key={index}  onClick={this.handleClick(index)}>{m}</li>
        })
        return (
            <div>
                <ul>
                    <listitems />
                </ul>

                <p>Selected: {this.props.items[this.state.data]}</p>
            </div>
        )
    }
}
