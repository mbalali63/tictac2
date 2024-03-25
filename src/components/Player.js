import {React,useState, useEffect} from "react";


export default function Player({itemNo,playerName,playerSign,active,score}){
    const [playerScore, setPlayerScore] = useState(0);
    const [pColor,setPColor] = useState('#000');
    const style0 = {backgroundColor: itemNo === 'I' ? "#FFB800" : "#39F809",
                    borderColor: active ? '#0808ff' : 'transparent'
                    }
    let scoreStyle;
    useEffect( () => {
        setPColor('red');
        setTimeout(() => {
            setPColor('#000');
        },500)

    },[score])
    

    return (
        <section className="player-box" style={style0} id={itemNo.toString()}>
            <h2>Player {itemNo}</h2>
            <h3>{playerSign}</h3>
            <p>Name</p>
            <p>{playerName}</p>
            <p>Score</p>
            <p style={{color:pColor}}>{score}</p>
        </section>
    )
}