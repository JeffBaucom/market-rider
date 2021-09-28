import './App.css';
import WaxyBird from './Components/WaxyBird';
import * as waxjs from "@waxio/waxjs/dist";
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import {
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Leaderboard from './Components/Leaderboard';

function App() {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: 'https://wax.greymass.com'
  });

  const [userAccount, setUserAccount] = useState(null);
  let mainScreen;

  useEffect(() => {
    async function autoLogin() {
      try {
        console.log(userAccount);
        let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
        setUserAccount(wax.userAccount);
        let pubKeys = wax.pubKeys;
        fetch(`https://wax.api.atomicassets.io/atomicassets/v1/assets?page=1&limit=9999&owner=${userAccount}&collection_name=mixandmaxwoo`) // add query for schema_name
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      catch {

      }
    }
  })

  async function login() {
    console.log(userAccount);
    try {
      setUserAccount(await wax.login());
      console.log(userAccount);
      const pubKeys = wax.pubKeys;
      console.log(pubKeys);
      fetch(`https://wax.api.atomicassets.io/atomicassets/v1/assets?page=1&limit=9999&owner=${userAccount}&collection_name=mixandmaxwoo`) // add query for schema_name
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    } catch (e) {

    }
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <div className="content-container">

        <Route path="/login">
          <Login login={login}/>
        </Route>

        <Route exact path="/waxybird/leaderboard">
          <Leaderboard></Leaderboard>
        </Route>

        <Route exact path="/waxybird">
          {/* need to pass props (useracct and assets to waxybird component) */}
          {/* {userAccount ? <Redirect to="/login" /> : <WaxyBird />} */}
          {
            userAccount ? 
          <WaxyBird userAccount={userAccount}/> :
          <Login login={login} />
          }
        </Route>
        
        <Route exact path="/">
          <h2>HOME</h2>
        </Route>
        </div>

      </Switch>
    </div>
  );
}

export default App;



/*
Routing:
/ - home
/waxybird - default to game, reroute to /login
/login - login page, redirect to previous path if redirected here
/waxybird/leaderboard - waxybird leaderboard
*/