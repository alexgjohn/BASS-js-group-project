import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPlayerNameBox = ({createUser}) => {
    const [playerName, setPlayerName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({ //will send a post request to the database and add a user
            userName: playerName,
            wins: 0,
            played: 0
        });
        setPlayerName("");
        navigate(`/game?name=${playerName}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Add a Username</h1>
        <div className="group">
            <label htmlFor="name">Username:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            value={playerName} 
            required 
            onChange={handleInputChange}
            />
        </div>
        

        <input type="submit" name="submit" value="Save" />
        </form>
    );
};

export default InputPlayerNameBox;