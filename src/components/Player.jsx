import {useState} from 'react';

export default function Player({initialName, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName)

    const handleEditClick = () => {
       setIsEditing(!isEditing);  //-->we can do this in boolean but when we are updating on the previous value we should use function 
    //    setIsEditing((editing)=>{
    //         return !editing
    //    })
    }

    const handlePlayerNameChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? <input type="text" required value={playerName} onChange={handlePlayerNameChange}/> : <span className="player-name">{playerName}</span>;
    let btnCaption = isEditing ? 'Save' : 'Edit';

    return (
        <>
         <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
          </li>
        </>
    )
}