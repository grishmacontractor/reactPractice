import React from 'react'
function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} minLength="5" />
        </div>
    );
}

class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        );
    }
}
export default Parent;