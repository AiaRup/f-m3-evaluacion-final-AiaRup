import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Gryffindor</Link>
        </li>
        <li>
          <Link to="/">Hufflepuff</Link>
        </li>
        <li>
          <Link to="/">Ravenclaw</Link>
        </li>
        <li>
          <Link to="/">Slytherin</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};
export default Navbar;
