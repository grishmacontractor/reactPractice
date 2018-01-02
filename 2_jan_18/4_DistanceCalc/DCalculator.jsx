import React from 'react';
import DistanceInput from './DistanceInput.jsx';


function toMeter(cm) {
    return (cm/100);
}

function toCm(mts) {
    return (mts * 100);
}

function tryConvert(dist, convert) {
    console.log("convert = "+convert);
   // const input = parseFloat(dist);
    const input = parseInt(dist,10);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    //const rounded = Math.round(output * 1000) / 1000;
   //return rounded.toString();
    return output.toString();
}
/*
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }*/
//----------------------------------------------------class calculator
class DCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCmChange = this.handleCmChange.bind(this);
        this.handleMtsChange = this.handleMtsChange.bind(this);
        this.state = {dist: '', scale: 'cm'};
    }

    handleCmChange(dist) {
        this.setState({scale: 'cm', dist});
    }

    handleMtsChange(dist) {
        this.setState({scale: 'mts', dist});
    }

    render() {
        const scale = this.state.scale;
        const dist = this.state.dist;
        const cm = scale === 'mts' ? tryConvert(dist, toCm) : dist;
        const mts = scale === 'cm' ? tryConvert(dist, toMeter) : dist;

        return (
            <div>
                <DistanceInput
                    scale="cm"
                    dist={cm}
                    onDistChange={this.handleCmChange} />
                <DistanceInput
                    scale="mts"
                    dist={mts}
                    onDistChange={this.handleMtsChange} />

            </div>
        );
    }
}
export default DCalculator;
