import React, { Component } from 'react';
import Table from './Table.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Aqua Gorilla</h1>
          <Table />
        </header>
      </div>
    );
  }
}

export default App;
