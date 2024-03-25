import {React,useState} from "react";
import BoxSet from "./components/BoxSet";
import Header from "./components/Header.js"
import Player from "./components/Player.js"

function App() {
  const [whoseTurn,setWhoseTurn] = useState('I');  
  const [winner,setWinner] = useState(null);
  const [playerIScore,setPlayerIScore] = useState(0);
  const [playerIIScore,setPlayerIIScore] = useState(0);
  const [gameCount,setGameCount] = useState(0);
  const [gameReset,setGameReset] = useState(false);

  const switchTurn = () => {
    if (whoseTurn === 'I'){
      setWhoseTurn('II');
    }
    else
    {
      setWhoseTurn('I');
    }
  }
  const gameOver = (player) => {
    setWinner(player);
    alert(player);
    if (player === 'X'){
      const nextScore = playerIScore + 1;
      setPlayerIScore(nextScore)
      setWinner('I')      
    }
    else
    {
      const nextScore = playerIIScore + 1;
      setPlayerIIScore(nextScore)
      setWinner('II');
    }
  }

  const restart = () => {
    setWhoseTurn(winner);
    const nextGameCount = gameCount + 1    
    setWinner(null)
    setGameCount(nextGameCount)
    setGameReset(!gameReset);
  }

  return (
    <main>
      <Header />
      <BoxSet whoseTurn = {whoseTurn} switchTurn = {switchTurn} gameOver={gameOver} winner={winner} reset={gameReset}/>
      <button id="restart-btn" onClick={restart}>Restart</button>
      {/*<section id="players-container">-->*/}
      <Player itemNo = "I" playerName = "Rayan" playerSign = "X"  active={whoseTurn === 'I'} score = {playerIScore}/>
      <Player itemNo = "II" playerName = "Elaheh" playerSign = "O"  active={whoseTurn === 'II'} score = {playerIIScore}/>
      {/*</section>*/}
      <footer> Implemented by <a href="https://github.com/mbalali63" target="_blank"> Mahdi Balali</a></footer>
    </main>
  );
}

export default App;
