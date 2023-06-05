// this requires state as it's a form
import React, { useState } from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';
import InputPlayerNameBox from './InputPlayerNameBox';

// passing the props onGuessSubmit, hasWon, hasLost, and guesses
// state needed for what user types into input box
const MovieForm = ({ onGuessSubmit, guesses, playerName, setPlayerName, onStartGame, onNameSubmit}) => {
    const [userGuess, setUserGuess] = useState('');

    // this function handles what guess str is submitted
    // whatever the user guesses and submits
    // using event listener for the function
    // prevent default is so it doesn't refresh and only renders once
    const handleGuessSubmit = () => {
        if (userGuess.trim() !== '') {
            onGuessSubmit(userGuess);
            setUserGuess('');
        }
    };

    // this function updates the value for the guess as Spider-Man or whatever is typed
    const handleGuessChange = (event) => {
        setUserGuess(event.target.value);
    };


    return (
        <>
            <h2>This is the MovieForm (contains InputGuessesBox, InputPlayerNameBox and GuessesAttempted)</h2>
            <InputGuessesBox value={userGuess} onChange={handleGuessChange} onSubmit={handleGuessSubmit} />
            <InputPlayerNameBox onNameSubmit={onNameSubmit}/>
            <GuessesAttempted guesses={guesses} />
        </>
    );
};

export default MovieForm;