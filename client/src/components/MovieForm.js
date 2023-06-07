import React, { useEffect, useState } from 'react';
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

    const [inputBoxVisible, setInputBoxVisible] = useState(true)


    useEffect(() => {
        isGameEnded()
    }, [guesses])


    const handleOpenCongratulationsModal = () => {
        setIsCongratulationsModalOpen(true);
        setInputBoxVisible(false)
    };

    const handleCloseCongratulationsModal = () => {
        setIsCongratulationsModalOpen(false);
        setIsGameOverModalOpen(false);
    };

    const handleOpenGameOverModal = () => {
        setIsGameOverModalOpen(true);
        setInputBoxVisible(false)
    };

    const handleCloseGameOverModal = () => {
        setIsGameOverModalOpen(false);
    };

    const isGameEnded = () => {
        if (guesses.length === 3) {
        handleOpenGameOverModal()
    }}

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
                // handleOpenGameOverModal();
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
            {guesses.length === 0 ? <h3>You have 3 guesses remaining</h3> : null}
            {guesses.length === 1 ? <h3>You have 2 guesses remaining</h3> : null}
            {guesses.length === 2 ? <h3>You have 1 guess remaining</h3> : null}
            {guesses.length === 3 ? <h3>You have 0 guesses remaining</h3> : null}
            
            {inputBoxVisible && (
                <InputGuessesBox
                movies={movies}
                setSelectedOption={setSelectedOption}
                handleGuessSubmit={handleGuessSubmit}
                selectedOption={selectedOption}
                emptyInputErrorMessage={emptyInputErrorMessage}
                setEmptyInputErrorMessage={setEmptyInputErrorMessage}
                guesses={guesses}
                isCongratulationsModalOpen={isCongratulationsModalOpen }
                />
            )}
            <GuessesAttempted guesses={guesses} targetMovie={targetMovie}/>

            <div>
                <GameOverPopupModal targetMovie={targetMovie} isOpen={isGameOverModalOpen} onClose={handleCloseGameOverModal} />
                <CongratulationsPopupModal
                    targetMovie={targetMovie}
                    isOpen={isCongratulationsModalOpen}
                    onClose={handleCloseCongratulationsModal}
                />
            </div>
        </>
    );
};

export default MovieForm;
