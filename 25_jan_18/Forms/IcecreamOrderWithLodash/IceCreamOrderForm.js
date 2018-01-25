import React from 'react';
import _ from 'lodash';
export default class IceCreamOrder extends React.Component {
    constructor()
    {
        super()
        this.state = {data:'no order submitted'}
    }
    handleSubmit = (event) => {
        event.preventDefault()

        let checks = event.target.getElementsByClassName('c1')
        let str = " "
        let str1 = ''
      // str= ' Name : '+this.refs.name1.value+' ';
        for(let i=0;i<checks.length;i++)
        {
            if(checks[i].checked)
            {
                str+=checks[i].value+' , '
            }//console.log(str)
        }
       let abc = {
            'Person Name : ': this.refs.name1.value,
            'Ice cream Base :': this.refs.r1.value,
            'Ice cream Flavor :': this.refs.s1.value,
            'Extra Toppings :': str
        }


       // this.setState({data:abc.json.toString()})
     // str = str + 'Extra Toppings :'+str1 +'\n Ice cream Base : '+this.refs.r1.value;
      // str = str +'\n Ice cream Flavor : '+this.refs.s1.value;
        _.forIn(abc, function(value, key) {

            str1+=key+':'+value+'  || '
            console.log(key+value);
        })
         this.setState({data:str1})
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <table style={{border:'1px solid'}} cellPadding={'5px'} cellSpacing={'5px'}>
                    <caption>Ice cream ordering form in React</caption>
                    <tbody>
                    <tr>
                        <td>Select Base</td>
                        <td>:</td>
                        <td><input type='radio' ref='r1' name='ra1' defaultChecked value='Cup'/>Cup
                            <input type='radio' ref='r1' name='ra1' value='Cone'/>Cone
                        </td>
                    </tr>
                    <tr>
                        <td>Select Flavour</td><td>:</td>
                        <td>
                            <select ref='s1'>
                                <option value='Mango'>Mango</option>
                                <option value='Chocolate Chips'>Chocolate Chips</option>
                                <option value='Strawberry'>Strawberry</option>
                                <option value='Custard Apple'>Custard Apple</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Extra Toppings</td>
                        <td>:</td>
                        <td>
                            <input type='checkbox' className='c1' value='Dry Fruits'/>Dry Fruits
                            <input type='checkbox' className='c1' value='Cherries'/>Cherries
                            <input type='checkbox' className='c1' value='Excess Chocolate'/>Excess Chocolate
                            <input type='checkbox' className='c1' defaultChecked value='None'/>None
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={'3'}>
                            <input type="text" placeholder="Your Name Please" ref='name1'/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={'3'}>
                            <input type={'submit'} value='Place Order'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>

                <div style={{border:'1px solid'}}>
                    <h3>Order Details</h3>
                    {this.state.data}
                </div>
            </div>
        )
    }
}
