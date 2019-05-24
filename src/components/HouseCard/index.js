import React from 'react';
import PropTypes from 'prop-types';

const HouseCard = ({ name }) => {
  return (
    <div className="House__info-container">
      <h3>{name}</h3>
    </div>
  );
};

HouseCard.propTypes = {};
export default HouseCard;
