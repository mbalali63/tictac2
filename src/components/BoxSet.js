import React, { useEffect, useState }  from "react";
import Box from "./Box.js";


export default function BoxSet({whoseTurn,switchTurn,gameOver,winner,reset}){
    const [boxStates,setBoxStates] = useState(Array.from({length:9},(value,index) => null))
    const boxArr = [];
    useEffect( () => {
        const nextBoxStates = Array.from({length:9},(value,index) => null);
        setBoxStates(nextBoxStates);
    },[reset])

    const getBoxState = (index,boxCurrnetState) => {        
        const oldBoxStates = boxStates;
        oldBoxStates[index] = boxCurrnetState;
        setBoxStates(oldBoxStates)
    }
    const checkWinner = () => {
        const winnerIndexSets = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winnerIndexSets.forEach(element => {
            if (boxStates[element[0]]  && (boxStates[element[0]] === boxStates[element[1]]) && (boxStates[element[1]] === boxStates[element[2]])) {
                gameOver(boxStates[element[0]])
                return boxStates[element[0]];
            }
        });
    }
    for (let i=0;i<9;i++){
        boxArr.push(<li key={i.toString()}><Box whoseTurn={whoseTurn} switchTurn = {switchTurn} boxIndex = {i} getBoxCallBack = {getBoxState} checkWinner={checkWinner} winner={winner} reset={reset}/></li>)
    }
    return (
        <ul className="box-set">
            {boxArr}
        </ul>
    )
}