import React, { useEffect } from 'react';
import App from '../App';

// material ui library imports
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';

// styles
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;


    .submit-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        padding: 30px;
        width: 140px;
        background-color: rgb(105, 27, 58);
        border: none;
        cursor: pointer;
        color: rgb(255, 255, 255);
        border-radius: 8px;
        font-size: 20px;
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

const InputGuessesBox = ({ movies, selectedOption, setSelectedOption, onGuessSubmit, handleGuessSubmit, emptyInputErrorMessage, setEmptyInputErrorMessage, isCongratulationsModalOpen, guesses }) => {
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

    return (
        <>
            <StyledContainerDiv>
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
                            renderOption={(props, option) => {
                                const isOptionSelected = option === selectedOption;
                                const isAlreadySelected = guesses.includes(option.original_title);

                                return (
                                    <Box
                                        component="li"
                                        {...props}
                                        onClick={() => handleOptionClick(option)}
                                        className={`${isOptionSelected ? 'disabled-option' : ''}`}
                                        // Disable the option if it has already been selected
                                        style={{ cursor: isAlreadySelected ? 'not-allowed' : 'pointer' }}
                                        // Disable the option if it has already been selected
                                        tabIndex={isAlreadySelected ? -1 : 0}
                                    >
                                        {option.original_title}
                                    </Box>
                                );
                            }}




                            // was unsure about this so read about it
                            // 
                            renderInput={(params) => (<TextField {...params} label='Please type in your movie title guess and click submit...' required
                            />

                            )}
                        />
                        <div><button className="submit-button" type="submit">Submit</button></div>
                    </Stack>
                </StyledFormContainer>
            </StyledContainerDiv>
        </>
    );
};

export default InputGuessesBox;