// state
import React, {useState} from 'react';
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

// handle guess function (for our group app I think maybe putting it in MovieForm instead of App.js)
const handleGuessSubmit = () => {
  if (selectedOption) {
    setGuesses((prevGuesses) => [...prevGuesses, selectedOption]);
    setSelectedOption(null);
  }
};

// state for when an option is chosen from the autofill thing
const [selectedOption, setSelectedOption] = useState(null);


// need to create a theme so the ThemeProvider breaks (I think ThemeProvider is like a container)
const theme = createTheme();


  return (
  
    <ThemeProvider theme={theme}>
    <div className="App">
    {/* search bar is in AutoCompleteSearchBox obvs, movie results passed as props */}
    <AutoCompleteSearchBox movieTitleResults={movieTitleResults} setMovieTitleResults={setMovieTitleResults}
      selectedOption={selectedOption} onSelectedOptionChange={setSelectedOption}
      onGuessSubmit={handleGuessSubmit}
    />
        {/* guesses comp goes here, guesses passed as props */}
    <GuessesAttempted guesses={guesses} setGuesses={setGuesses} handleGuessSubmit={handleGuessSubmit}/>

      
    </div>
    </ThemeProvider>
  );
}

export default App;