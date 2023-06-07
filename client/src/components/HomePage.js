import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
    font-family: 'Electrolize', sans-serif;
    background-image: url('https://e1.pxfuel.com/desktop-wallpaper/774/884/desktop-wallpaper-4-movie-theater-cartoon-theatre.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    /* background-color: rgb(105, 27, 58); */

    h2 {
        color: rgb(255, 255, 255);
        text-align:center;
        padding:100px;
    }

    p {
        color: white;
        text-align:center;
    }
`

const HomePage = () => {
    return (
        
        <HomePageContainer>
            <h2>WELCOME TO BASSGAMES</h2>
            <p>Dare to play!</p>
        </HomePageContainer>
    );
};

export default HomePage;
