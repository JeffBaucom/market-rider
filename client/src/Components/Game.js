import React from 'react'
import Unity, {UnityContent, UnityContext } from 'react-unity-webgl'

const Game = (props) => {
    const unityContent = new UnityContent(
        '../../../build/Game.json',
        '../../../build/UnityLoader.js'
      )

    window.GiveWalletID = function() {
      console.log(props);
      unityContent.send("GameManager", "SetupWalletString", props.walletID);
    }

    window.GiveUnlockedSkins = function() {
      console.log(props);
      unityContent.send("GameManager", "SetupSkins", props.unlockedSkins);
    }


    window.SubmitScore = function(walletId, score) {
      props.submitScore(walletId, score);
    }
    
      return (
        <div>
          <Unity unityContent={unityContent} width="100%" height="100%" />
        </div>
      )
}

export default Game;