import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { findHouseImage } from '../../data/findHouseImage';
import './styles.scss';
import backgroundImage from '../../images/background.jpg';

class CharacterCard extends Component {
  componentWillUnmount() {
    this.props.resetCharacterList();
  }

  render() {
    const { charactersList, id } = this.props;
    const currentCharacter = charactersList.find(person => person.id === parseInt(id));
    return (
      <div className="character__card-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {currentCharacter ? (
          <div className="character__card">
            <div className="character__image-container" style={{ backgroundImage: `url(${currentCharacter.image})` }}>
              <img src={currentCharacter.image} alt={currentCharacter.name} className="character__image" />
            </div>
            <div className="character__details">
              <h2 className="character__title">{currentCharacter.name}</h2>
              {findHouseImage(currentCharacter.house) ? (
                <div className="character__house-container" style={{ backgroundImage: `url(${findHouseImage(currentCharacter.house)})` }}>
                  <img src={findHouseImage(currentCharacter.house)} alt={currentCharacter.house} className="house__image" />
                </div>
              ) : (
                <p className="no__house">I'm lonely, I don't belong to any house...</p>
              )}
              <p className="charachter__yob">year of birth: {currentCharacter.yearOfBirth ? currentCharacter.yearOfBirth : 'I have eternal life'}</p>
              <p className="charachter__patronus">patronus: {currentCharacter.patronus ? currentCharacter.patronus : 'N/A'}</p>
              <p className="charachter__state">state: {currentCharacter.alive ? <i className="fas fa-heartbeat" /> : <i className="fas fa-skull-crossbones" />}</p>
              <Link to="/home" className="back__link">
                <i className="fas fa-chevron-circle-left" />
              </Link>
            </div>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    );
  }
}

CharacterCard.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  resetCharacterState: PropTypes.func
};

export default CharacterCard;
