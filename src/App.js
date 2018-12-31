import React, { Component } from 'react';
import RiverTable from './Table.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Aqua Gorilla</h1>
          <RiverTable />
        </header>
      </div>
    );
  }
}

export default App;
