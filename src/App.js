// state
import React, {useState, useEffect} from 'react';
// material ui lib
// everything needs to be wrapped around ThemeProvider
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// components
import AutoCompleteSearchBox from "./components/AutoCompleteSearchBox";
import GuessesAttempted from './components/GuessesAttempted';


function App() {
// setting up state for the API movie title data and I'll pass it into AutoCompleteSearchBox.js
const [movieTitleResults, setMovieTitleResults] = useState([]);
// state for the guesses, plural!
const [guesses, setGuesses] = useState([]);

// state for when an option is chosen from the autofill thing
const [selectedOption, setSelectedOption] = useState(null);

// useEffect for API so only renders once but not repeatedly
useEffect(() => {
  // fetch('http://www.boredapi.com/api/activity?type=recreational') - tried this but wasn't suited
  fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => response.json())
      .then((json) => setMovieTitleResults(json.data))
}, [])
// testing to see if the data is accessible out with there ^
console.log(movieTitleResults)

// handle guess submit func
const handleGuessSubmit = (selectedOption) => {
  if (selectedOption) {
    setGuesses((prevGuesses) => [...prevGuesses, selectedOption]);
    setSelectedOption(null);
  }
};


// need to create a theme so the ThemeProvider breaks (I think ThemeProvider is like a container)
const theme = createTheme();

  return (
  
    <ThemeProvider theme={theme}>
      <div className="App">
        <AutoCompleteSearchBox
          movieTitleResults={movieTitleResults}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onGuessSubmit={handleGuessSubmit}
        />
        <GuessesAttempted guesses={guesses} />
      </div>
    </ThemeProvider>
  );
}

export default App;