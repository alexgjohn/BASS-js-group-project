// guesses is where all of the users guesses are stored, it's an array
const GuessesAttempted = ({guesses}) => {
    return (
        <>
        <h4>Your guesses so far:</h4>
        <ul>
        {/* for every guess in the guesses array a list item is returned, that's the function that's applied to every item, map() creates a new array where they're all returned as list items */}
        {guesses.map((guess, index) => (
          <li key={index}>{guess}</li>
        ))}
        {/* key is needed */}
      </ul>

        {/* <p>This is GuessesAttempted</p> */}


        </>
    );
}

export default GuessesAttempted;