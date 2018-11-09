import React, { Component } from 'react';
import Header from './Header';
import Patient from './Patient';
import ItemsModal from './ItemsModal';

import pie1 from './assets/pie.png';
import track1 from './assets/track.png';
import score1 from './assets/score.png';
import steps1 from './assets/steps-green.png';
import pie2 from './assets/pie2.png';
import track2 from './assets/track2.png';
import score2 from './assets/score2.png';
import steps2 from './assets/steps-red.png';
import pie3 from './assets/pie3.png';
import track3 from './assets/track3.png';
import score3 from './assets/score3.png';
import steps3 from './assets/steps-yellow.png';

import 'bulma/css/bulma.css';

class PatientList extends Component {

    state = {
        patients: [
            {
                id: 1,
                firstName: 'Austin',
                lastName: 'Rosenbaum',
                score: score1,
                track: track1,
                pie: pie1,
                steps: steps3
            },
            {
                id: 2,
                firstName: 'Pratik',
                lastName: 'Hanagodimath',
                score: score2,
                track: track2,
                pie: pie2,
                steps: steps1
            },
            {
                id: 3,
                firstName: 'Isaac',
                lastName: 'Hookom',
                score: score3,
                track: track3,
                pie: pie3,
                steps: steps2
            }
        ],
        modalIsActive: false
    };

    displayModal = this.displayModal.bind(this);
    closeModal = this.closeModal.bind(this);

    displayModal() {
        this.setState({modalIsActive: true});
    }

    closeModal() {
        this.setState({modalIsActive: false});
    }

    render() {
        return (
            <div>
                <Header />
                <section className="section full-column">
                    <div className="container patient-list">
                        <table className="table is-striped boxShadow">
                            <tbody>
                                {
                                    this.state.patients.map(patient => {
                                        return (<Patient key={patient.id} patient={patient} displayModal={this.displayModal} />);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <ItemsModal isActive={this.state.modalIsActive} closeModal={this.closeModal} />
                </section>
            </div>
        );
    }
}

export default PatientList;