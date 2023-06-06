import styled from 'styled-components';

const GameRules = () => {

    const GameRules = styled.body`
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 30%;
    margin-left: 30%;
    `
    const Heading = styled.h2`
    text-align: left;
    `

    return (
        <>
        <GameRules>
            <Heading>Rules for The Movie Guessing Game</Heading>
            <hr></hr>
                <h3>How to play the game: </h3>
                    <ul>
                        <p>Guess the title of the movie from the movie poster. </p>
                        <p>The catch - we only reveal a small portion of the poster.</p>
                        <p>Select or start typing your guess.</p>
                        <p>Click on submit and see if you are right!</p>
                        <p>You get only 3 guesses - Good Luck <span>&#9752;</span> </p>
                    </ul>
                <p></p>
                <h3>To start:</h3>
                    <ul>
                        <p>Click Play above and enter your name and save.</p>
                    </ul>
            <hr></hr>
        </GameRules>
        </>
    );
}

export default GameRules;