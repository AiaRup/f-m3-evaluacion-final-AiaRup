import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
  componentWillUnmount() {
    this.props.resetCharacterList();
  }

  render() {
    const { charactersList, id } = this.props;
    const currentCharacter = charactersList[id];
    return (
      <Fragment>
        {currentCharacter ? (
          <div className="character__card">
            <h2 className="character__title">{currentCharacter.name}</h2>
            <div className="character__image-container" style={{ backgroundImage: `url(${currentCharacter.image})` }}>
              <img src={currentCharacter.image} alt={currentCharacter.name} className="character__image" />
            </div>
            <p className="character__house">house: {currentCharacter.house ? currentCharacter.house : "I'm lonely, I don't belong to any house..."}</p>
            <p className="charachter__yob">year of birth: {currentCharacter.yearOfBirth ? currentCharacter.yearOfBirth : 'I have eternal life before me'}</p>
            <p className="charachter__patronus">patronus: {currentCharacter.patronus ? currentCharacter.patronus : 'N/A'}</p>
            <p className="charachter__state">state: {currentCharacter.alive ? 'vivo' : 'muerto'}</p>
            <Link to="/">Back to the list</Link>
          </div>
        ) : (
          <p className="loading">Loading</p>
        )}
      </Fragment>
    );
  }
}

CharacterCard.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  resetCharacterState: PropTypes.func
};

export default CharacterCard;
