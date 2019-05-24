import React, { Component } from 'react';
import './styles.scss';
import { fetchCharacters } from '../../services/fetchCharacters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: []
    };
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

  render() {
    const { charactersList } = this.state;
    return (
      <div className="page">
        <div className="page__filters">
          <label htmlFor="name">Search charachter by name</label>
          <input type="text" name="name" id="name" placeholder="start typing a character name" />
        </div>
        <ul className="page__list">
          {charactersList.map(character => (
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
