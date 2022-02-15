import {
  NavLink
} from "react-router-dom"
import React from 'react'

function Navbar() {

  return (
    <div className="navbar">
        <div className="navbar-sublist">
            <button className="navbar-button navbar-button-sublist">
              <NavLink to="/waxybird">Market Rider</NavLink>
            </button>
        </div>
    </div>
  );
}

export default Navbar;
