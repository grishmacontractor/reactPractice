import React from 'react'
function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef1} minLength="5" />
        </div>
    );
}

function Parent(props){
        return (
            <h2>
           My Input : <CustomTextInput inputRef1={props.inputRef} />
            </h2>
        );
}

class GrandParent extends React.Component
{
    render(){
        return(
            <Parent inputRef={e1 => this.inputElement = e1} />
        );
    }
}
export default GrandParent;