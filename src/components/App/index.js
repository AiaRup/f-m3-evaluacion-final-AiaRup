import React, { Component } from 'react';
import './styles.scss';
import { fetchCharacters } from '../../services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import Home from '../Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      filterName: ''
    };
    this.getUserSearchValue = this.getUserSearchValue.bind(this);
  }

  componentDidMount() {
    this.fetcNewCharacters();
  }

  fetcNewCharacters() {
    fetchCharacters().then(results => {
      const newResults = results.map((item, index) => {
        return { ...item, id: index };
      });
      this.setState({ charactersList: newResults });
    });
  }

  getUserSearchValue(event) {
    const { value } = event.currentTarget;
    this.setState({ filterName: value });
  }

  render() {
    const { charactersList, filterName } = this.state;
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" render={() => <Home charactersList={charactersList} filterName={filterName} getUserSearchValue={this.getUserSearchValue} />} />
          <Route path="/character/:id" render={routeProps => <CharacterCard charactersList={charactersList} id={routeProps.match.params.id} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
