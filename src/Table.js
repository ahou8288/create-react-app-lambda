import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  fetchLevels = function function_name() {
    fetch('/.netlify/functions/rivers')
      .then(response => response.json())
      .then(res => this.setState({
          data: res.data.rows,
          loading: false
        }));
  }

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <h2>River Levels</h2>
        <ReactTable
          defaultPageSize={10}
          columns={[
            {
              Header: "River",
              accessor: "river"
            },
            {
              Header: "Height",
              accessor: "height"
            },
            {
              Header: "Time",
              accessor: "time"
            }
          ]}
          data={this.state.data} // should default to []
          pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
          loading={this.state.loading}
          manual // informs React Table that you'll be handling sorting and pagination server-side
          onFetchData={(state, instance) => {
            // show the loading overlay
            this.setState({loading: true});
            // fetch your data
            this.fetchLevels();
          }}
        />
      </p>
    );
  }
}

export default Table;