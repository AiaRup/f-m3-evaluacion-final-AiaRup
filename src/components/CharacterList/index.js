import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { findHouseImage } from '../../data/findHouseImage';
import './styles.scss';

const CharacterList = ({ charactersList, filterName }) => {
  return (
    <ul className="page__list">
      {charactersList
        .filter(character => character.name.toUpperCase().includes(filterName.toUpperCase()))
        .map(character => {
          const { id, name, image, house } = character;
          const imageHouse = findHouseImage(house);
          return (
            <li className="character__item" key={id} id={id}>
              <Link to={`character/${id}`} className="character__link">
                <div className="character__image-container" style={{ backgroundImage: `url(${image})` }}>
                  <img src={image} alt={name} className="character__image" />
                </div>
                <div className="character__details">
                  <h2 className="character__title">{name}</h2>
                  {imageHouse ? (
                    <div className="character__house-container" style={{ backgroundImage: `url(${imageHouse})` }}>
                      <img src={imageHouse} alt={house} className="house__image" />
                    </div>
                  ) : null}
                </div>
              </Link>
            </li>
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
