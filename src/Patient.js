import React, { Component } from 'react';

import User from './assets/user.png';

import 'bulma/css/bulma.css';

class Patient extends Component {

    render() {
        return (
            <tr key={this.props.patient.id} className="patient">
                <td className="patientData">
                    <div width="100%">{`${this.props.patient.firstName}  ${this.props.patient.lastName}`}</div>
                    <img src={User} width="40px" alt="user" />
                </td>
                <td className="patientData"><img src={this.props.patient.score} width="175px" alt="score" /></td>
                <td className="patientData"><img src={this.props.patient.track} width="300px" alt="track-chart" /></td>
                <td className="patientData linkImage"><img src={this.props.patient.pie} width="150px" alt="pie-chart" onClick={this.props.displayModal} /></td>
                <td className="patientData"><img src={this.props.patient.steps} width="100px" alt="step-count" /></td>
            </tr>
        );
    }
}

export default Patient;