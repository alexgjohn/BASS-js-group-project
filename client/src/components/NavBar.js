import React from 'react';
// for react-router-dom
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        {/* <h2>This is the NavBar</h2> */}
        <nav className="main-navbar">
            <ul>
                <Link to ="/">Home</Link>
                <Link to ="/game">Game</Link>
                <Link to ="/game-rules">Game Rules</Link>
                <Link to ="/leaderboard">Leaderboard</Link>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;