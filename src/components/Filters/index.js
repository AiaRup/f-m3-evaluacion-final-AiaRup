import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ getUserSearchValue, filterName }) => {
  return (
    <div className="page__filters">
      <label htmlFor="name">Search charachter by name</label>
      <input type="text" name="name" id="name" placeholder="start typing a character name" onChange={getUserSearchValue} value={filterName}/>
    </div>
  );
};

Filters.propTypes = {
  getUserSearchValue: PropTypes.func,
  filterName: PropTypes.string
};

export default Filters;
