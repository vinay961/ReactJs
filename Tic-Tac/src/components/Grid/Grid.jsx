import { useState } from "react";
import isWinner from "../../healper/checkWinner.js";
import Card from "../Card/Card";
import './Grid.css'

function Grid( {numberofCards} ){
    const [board,setBoard] = useState(Array(numberofCards).fill(""))
    const [turn, setTurn] = useState(true)
    const [winner,setWinner] = useState(null)

    function play(index) {
        if(turn == true){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        }
        const win = isWinner(board,turn ? "O":"X");
        if(win){
            setWinner(win)
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset({}){
        setTurn(turn);
        setWinner(null);
        setBoard(Array(numberofCards).fill(""));
    }

    return (
        <div className="grid1">
            {
                winner && (
                    <>
                        <h2 className="turn_highlight">Winner is {winner} </h2>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
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