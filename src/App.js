import React, { Component } from 'react';
import Panel from './components/Panel.js'
import logo from './images/calculator.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">出题器</h1>
        </header>
        <Panel  />
      </div>
    );
  }
}


export default App;
