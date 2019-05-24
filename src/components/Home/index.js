import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = ({ getUserSearchValue, charactersList, filterName }) => {
  return (
    <Fragment>
      <header className="page__header">
        <h1 className="page__title">Harry Potter characters</h1>
      </header>
      <main className="page__main">
        <Filters getUserSearchValue={getUserSearchValue} filterName={filterName} />
        {charactersList.length ? <CharacterList charactersList={charactersList} filterName={filterName} /> : <p>loading...</p>}
      </main>
    </Fragment>
  );
};

Home.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  getUserSearchValue: PropTypes.func
};

export default Home;
