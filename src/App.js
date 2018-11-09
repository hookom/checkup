import React, { Component } from 'react';
import './App.css';
import PatientList from './PatientList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PatientList /> 
      </div>
    );
  }
}

export default App;
