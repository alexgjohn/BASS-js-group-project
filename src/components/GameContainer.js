import React, {useState} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import MoviePoster from './MoviePoster';
import MovieForm from './MovieForm';
import Footer from './Footer';
import LeaderBoard from './LeaderBoard';

const GameContainer = () => {
    return (
        <>
        <h1>This is the GameContainer</h1>
        <NavBar />
        <Header />
        <MoviePoster />
        <MovieForm />
        <LeaderBoard />
        <Footer />
        </>
    );
}

export default GameContainer;