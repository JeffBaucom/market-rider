import React from 'react'
import Unity, {UnityContent, UnityContext } from 'react-unity-webgl'

const Game = (props) => {
    const unityContent = new UnityContent(
        '../../../build/Game.json',
        '../../../build/UnityLoader.js'
      )
      unityContent.on("quitted", () => {
        console.log('Game quit')
      })
      unityContent.on("loaded", () => {
        console.log('Game loaded')
      })
      unityContent.on("progress", progression => {
        console.log('Game loading', progression)
      })
      unityContent.on("error", message => {
        console.log('Game errored', message)
      })
      unityContent.on("DemoUnityToReact", (params) => {
        console.log('DemoUnityToReact', params)
      })
    window.GiveWalletID = function() {
      unityContent.send("GameManager", "SetupWalletString", props.walletID);
    }
    
      return (
        <div>
          <p>Game</p>
          <Unity unityContent={unityContent} width="100%" height="100%" />
        </div>
      )
}

export default Game;