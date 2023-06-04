import React, { useEffect } from 'react';
import App from '../App';

// material ui library imports
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/system';



// I need to pass in state as a prop here
const AutoCompleteSearchBox = ({ movieTitleResults, setMovieTitleResults, handleGuessSubmit}) => {

    useEffect(() => {
        // fetch('http://www.boredapi.com/api/activity?type=recreational') - tried this but wasn't suited
        fetch('https://www.balldontlie.io/api/v1/players')
            .then((response) => response.json())
            .then((json) => setMovieTitleResults(json.data))
    }, [])
    // testing to see if the data is accessible out with there ^
    console.log(movieTitleResults)

    return (
        <>
        <h2>This is the AutoCompleteSearchBox component</h2>
        <form>
            <Stack sx={{ width: 300 }}>
            <Autocomplete
                id="names_demo"

                // getOptionLabel() is how the individual label will be displayed
                getOptionLabel={(movieTitleResults) =>
                `${movieTitleResults.first_name} ${movieTitleResults.last_name}`
                }
                // options is just to display all of the options available (for example, if we had Home Alone and then Home Alone 2, if someone typed 'Home' then they'd come up)
                options={movieTitleResults}
                sx={{ width: 300 }}

                // styles but this isn't necessary as we could do CSS separately like using styled components maybe
                isOptionEqualToValue={(option, value) =>
                // this is to only show one option if the value matches something so if it was Home Alone 2, the other Home Alone movies wouldn't show in the dropdown autocomplete
                option.first_name === value.first_name
                }
                // if they type a movie title that's not in the API then it's just a message that can say no movie found or something in the dropdown
                noOptionsText={'no movies we hold match with what you have typed in'}

                // renders the options on the page
                renderOptions={(props, movieTitleResults) => (
                    // the box is gonna be seen as an li item so it'll appear in a box
                    // key here ensures every li tag or 'box' has a unique id associated with it
                    // props is here so that one item from the dropdown can be clicked and can be used for some other component maybe
                    <Box component='li' {...props} key={movieTitleResults.id}>
                        {movieTitleResults.first_name} {movieTitleResults.last_name}
                    </Box>
                )}

                renderInput={(params) => <TextField {...params} label="Type in your movie title guess"/>}

                />
                {/* this is the onClick so button so when they've typed something it moves their answer to the guesses attempted, maybe on click on the input could also work */}
                <button onClick={handleGuessSubmit}>Submit Guess</button>
            </Stack>
            </form>
        </>
    );
};

export default AutoCompleteSearchBox;

