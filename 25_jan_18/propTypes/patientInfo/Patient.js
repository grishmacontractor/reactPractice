import React from 'react';
import PropTypes from 'prop-types';

export default class Patient extends React.Component {
    render() {
        return (
            <div>
                <h1>PATIENT INFORMATION</h1>
                <h2>Patient Name :, {this.props.name}</h2>
                <h2>Receipt Id :, {this.props.receptid}</h2>
                <h2>Medicines :, {this.props.medicines.toString()}</h2>

            </div>
        )
    }

}
Patient.defaultProps = {
    name: 'Specify Patient Info'
}
Patient.propTypes = {
    name: PropTypes.string,
    receptid: PropTypes.number,
    medicines: PropTypes.array
}
// Specifies the default values for props:
