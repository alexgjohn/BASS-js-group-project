import React from 'react';

const GuessesAttempted = ({ guesses}) => {
    return (
        <div>
            <h2>Guesses you've made so far:</h2>
            <ul>
                {guesses.map((guess, index) => (
                    <li key={index}>{guess.first_name} {guess.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GuessesAttempted;
