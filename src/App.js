import React, { Component } from 'react';
import List from './components/NestedList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Network Troubleshooter</h1>
          <List/>
      </div>
    );
  }
}

export default App;
