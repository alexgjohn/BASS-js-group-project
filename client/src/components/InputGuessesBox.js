import React, { useEffect } from 'react';
import App from '../App';

// material ui library imports
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';

// styles
import styled from 'styled-components';


const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .submit-button {
        margin: 10px;
        size: 40px;
        padding: 10px;
        width: 100px;
        margin-left: 10px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .disabled-option {
        color: gray;
        pointer-events: none;
        cursor: not-allowed;
    }

    .disabled-option.selected {
    cursor: pointer;
}
`

// I need to pass in state as a prop here movie title, when selected, set selected func

const InputGuessesBox = ({ movies, selectedOption, setSelectedOption, onGuessSubmit, handleGuessSubmit, emptyInputErrorMessage, setEmptyInputErrorMessage, isCongratulationsModalOpen }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption) {
            handleGuessSubmit(selectedOption.original_title);
        } else {
            setEmptyInputErrorMessage('please choose a movie title before clicking the submit button');
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    // console.log(selectedOption)
    // onGuessSubmit(selectedOption);




    // const movieTitleResults = movies.map((movie) => {
    //     return movie.original_title
    // })



    return (
        <>
            <StyledFormContainer onSubmit={handleSubmit}>
                <Stack sx={{ width: 500 }}>
                    <Autocomplete
                        id="autocomplete"
                        // getOptionLabel() is how the individual label will be displayed
                        getOptionLabel={(option) => `${option.original_title}`}
                        // options is just to display all of the options available (for example, if we had Home Alone and then Home Alone 2, if someone typed 'Home' then they'd come up)
                        options={movies}
                        sx={{ width: 500 }}
                        // styles but this isn't necessary as we could do CSS separately like using styled components maybe
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        // this is to only show one option if the value matches something so if it was Home Alone 2, the other Home Alone movies wouldn't show in the dropdown autocomplete

                        // if they type a movie title that's not in the API then it's just a message that can say no movie found or something in the dropdown
                        noOptionsText='Soz pal, nothing matches what you have typed in'
                        value={selectedOption}
                        onChange={(event, newValue) => setSelectedOption(newValue)}
                        // renders the options on the page
                        renderOption={(props, option) => (
                            // the box is gonna be seen as an li item so it'll appear in a box
                            // key here ensures every li tag or 'box' has a unique id associated with it
                            // props is here so that one item from the dropdown can be clicked and can be used for some other component maybe
                            <Box
                                component="li"
                                {...props}
                                onClick={() => handleOptionClick(option)}
                                className={option === selectedOption ? 'disabled-option' : ''}
                            >
                                {option.original_title}
                            </Box>
                        )}
                        // was unsure about this so read about it
                        // 
                        renderInput={(params) => (<TextField {...params} label='Please type in your movie title guess and click submit...' required
                        />

                        )}
                    />
                    <div><button className="submit-button" type="submit">Submit</button></div>
                </Stack>
            </StyledFormContainer>
        </>
    );
};

export default InputGuessesBox;