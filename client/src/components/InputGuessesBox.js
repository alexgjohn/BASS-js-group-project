import React, {useEffect} from 'react';

// material ui library imports
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/system';

const InputGuessesBox = ({ value, onChange, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <>
        {/* method 1 I'm thinking */}
        <h2>this is one way</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    What's the name of the movie?
                    <div>
                        <input type="text" value={value} onChange={onChange} />
                    </div>
                </label>

                <button type="submit">Submit</button>
            </form>
            
            <h2>this is a second way using material UI</h2>


        </>
    );
};

export default InputGuessesBox;
