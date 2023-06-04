import React from 'react';

const GuessesAttemptedList = ({ guesses}) => {
    return (
        <div>
            <h2>Guesses you've made so far:</h2>
            <ul>
                {guesses.map((guess, index) => (
                    <li key={index}>{guess}</li>
                ))}
            </ul>
        </div>
    );
};

export default GuessesAttemptedList;
