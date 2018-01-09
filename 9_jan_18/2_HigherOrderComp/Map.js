import React, { Component } from 'react';
import EnhanceComponent from './EnhanceComponent';
class Map extends Component{
    render(){
        return (
        <div>
            I am a map component
        </div>
        );//end return
    }
}
export default EnhanceComponent(Map);