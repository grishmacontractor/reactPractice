import React from 'react';
import  './App.css'

export default class Panel extends React.Component {

   render() {
        return (
            <div>
                <h2>title : {this.props.title}</h2>
            <div>


                    {this.props.children}

            </div>
            </div>
        )
    }
}
