import {React,useEffect,useState} from "react"

export default function Box({whoseTurn,switchTurn,boxIndex,getBoxCallBack,checkWinner,winner,reset}){
    const [currentState,setCurrentState] = useState(null);
    useEffect( () => {
        setCurrentState(null);
    },[reset])
    const onBoxClick = () => {
        if (currentState === null && winner === null){
            if (whoseTurn === 'I'){
                setCurrentState('X');
                getBoxCallBack(boxIndex,'X')
            }
            else{
                setCurrentState('O');
                getBoxCallBack(boxIndex,'O')
            }            
            switchTurn();
            checkWinner();
        }        
    }
    return (        
        <button className="Box" onClick={onBoxClick}>{currentState ? currentState : ""}</button>
    )
}
