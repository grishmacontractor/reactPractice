import React from 'react';

export default class VacancySign extends React.Component {
    render() {
        let text;
        if (this.props.hasvacancy) {
            text = 'Vacancy';
        } else {
            text = 'No Vacancy';
        }
        return <div>{text}</div>;
    }
}
