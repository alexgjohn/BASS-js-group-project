// this requires state as it's a form
import React, {useState} from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';


const MovieForm = () => {
    return (
        <>
        <h2>This is the MovieForm (contains InputGuessesBox and GuessesAttempted)</h2>
        <InputGuessesBox />
        <GuessesAttempted />

        </>
    );
}

export default MovieForm;