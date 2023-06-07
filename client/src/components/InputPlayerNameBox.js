import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPlayerNameBox = ({users, createUser, getReturningUser, getMovies, randomPage}) => {
    const [playerName, setPlayerName] = useState('');
    const [returningPlayer, setReturningPlayer] = useState({})
    const navigate = useNavigate();

    const existingPlayerOptions = users.map((user) => {
        return(
            <option key={user._id} value={user._id}>{user.userName}</option>
        )
    })

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleNewPlayerSubmit = (e) => {
        e.preventDefault();
        createUser({ //will send a post request to the database and add a user
            userName: playerName,
            wins: 0,
            played: 0
        });
        setPlayerName("");
        getMovies(randomPage)
        navigate(`/game?name=${playerName}`);
    };

    const handleSelectClick = (e) => {
        const id = e.target.value
        const returningUser = users.find((user) => {
            return user._id === id
        })
        setReturningPlayer(returningUser)
        console.log(e.target.value)
    }

    const handleReturningPlayerSubmit = (e) => {
        e.preventDefault()
        getReturningUser(returningPlayer)
        getMovies(randomPage)
        navigate(`/game?name=${returningPlayer.userName}`)
        // navigate(`/game?id=${e.target.value}`)

    }

    return (
        <>
        <h1>Add a Username</h1>
        <form onSubmit={handleNewPlayerSubmit}>
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

        <h1>Returning User?</h1>
        <form onSubmit={handleReturningPlayerSubmit}>
        <div>
            <select onChange={handleSelectClick}>
                {existingPlayerOptions}
            </select>
        </div>
            <input type="submit" name="submit" value="Play!" />
        </form>
        </>
    );
};

export default InputPlayerNameBox;