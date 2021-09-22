import * as waxjs from "@waxio/waxjs/dist";
import './App.css';
import { useEffect, useState } from 'react';
import Game from './Game';
import Leaderboard from './Leaderboard';

function App() {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: 'https://wax.greymass.com'
  });

  const [userAccount, setUserAccount] = useState(null);
  const [userInventory, setUserInventory] = useState(null);
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

  // function prepURLPayload(payloadObj) {
  //   let formBody = [];
  //   for (let property in payloadObj) {
  //     let encodedKey = encodeURIComponent(property);
  //     let encodedValue = encodeURIComponent(payloadObj[property]);
  //     formBody.push(encodedKey + "=" + encodedValue);
  //   }
  //   return formBody.join("&");
  // }
  
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

  if (userAccount) {
    mainScreen = <Game walletID={userAccount} ></Game>;
  } else {
    mainScreen = <h1>Please Log In</h1>
  }

  return (
    <div className="App">
      {mainScreen}
      <button variant="primary" onClick={login}>Login</button>
      <p>{ userAccount }</p>
     <Leaderboard></Leaderboard> 
    </div>
  );
}

export default App;
