import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Gammeboard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectedSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard)=> {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard;
        });
    }

    return (
        <>
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => {
                    return (
                        <li key={rowIndex}>
                            <ol>
                                {row.map((playerSymbol, colIndex) => {
                                    return (
                                        <>
                                            <li key={colIndex}>
                                                <button onClick={()=>handleSelectedSquare(rowIndex,colIndex)}>
                                                    {playerSymbol}
                                                </button>
                                            </li>
                                        </>
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