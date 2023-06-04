// state
import React, {useState} from 'react';
// material ui lib
// everything needs to be wrapped around ThemeProvider
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/system';

// components
import AutoCompleteSearchBox from "./components/AutoCompleteSearchBox";


function App() {
// setting up state
const [movieTitleResults, setMovieTitleResults] = useState([]);

// need to create a theme so the ThemeProvider breaks (I think ThemeProvider is like a container)
const theme = createTheme();


  return (
    <>
    <h1>hello jupiter</h1>
  
    <ThemeProvider theme={theme}>
    <div className="App">
    <AutoCompleteSearchBox movieTitleResults={movieTitleResults} setMovieTitleResults={setMovieTitleResults}/>
      
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;