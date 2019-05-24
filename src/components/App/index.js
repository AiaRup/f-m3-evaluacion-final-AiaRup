import React, { Component } from 'react';
import './styles.scss';
import { fetchCharacters } from '../../services/fetchCharacters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="app" />;
  }
}

export default App;
