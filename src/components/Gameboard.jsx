//import {useState} from 'react';

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

export default function Gammeboard({onSelectSquare, board}) {
    // let gameBoard = initialGameBoard;

    // for(const turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectedSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard)=> {
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }
    return (
        <>
            <ol id="game-board">
                {board.map((row, rowIndex) => {
                    return (
                        <li key={rowIndex}>
                            <ol>
                                {row.map((playerSymbol, colIndex) => {
                                    return (
                                        
                                            <li key={colIndex}>
                                                {/* <button onClick={()=>handleSelectedSquare(rowIndex,colIndex)}> */}
                                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                                    {playerSymbol}
                                                </button>
                                            </li>
                                        
                                    )
                                })}
                            </ol>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}