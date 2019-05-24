import React, { Component } from 'react';
import './styles.scss';
import { fetchCharacters } from '../../services/fetchCharacters';

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
        <div className="page__filters">
          <label htmlFor="name">Search charachter by name</label>
          <input type="text" name="name" id="name" placeholder="start typing a character name" onChange={this.getUserSearchValue} />
        </div>
        <ul className="page__list">
          {charactersList
            .filter(character => character.name.toUpperCase().includes(filterName.toUpperCase()))
            .map(character => (
              <div className="list__character">
                <h2 className="character__title">{character.name}</h2>
                <div className="character__image-container">
                  <img src={character.image} alt={character.name} className="character__image" />
                </div>
                <h3 className="character__house">{character.house}</h3>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
