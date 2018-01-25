import React from 'react';
import ChildComponent from './ChildComponent'

export default class ParentComponent extends React.Component {

    parentCalled = () =>
    {
        alert("I am method of ParentComponent")
    }
    render() {
        return (
            <div>
             <ChildComponent callParentMethod={this.parentCalled}/>
            </div>
        )
    }
}
