import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
import Footer from '../components/Footer';
import LeaderBoard from './LeaderBoardContainer';
import GameStatus from '../components/GameStatus';

const apiKey = "3ca5b3528412adc793325fb27cf4b072";
const baseUrl = "https://api.themoviedb.org/3";
const discoverEndpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_original_language=en&without_genres=99`;

const GameContainer = () => {

    //generate random number between 1 and 500, use this number to grab a page in this range
    const randomPage = Math.floor(Math.random() * 500) + 1
    //generate a random number between 0 and 19, use this as index for above page's list of movies.
    const randomIndex = Math.floor(Math.random() * 20)

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(randomPage)
    const [targetMovie, setTargetMovie] = useState(null)

    // other state for score and the guesses
    const [score, setScore] = useState(0);
    const [guesses, setGuesses] = useState([]);

    // state for the player
    const [playerName, setPlayerName] = useState('');

    // managing player name
    const handleNameSubmit = (name) => {
        setPlayerName(name);
    };


    //use effect runs on mount and whenever the current page is changed with setCurrentPage
    useEffect(() => {
        getMovies(currentPage)
    }, [currentPage])

    //this use effect runs on mount and whenever the movie list is updated with setMovies
    useEffect(() => {
        console.log("Show all of the movies:", movies.map(movie => movie.original_title))
        assignTargetMovie()
    }, [movies])

    //this is just to check that we HAVE a target movie
    useEffect(() => {
        if (targetMovie !== null) {
            console.log("Target movie:", targetMovie)
        }
    }, [targetMovie])

    const getMovies = function (page) {
        const pageUrl = `${discoverEndpoint}&page=${page}`
        fetch(pageUrl)
            .then(res => res.json())
            .then(movies => setMovies(movies.results))
    }

    const assignTargetMovie = () => {
        setTargetMovie(movies[randomIndex])
    }


    const handleNextPage = () => {
        setCurrentPage(randomPage)
    }

    // functions for MovieForm
    const handleGuessSubmit = (userGuess) => {
        console.log(`the user's guess is`, userGuess)
        // takes in userGuess, the guesses var gets updated
        // spread... creates another array that keeps the guesses from the original array (adds them together in a new array I think)
        // the new guess is added to the array too
        // takes the guess and updates the state
        setGuesses([...guesses, userGuess]);
    }

    return (
        <>
            <h1>This is the GameContainer</h1>
            {/* <NavBar /> */}
            <Header />
            <MoviePoster targetMovie={targetMovie} />
            <MovieForm onGuessSubmit={handleGuessSubmit} guesses={guesses} playerName={playerName} setPlayerName={setPlayerName}/>
            <GameStatus score={score} />
            <LeaderBoard />
            <Footer />
        </>
    );
}

export default GameContainer;