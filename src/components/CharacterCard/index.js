import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ charactersList, id }) => {
  const currentCharacter = charactersList[id];
  const { name, image, house, alive, patronus, yearOfBirth } = currentCharacter;
  return (
    <div className="character__card">
      <h2 className="character__title">{name}</h2>
      <div className="character__image-container" style={{ backgroundImage: `url(${image})` }}>
        <img src={image} alt={name} className="character__image" />
      </div>
      <p className="character__house">casa: {house}</p>
      <p className="charachter__yob">nacimiento: {yearOfBirth}</p>
      <p className="charachter__patronus">patronus: {patronus ? patronus : 'N/A'}</p>
      <p className="charachter__state">estado: {alive ? 'vivo' : 'muerto'}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
};

export default CharacterCard;
