import React from 'react'

export default class Checkboxes extends React.Component {
    constructor()
    {
        super()
        this.state = {data:'no order submitted'}
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let checks = event.target.getElementsByClassName('c1')
        for(let i=0;i<4;i++)
        {
            if(checks[i].checked)
            {
                console.log(checks[i].value)

            }
        }

    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                             <input type='checkbox' className='c1' value='Dry Fruits'/>Dry Fruits
                            <input type='checkbox' className='c1' value='Cherries'/>Cherries
                            <input type='checkbox' className='c1' value='Excess Chocolate'/>Excess Chocolate
                            <input type='checkbox' className='c1' defaultChecked value='None'/>None

                <input type={'submit'} value='Place Order'/>
             </form>

                <div style={{border:'1px solid'}}>
                    <h3>YOUR SELECTED DATA IS</h3>
                    {this.state.data}
                </div>
            </div>
        )
    }
}
