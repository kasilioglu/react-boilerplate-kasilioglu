import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'blue' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
      {" | "}
      <NavLink to="/contacts" activeStyle={activeStyle}>Contacts</NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
};


export default Header;
