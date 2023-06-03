import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
import Footer from '../components/Footer';
import LeaderBoard from '../components/LeaderBoard';

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