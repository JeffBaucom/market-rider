import {
  NavLink
} from "react-router-dom"
import React from 'react'

function Navbar() {

  return (
    <div className="navbar">
        <div className="navbar-sublist">
            <button className="navbar-button navbar-button-sublist">
              <NavLink to="/market-rider">Market Rider</NavLink>
            </button>
        </div>
        <ul className="navbar-sublist nav-menu">
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <a href="https://discord.gg/DfhjrGG7u6" target="_blank" rel="noopener noreferrer">Discord</a>
              </button>
            </li>
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <a href="https://t.me/wooworldplus" target="_blank" rel="noopener noreferrer">Telegram</a>
              </button>
            </li>
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <a href="https://neftyblocks.com/c/mixandmaxwoo/drops/103458" target="_blank" rel="noopener noreferrer">Buy Packs</a>
              </button>
            </li>
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <a href="https://neftyblocks.com/c/mixandmaxwoo/packs" target="_blank" rel="noopener noreferrer">Open Packs</a>
              </button>
            </li>
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <a href="https://wooworld.plus/" target="_blank" rel="noopener noreferrer">WooWorld+</a>
              </button>
            </li>
            <li>
              <button className="nav-item navbar-sub-button navbar-button-sublist">
                <NavLink to="/contact">Contact</NavLink>
              </button>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
  );
}

export default Navbar;
