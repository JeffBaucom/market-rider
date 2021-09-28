import {
  NavLink
} from "react-router-dom"
import React from 'react'

function Navbar() {

  return (
    <div className="navbar">
        <button className="navbar-button">
          <NavLink to="/">Home</NavLink>
          </button>
        <div className="navbar-sublist">
            <button className="navbar-button navbar-button-sublist">
              <NavLink to="/waxybird">Waxy Bird</NavLink>
            </button>
        </div>
    </div>
  );
}

export default Navbar;
