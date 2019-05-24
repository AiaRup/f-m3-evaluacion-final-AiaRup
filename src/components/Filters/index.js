import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ getUserSearchValue, filterName }) => {
  return (
    <div className="page__filters">
      <label htmlFor="name" className="filter__label">Search charachter by name</label>
      <input type="text" name="name" id="name" className="filter__input" placeholder="start typing a character name" onChange={getUserSearchValue} value={filterName} />
    </div>
  );
};

Filters.propTypes = {
  getUserSearchValue: PropTypes.func,
  filterName: PropTypes.string
};

export default Filters;
