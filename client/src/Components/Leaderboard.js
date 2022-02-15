import React from 'react'
import { useEffect, useState } from 'react';
import LeaderTable from './LeaderTable';
import {
  NavLink
} from "react-router-dom"

const Leaderboard = () => {

    const [leaderboardData, setLeaderboardData] = useState([
        {
            "_id": "614b7efdbc23bc093ce193c0",
            "walletId": "abcde.wam",
            "score": 32,
            "createdAt": "2021-09-22T19:07:41.659Z",
            "updatedAt": "2021-09-22T19:07:41.659Z",
            "__v": 0
        }
    ]);
    useEffect(() => {
        const getData = async () => {
          const response = await fetch("/api/scores");
          const newData = await response.json();
          setLeaderboardData(newData);
        };
        getData();
      }, []); //<-- This is the dependency array

      return (
        <div>
          <div className="subnav">
            <button className="navbar-button">
              <NavLink to="/market-rider">Back to Game</NavLink>
            </button>
          </div>

          <LeaderTable leaderboardData={leaderboardData}></LeaderTable>
        </div>
      )
}

export default Leaderboard;