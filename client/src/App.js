import * as waxjs from "@waxio/waxjs/dist";
import './App.css';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import Game from './Game';

function App() {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: 'https://wax.greymass.com'
  });

  let userAccount;

  useEffect(() => {
    async function autoLogin() {
      try {
        let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
        userAccount = wax.userAccount;
        console.log(userAccount);
        let pubKeys = wax.pubKeys;
      }
      catch {

      }
    }
  })

  function prepURLPayload(payloadObj) {
    let formBody = [];
    for (let property in payloadObj) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(payloadObj[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&");
  }
  
  async function login() {
    try {
        userAccount = await wax.login();
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
      <Game></Game>
      <Button variant="primary" onClick={login}>Login</Button>
      <p>{ userAccount }</p>
    </div>
  );
}

export default App;
