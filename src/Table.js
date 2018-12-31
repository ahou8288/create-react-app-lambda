import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class RiverTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  
  componentDidMount() { 
    fetch('/.netlify/functions/rivers')
    .then(response => response.json())
    .then(response => this.setState({
      data: response
    }))
  }

  render() {
   // Generate table rows
    const rows = this.state.data.map((row, index) => { return(
      <TableRow key={index}>
        <TableCell>{row.river}</TableCell>
        <TableCell align='right'>{row.height}</TableCell>
        <TableCell>{row.time}</TableCell>
      </TableRow>
    )});

    return (
      <div>
          <h2>River Levels</h2>
          <Table style={{ width: 1200 }}>
            <TableHead>
              <TableRow>
                <TableCell>River</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
      </div>
    );
  }
}

export default RiverTable;