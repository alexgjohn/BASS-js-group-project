import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
import Footer from '../components/Footer';
import LeaderBoard from '../components/LeaderBoard';
import { getUsers, postUser, putUser } from '../services/UsersService';
import UserForm from '../components/UserForm';

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
    const [users, setUsers] = useState([])

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

    if (users.length) {
        console.log("All users:", users)
    }


    const getMovies = function(page) {
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

    const createUser = newUser => {
        postUser(newUser)
        .then(savedUser => setUsers([...users, savedUser]))
    }

    return (
        <>
        <h1>This is the GameContainer</h1>
        <NavBar />
        <Header />
        <UserForm createUser={createUser}/>
        <MoviePoster />
        <MovieForm />
        <LeaderBoard />
        <Footer />
        </>
    );
}

export default GameContainer;