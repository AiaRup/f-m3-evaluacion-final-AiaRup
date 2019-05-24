import React, { Component } from 'react';
import './styles.scss';
import { fetchCharacters } from '../../services/fetchCharacters';
import { Route, Switch, Redirect } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import HouseCard from '../HouseCard';
import Home from '../Home';
import backgroundImage from '../../images/background.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      filterName: ''
    };
    this.getUserSearchValue = this.getUserSearchValue.bind(this);
    this.resetCharacterList = this.resetCharacterList.bind(this);
  }

  componentDidMount() {
    const localList = JSON.parse(localStorage.getItem('characterList'));
    if (!localList || !localList.length) {
      this.fetcNewCharacters();
    } else {
      this.setState({ charactersList: localList });
    }
  }

  fetcNewCharacters() {
    fetchCharacters('characters').then(results => {
      const newResults = results.map((item, index) => {
        return { ...item, id: index };
      });
      this.setState({ charactersList: newResults }, () => {
        localStorage.setItem('characterList', JSON.stringify(this.state.charactersList));
      });
    });
  }

  getUserSearchValue(event) {
    const { value } = event.currentTarget;
    this.setState({ filterName: value });
  }

  resetCharacterList() {
    this.setState({ filterName: '' });
  }

  render() {
    const { charactersList, filterName } = this.state;
    return (
      <div className="page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Switch>
          <Route exact path="/home" render={() => <Home charactersList={charactersList} filterName={filterName} getUserSearchValue={this.getUserSearchValue} />} />
          <Route path="/character/:id" render={routeProps => <CharacterCard charactersList={charactersList} id={routeProps.match.params.id} resetCharacterList={this.resetCharacterList} />} />
          <Route path="/house/:name" render={routeProps => <HouseCard houseName={routeProps.match.params.name} />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
