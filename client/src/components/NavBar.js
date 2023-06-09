import React from 'react';
// for react-router-dom (use link as li)
import {Link} from 'react-router-dom';
// Link is for the li items :)
// useNavigate is for the logo to redirect to the page I want


// styles
import styled from 'styled-components';

// navbar container (including logo text:))
const StyledNavContainer = styled.nav`
margin: 0;
    display: flex;
    font-family: 'Electrolize', sans-serif;
    background-color: rgb(105, 27, 58);
    text-decoration: none;
    color: rgb(255, 255, 255);
    padding: 40px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: 900;
    position: relative;
    z-index: 2; // this stops the overlay

ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    cursor: grab;
    margin-right: 120px; // spacing between li wee items
}

a {
    color: rgb(255, 255, 255);
    text-decoration: none;
}

li a {
    padding: 20px 16px;
    text-decoration: none;
}

a:hover {
    /* color: rgb(178, 127, 148); */
    color: rgb(211, 166, 37);

}

// logo styles (the second word of the logo)
span {
    font-weight: 900;
    color: rgb(211, 166, 37);
}

span:hover {
    color: rgb(255, 255, 255);
}
`

// logo text 
const NavLogo = styled.p`
    margin: 0;
    @import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');
    font-family: 'Electrolize', sans-serif;
    
`

// this is the function for when the logo BASSGAMES is clicked, it takes you home :D
const handleLogoClick = (event) => {
    event.preventDefault();
    window.location.href = '/'; // Redirect to the homepage
};


const NavBar = () => {
    return (
        <>
        {/* <h2>This is the NavBar</h2> */}
        <StyledNavContainer className="main-navbar">
            <ul>
            {/* wrapped around lis for styling */}
            <li>
            <NavLogo><Link to="/" onClick={handleLogoClick}>BASS<span>GAMES</span></Link></NavLogo></li>               
                <li><Link to ="/play">Play</Link></li>
                <li><Link to ="/game-rules">Game Rules</Link></li>
                <li><Link to ="/leaderboard">Leaderboard</Link></li>
            </ul>
        </StyledNavContainer>
        </>
    );
}

export default NavBar;