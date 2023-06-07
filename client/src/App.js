import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// used BrowserRouter instead of Router due to issues
// considered Switch too

// components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GameContainer from './containers/GameContainer'; // Play page in navbar
import GameRules from './components/GameRules';
import LeaderBoardContainer from './containers/LeaderBoardContainer';
import ErrorPage from './components/ErrorPage';
import InputPlayerNameBox from './components/InputPlayerNameBox';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoviePoster from './components/MoviePoster';
import MovieForm from './components/MovieForm';
import LeaderBoard from './components/LeaderBoard';
import { getUsers, postUser, putUser } from './services/UsersService';
import UserForm from './components/UserForm';
import CongratulationsPopupModal from './components/CongratulationsPopUpModal';
import GameOverPopupModal from './components/GameOverPopUpModal';

const apiKey = "3ca5b3528412adc793325fb27cf4b072";
const baseUrl = "https://api.themoviedb.org/3";
const discoverEndpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_original_language=en&without_genres=99`;

function App() {

    //generate random number between 1 and 500, use this number to grab a page in this range
    const randomPage = Math.floor(Math.random() * 500) + 1
    //generate a random number between 0 and 19, use this as index for above page's list of movies.
    const randomIndex = Math.floor(Math.random() * 20)

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(randomPage)
    const [targetMovie, setTargetMovie] = useState(null)
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    //use effect runs on mount and whenever the current page is changed with setCurrentPage
    useEffect(() => {
        getMovies(currentPage)
    }, [currentPage])

    //this use effect runs on mount and whenever the movie list is updated with setMovies
    useEffect(() => {
        console.log("All movie titles:", movies.map(movie => movie.original_title))
        assignTargetMovie()
    }, [movies])

    useEffect(() => {
        getUsers()
            .then(allUsers => setUsers(allUsers))
    }, [])

    // useEffect(() => {
    //     assignCurrentUser()
    // }, [users])

    if (users.length) {
        console.log("All users:", users)
    }


    const getMovies = function (page) {
        const pageUrl = `${discoverEndpoint}&page=${page}`
        fetch(pageUrl)
            .then(res => res.json())
            .then(movies => setMovies(movies.results))
    }

    const assignTargetMovie = () => {
        setTargetMovie(movies[randomIndex])
    }


    const createUser = newUser => {
        postUser(newUser)
            .then(savedUser =>{
                    console.log({savedUser})
                    setUsers([...users, savedUser])
                    setCurrentUser(savedUser)
                })

    }

    const updateUserStats = updatedStats => {
        putUser(updatedStats)

        const updatedUserIndex = users.findIndex(user => user._id === updatedStats._id)
        const updatedUsers = [...users]
        updatedUsers[updatedUserIndex] = updatedStats
        setUsers(updatedUsers)
    }

    const getReturningUser = (returningUser) => {
        setCurrentUser(returningUser)
    }

    // const assignCurrentUser = () => {
    //     const newPlayerIndex = (users.length - 1)
    //     setCurrentUser(users[newPlayerIndex])
    // }



    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/play" element={<InputPlayerNameBox users={users} createUser={createUser} getReturningUser={getReturningUser}/>} />
                    <Route path="/game-rules" element={<GameRules />} />
                    <Route path="game" element={<GameContainer movies={movies} targetMovie={targetMovie} currentUser={currentUser} updateUserStats={updateUserStats} />} />
                    <Route path="/leaderboard" element={<LeaderBoard users={users} />} />
                    <Route path="*" element={<ErrorPage />} />

                </Routes>

            </Router>
            <Footer />
        </div>
    );
}

export default App;
