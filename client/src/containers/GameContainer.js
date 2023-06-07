import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
// import Footer from '../components/Footer';
// import LeaderBoard from '../components/LeaderBoard';
// import { getUsers, postUser, putUser } from '../services/UsersService';
// import UserForm from '../components/UserForm';
// import CongratulationsPopupModal from '../components/CongratulationsPopUpModal';
// import GameOverPopupModal from '../components/GameOverPopUpModal';
import styled from 'styled-components';


const StyledGameContainerDivContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(105, 27, 58);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 30%;
    margin-left: 30%;
`;

const StyledGameContainerTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin: 10px 0; 
`

const GameContainer = ({ movies, targetMovie, currentUser, updateUserStats }) => {
    const [guesses, setGuesses] = useState([]);

    return (
        <StyledGameContainerDivContainer>
            <StyledGameContainerTitle>Guess the movie!<hr></hr></StyledGameContainerTitle>

            <MoviePoster targetMovie={targetMovie} guesses={guesses} />
            <MovieForm
                movies={movies}
                targetMovie={targetMovie}
                updateUserStats={updateUserStats}
                user={currentUser}
                guesses={guesses}
                setGuesses={setGuesses}
            />
        </StyledGameContainerDivContainer>
    );
};

export default GameContainer;