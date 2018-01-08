import React from 'react';
export default class Button extends React.Component{
    render()
    {
        return (
            <button style={{background: this.props.color}}>
                {this.props.children}
            </button>
        );//end return
    }//end render
}//end class