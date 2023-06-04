// this requires state as it's a form
import React, {useState} from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';


const MovieForm = ({updateUserStats, user}) => {

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

    return (
        <>
        <h2>This is the MovieForm (contains InputGuessesBox and GuessesAttempted)</h2>
        <InputGuessesBox />
        <GuessesAttempted />
        <button onClick={handleWin}>Win</button>
        <button onClick={handleLose}>Lose</button>

        </>
    );
}

export default MovieForm;