import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing);  --> Unfortunately, not a good practice in React
        setIsEditing(editing => !editing); // --> The correct way
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameLine = <span className='player-name'>{playerName}</span>;
    if (isEditing) {
        playerNameLine = <input type="text" value={playerName} required onChange={handleChange}></input>

    }

    return (
        <li>
            <span className='player'>
                {playerNameLine}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}