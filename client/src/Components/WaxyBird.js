import Game from './Game';
import React from 'react';
import {
  NavLink
} from "react-router-dom"

function WaxyBird(props) {
 

  function submitScore(wallet, score) {
    let details = {
      WalletID: wallet,
      Score: score,
    }

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
  }

  // if (userAccount) {
  // } else {
  //   mainScreen = <h1>Please Log In</h1>
  // }

  return (
    <div className="game-container">
      <div className="subnav">
        <button className="navbar-button">
          <NavLink to="/waxybird/leaderboard">Leaderboard</NavLink>
        </button>
      </div>
      <Game walletID={props.userAccount} submitScore={submitScore}></Game>
    </div>
  );
}

export default WaxyBird;
