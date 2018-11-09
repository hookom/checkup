import React from 'react';

import Items from './assets/items.png';
import 'bulma/css/bulma.css'

export default ({isActive, closeModal}) => (
    <div className={`modal ${isActive && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Recent Purchases</p>
            </header>
            <section className="modal-card-body">
                <img src={Items} width="400px" alt="items" />
            </section>
            <footer className="modal-card-foot">
                <button className="button" onClick={closeModal}>Close</button>
            </footer>
        </div>
    </div>
);

