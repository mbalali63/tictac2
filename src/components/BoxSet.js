import React  from "react";
import Box from "./Box.js";


export default function BoxSet(){
    const boxArr = [];
    for (let i=0;i<9;i++){
        boxArr.push(<Box />)
    }
    return (
        <section className="box-set">
            {boxArr}
        </section>
    )
}