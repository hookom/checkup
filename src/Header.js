import React, {Component} from 'react';
import CheckupLogo from './assets/checkup.png';

class Header extends Component {
    render() {
        return (
            <section className="boxShadow full-column headerContainer">
                <h1 className="title white has-text-left headerContainer">
                    <img className="logo" src={CheckupLogo} alt="checkup-logo"/>
                </h1>
            </section>
        );
    }
}

export default Header;