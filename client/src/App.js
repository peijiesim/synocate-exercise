import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data</h1>
        </header>
      </div>
    );
  }
}

export default App;
