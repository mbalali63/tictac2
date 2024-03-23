import {React,useState} from "react";


export default function Player({itemNo,playerName,playerSign}){
    const [playerScore, setPlayerScore] = useState(0)
    const style0 = {backgroundColor: itemNo === 'I' ? "#FFB800" : "#39F809"}
    return (
        <section className="player-box" style={style0} id={itemNo.toString()}>
            <h2>Player {itemNo}</h2>
            <h3>{playerSign}</h3>
            <p>Name</p>
            <p>{playerName}</p>
            <p>Score</p>
        </section>
    )
}