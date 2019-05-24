import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import './styles.scss';

const Home = ({ getUserSearchValue, charactersList, filterName }) => {
  return (
    <div className="page__home">
      <header className="page__header">
        <h1 className="page__title">Harry Potter characters</h1>
      </header>
      <main className="page__main">
        <Filters getUserSearchValue={getUserSearchValue} filterName={filterName} />
        {charactersList.length ? <CharacterList charactersList={charactersList} filterName={filterName} /> : <p>loading...</p>}
      </main>
    </div>
  );
};

Home.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  getUserSearchValue: PropTypes.func
};

export default Home;
