import React, { Component } from 'react';
const EnhanceComponent = BaseComponent =>{
    return class EnhancedComponent extends Component {
        state={name:'I am enhanced.......'};
        render() {
            return (
                <BaseComponent
                    {...this.state}
                    age={29}
                />
            )//end return
        }//end render
    }//end EnhancedComponent class
}//end BaseComponent
export default EnhanceComponent;