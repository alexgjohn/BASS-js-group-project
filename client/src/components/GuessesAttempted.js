import React from 'react';
import styled from 'styled-components';

const StyledGuessesContainer = styled.div`
    margin-top: 10px;
    text-decoration: none;

    h2 {
        color: rgb(105, 27, 58);

    }
    
    // can change back to green
`
// idea: I could use the div and give class names and then target it, will try this tomozzz

const StyledGuessListItem = styled.ul`
color: rgb(105, 27, 58);
color: ${({ isCorrect }) => (isCorrect ? 'green' : 'inherit')};
list-style-type: none;
font-size: 20px;


`

const GuessesAttempted = ({ guesses, targetMovie }) => {
    return (
        
        <StyledGuessesContainer>
                <h2>Guesses you've made so far:</h2>
                <ul>
                <div className="guest-li">
                    {guesses.map((guess, index) => (
                        <StyledGuessListItem
                            key={index}
                            guess={guess}
                            targetMovie={targetMovie}
                            isCorrect={guesses.includes(targetMovie)}
                        >
                            {guess}
                        </StyledGuessListItem>
                    ))}
                    </div>
                </ul>
        </StyledGuessesContainer>
    );
};


export default GuessesAttempted;


