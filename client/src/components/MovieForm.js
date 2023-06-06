import React, { useState } from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';
import CongratulationsPopupModal from './CongratulationsPopUpModal';
import GameOverPopupModal from './GameOverPopUpModal';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const MovieForm = ({ movies, targetMovie, updateUserStats, user, guesses, setGuesses}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
    const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false);

    // error message state for when button is clicked but nothing is selected or typed
    const [emptyInputErrorMessage, setEmptyInputErrorMessage] = useState('');


    const handleOpenCongratulationsModal = () => {
        setIsCongratulationsModalOpen(true);
    };

    const handleCloseCongratulationsModal = () => {
        setIsCongratulationsModalOpen(false);
    };

    const handleOpenGameOverModal = () => {
        setIsGameOverModalOpen(true);
    };

    const handleCloseGameOverModal = () => {
        setIsGameOverModalOpen(false);
    };

    const handleWin = () => {
        console.log('You win!');
        updateUserStats({
            _id: user._id,
            userName: user.userName,
            wins: user.wins + 1,
            played: user.played + 1,
        });
    };

    const handleLose = () => {
        console.log('You lose!');
        updateUserStats({
            _id: user._id,
            userName: user.userName,
            wins: user.wins,
            played: user.played + 1,
        });
    };

    const handleGuessSubmit = (selectedOption) => {
        if (selectedOption) {
            if (selectedOption === targetMovie.original_title) {
                console.log('correct!');
                handleOpenCongratulationsModal();
                handleWin()
            } else {
                console.log('Whoops wrong!!');
                handleOpenGameOverModal();
                handleLose()
            }

            // this updates the state guesses has, gets the previous guesses value then creates another new array by taking the old guesses and adding them with a new guess that's entered
            setGuesses((prevGuesses) => [...prevGuesses, selectedOption]);

            setSelectedOption(null);
            // setSelectedOption is null so that it's empty every time a new guess is entered
            // updates the guesses state as it adds the new guess to the array and puts the old and new guesses together then empties out the input box
        }
    };

    return (
        <>
            <h2>This is the MovieForm (contains InputGuessesBox and GuessesAttempted)</h2>
            <InputGuessesBox movies={movies} setSelectedOption={setSelectedOption} handleGuessSubmit={handleGuessSubmit}
                selectedOption={selectedOption} emptyInputErrorMessage={emptyInputErrorMessage} setEmptyInputErrorMessage={setEmptyInputErrorMessage}
            />
            <GuessesAttempted guesses={guesses} targetMovie={targetMovie}/>

            <div>
                <GameOverPopupModal isOpen={isGameOverModalOpen} onClose={handleCloseGameOverModal} />
                <CongratulationsPopupModal
                    isOpen={isCongratulationsModalOpen}
                    onClose={handleCloseCongratulationsModal}
                />
            </div>
        </>
    );
};

export default MovieForm;
