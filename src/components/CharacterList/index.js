import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { findHouseImage } from '../../data/findHouseImage';

const CharacterList = ({ charactersList, filterName }) => {
  return (
    <ul className="page__list">
      {charactersList
        .filter(character => character.name.toUpperCase().includes(filterName.toUpperCase()))
        .map(character => {
          const { id, name, image, house } = character;
          const imageHouse = findHouseImage(house);
          return (
            <Link to={`character/${id}`} key={id} id={id}>
              <li className="list__character">
                <h2 className="character__title">{name}</h2>
                <div className="character__image-container" style={{ backgroundImage: `url(${image})` }}>
                  <img src={image} alt={name} className="character__image" />
                </div>
                {imageHouse ? (
                  <div className="character__house-container" style={{ backgroundImage: `url(${imageHouse})` }}>
                    <img src={imageHouse} alt={house} className="house__image" />
                  </div>
                ) : (
                  <p className="no__house">ff</p>
                )}
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string
};

export default CharacterList;
