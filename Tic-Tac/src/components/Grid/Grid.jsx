import { useState } from "react";
import isWinner from "../../healper/checkWinner";
import Card from "../Card/Card";
import './Grid.css'

function Grid( {numberofCards} ){
    const [board,setBoard] = useState(Array(numberofCards).fill(""))
    const [turn, setTurn] = useState(true)
    function play(index){
        if(turn == true){
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }
        const win = isWinner(board,turn? "O":"X")
    }

    return (
        <div className="grid1">
            <h2 className="turn_highlight">Current turn: {(turn) ? 'O':'X'}</h2>
            <div className="grid">
                {board.map((el,index)=>{
                return < Card key={index} onPlay={play} player={el} index={index} />
                })}
            </div>
        </div>
    )
}
export default Grid