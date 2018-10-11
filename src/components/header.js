import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand"to="/">Home</Link>
    <Link className="navbar-brand"to="/create-team">Create Team</Link>
    <Link className="navbar-brand" to="/create-player">Create Player</Link>
  </nav>
);

export default Header;
