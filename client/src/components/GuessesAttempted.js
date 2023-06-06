import React from 'react';
import styled from 'styled-components';

const StyledGuessesContainer = styled.div`
    margin-top: 10px;
    text-decoration: none;
    color: black; // can change back to green
`
// idea: I could use the div and give class names and then target it, will try this tomozzz



const StyledGuessListItem = styled.li`
/* color: ${({ isCorrect }) => (isCorrect ? 'green' : 'inherit')}; */
color: ${({ isCorrect }) => (isCorrect ? 'green' : 'red')};
list-style-type: none;

`

const GuessesAttempted = ({ guesses, targetMovie }) => {
    return (
        <StyledGuessesContainer>
            <div>
                <h2>Guesses you've made so far:</h2>
                <ul>
                    {guesses.map((guess, index) => (
                        <StyledGuessListItem
                            key={index} guess={guess} targetMovie={targetMovie} isCorrect={guess === targetMovie}>{guess}
                        </StyledGuessListItem>
                    ))}
                </ul>
            </div>
        </StyledGuessesContainer>
    );
};

export default GuessesAttempted;


