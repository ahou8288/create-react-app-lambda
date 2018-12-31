import React, { Component } from 'react';
import RiverTable from './Table.js'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aqua Gorilla
            </Typography>
          </Toolbar>
          <RiverTable />
        </header>
      </div>
    );
  }
}

export default App;
