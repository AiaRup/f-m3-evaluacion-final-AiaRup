import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ getUserSearchValue }) => {
  return (
    <div className="page__filters">
      <label htmlFor="name">Search charachter by name</label>
      <input type="text" name="name" id="name" placeholder="start typing a character name" onChange={getUserSearchValue} />
    </div>
  );
};

Filters.propTypes = {
  getUserSearchValue: PropTypes.func
};

export default Filters;
