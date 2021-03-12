import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className="nav-link active">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;