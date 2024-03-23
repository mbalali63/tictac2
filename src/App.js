import {React,useState} from "react";
import BoxSet from "./components/BoxSet";
import Header from "./components/Header.js"
import Player from "./components/Player.js"

function App() {
  return (
    <main>
      <Header />
      <BoxSet />
      <button id="restart-btn">Restart</button>
      {/*<section id="players-container">-->*/}
      <Player itemNo = "I" playerName = "Rayan" playerSign = "X"/>
      <Player itemNo = "II" playerName = "Elaheh" playerSign = "O"/>
      {/*</section>*/}
      <footer> Implemented by <a href="https://github.com/mbalali63" target="_blank"> Mahdi Balali</a></footer>
    </main>
  );
}

export default App;
