import React, {useState, useEffect} from 'react';
// import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
// import Footer from '../components/Footer';
// import LeaderBoard from '../components/LeaderBoard';
// import { getUsers, postUser, putUser } from '../services/UsersService';
// import UserForm from '../components/UserForm';
// import CongratulationsPopupModal from '../components/CongratulationsPopUpModal';
// import GameOverPopupModal from '../components/GameOverPopUpModal';


const GameContainer = ({movies, targetMovie, users, updateUserStats}) => {

    const [guesses, setGuesses] = useState([]);

    







    return (
        <>
        <h1>This is the GameContainer</h1>
        {/* <Header /> */}
        {/* <UserForm createUser={createUser}/> */}
        <MoviePoster targetMovie={targetMovie} guesses={guesses}/>
        <MovieForm movies={movies} targetMovie={targetMovie} updateUserStats={updateUserStats} user={users[0]} guesses={guesses} setGuesses={setGuesses}/>
        {/* <LeaderBoard users={users}/> */}
        {/* <Footer /> */}
        </>
    );
}

export default GameContainer;