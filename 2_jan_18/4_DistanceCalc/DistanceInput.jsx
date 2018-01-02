import React from 'react';
const scaleNames = {
    cm: 'Centimeter',
    mts: 'Meter'
};

class DistanceInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onDistChange(e.target.value);
    }

    render() {
        const dist = this.props.dist;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter Dist in {scaleNames[scale]}:</legend>
                <input value={dist}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}
export default DistanceInput;
