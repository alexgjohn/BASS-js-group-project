// this requires state as it's a form
import React, {useState} from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const MovieForm = ({movies, targetMovie, updateUserStats, user}) => {

    const [selectedOption, setSelectedOption] = useState(null)

    const handleWin = () => {
        console.log("You win!")
        updateUserStats({
            _id: user._id,
            userName: user.userName,
            wins: user.wins + 1,
            played: user.played + 1
        })
    }

    const handleLose = () => {
        console.log("You lose!")
        updateUserStats({
            _id: user._id,
            userName: user.userName,
            wins: user.wins,
            played: user.played + 1
        })
    }

    // handle guess submit func
    const handleGuessSubmit = (selectedOption) => {
        if (selectedOption) {
        // setGuesses((prevGuesses) => [...prevGuesses, selectedOption]);
            console.log(selectedOption)
            setSelectedOption(null);
        }
    };


    return (
        <>
        <h2>This is the MovieForm (contains InputGuessesBox and GuessesAttempted)</h2>
        <InputGuessesBox movies={movies} setSelectedOption={setSelectedOption} handleGuessSubmit={handleGuessSubmit} selectedOption={selectedOption}
        />
        <GuessesAttempted />
        <button onClick={handleWin}>Win</button>
        <button onClick={handleLose}>Lose</button>

        </>
    );
}

export default MovieForm;