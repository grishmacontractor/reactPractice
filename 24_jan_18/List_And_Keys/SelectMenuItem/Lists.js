import React from 'react'
import ListItem from './ListItem'
export default class Lists extends React.Component {
    constructor()
    {
        super()
        this.state = {value:'Home'}
    }

    handleDisplay1 (event) {
        this.setState({value: event.target.textContent})
        //console.log(document.getElementById(event.target.id).textContent)
    }

    render() {
        const listitems = this.props.items.map((m,index) => {
            return <ListItem key={index} id1={index} value1={m}  />
        })

        return (
            <div>
                <ul value={this.state.value}  onClick={this.handleDisplay1.bind(this)}>
                {listitems}
                </ul>
                <h1 style={{color:'red'}}>
                Your selected Menu Item is  : {this.state.value}
                </h1>
            </div>
            )
    }
}
