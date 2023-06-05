// this requires state as it's a form
import React, {useState} from 'react';
import InputGuessesBox from './InputGuessesBox';
import GuessesAttempted from './GuessesAttempted';
import CongratulationsPopupModal from './CongratulationsPopUpModal';
import GameOverPopupModal from './GameOverPopUpModal';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const MovieForm = ({movies, targetMovie, updateUserStats, user}) => {

    const [selectedOption, setSelectedOption] = useState(null)

    // state for guesses
    const [guesses, setGuesses] = useState([]);

    const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
    const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false);

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
            if (selectedOption === targetMovie) {
                console.log("correct!")
                handleOpenCongratulationsModal()
            } else {
                console.log("Whoops wrong!!")
                handleOpenGameOverModal()
            }
        // setGuesses((prevGuesses) => [...prevGuesses, selectedOption]);
            setSelectedOption(null);
        }
    };


    return (
        <>
        <h2>This is the MovieForm (contains InputGuessesBox and GuessesAttempted)</h2>
        <InputGuessesBox movies={movies} setSelectedOption={setSelectedOption} handleGuessSubmit={handleGuessSubmit} selectedOption={selectedOption}
        />
        <GuessesAttempted guesses={guesses}/>

        <div>
            <GameOverPopupModal isOpen={isGameOverModalOpen} onClose={handleCloseGameOverModal} />
            <CongratulationsPopupModal isOpen={isCongratulationsModalOpen} onClose={handleCloseCongratulationsModal} />
          </div>
        <button onClick={handleWin}>Win</button>
        <button onClick={handleLose}>Lose</button>

        </>
    );
}

export default MovieForm;