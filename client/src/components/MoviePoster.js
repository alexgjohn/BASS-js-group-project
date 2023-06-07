import React, {useState} from 'react'
import styled from "styled-components"


const StyledContainer = styled.div`
    margin-top: 10px;
    margin: 0;
`

const StyledImage1 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(20%);
    transition-delay: 1s;
    transition: all 1s ease-out;
    margin: 0;

`

const StyledImage2 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(40%);
    transition-delay: 1s;
    transition: all 1s ease-out;
    margin: 0;

`
const StyledImage3 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(60%);
    transition-delay: 1s;
    transition: all 1s ease-out;
    margin: 0;

`
const StyledImage4 = styled.img`
    width: 100%;
    max-height: calc(100vh - 100px); 
    object-fit: contain;
    margin-top: 20px;
    margin: 0;

`

const MoviePoster = ({targetMovie, guesses}) => {

    const [imageClass, setImageClass] = useState('StyledImage1');
    const classOptions = ['StyledImage1', 'StyledImage2', 'StyledImage3', 'StyledImage4'];

    const handleClassChange = () => {
        const currentIndex = classOptions.indexOf(imageClass);
        const nextIndex = (currentIndex + 1) % classOptions.length;
        const nextClass = classOptions[nextIndex];
        setImageClass(nextClass);
    }

    const numberOfGuesses = guesses.length



    if (targetMovie === undefined){
        return null
    } else if (targetMovie === null) {
        return null
    }

    const posterPath = `https://image.tmdb.org/t/p/original${targetMovie.poster_path}`


    // if ('StyledImage1'){
    //     handleClassChange()
    // }

    return(
        <>
            <StyledContainer className="poster-container">
                <div>{numberOfGuesses === 0 ? <StyledImage1 src={posterPath}/> : null}</div>
                <div>{numberOfGuesses === 1 ? <StyledImage2 src={posterPath}/> : null}</div>
                <div>{numberOfGuesses === 2 ? <StyledImage3 src={posterPath}/> : null}</div>
                <div>{numberOfGuesses === 3 ? <StyledImage4 src={posterPath}/> : null}</div>
            </StyledContainer>
        </>
    )
}

export default MoviePoster