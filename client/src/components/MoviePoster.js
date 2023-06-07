import React, {useState} from 'react'
import styled, { keyframes } from "styled-components"


const StyledContainer = styled.div`
    margin-top: 10px;
    margin: 0;
`

const slowCircleAnimation1 = keyframes`
    from {
        clip-path: circle(0% at 50% 50%);
    }
    to {
        clip-path: circle(15% at 50% 50%);
    }
`
const slowCircleAnimation2 = keyframes`
    from {
        clip-path: circle(15% at 50% 50%);
    }
    to {
        clip-path: circle(25% at 50% 50%);
    }
`
const slowCircleAnimation3 = keyframes`
    from {
        clip-path: circle(25% at 50% 50%);
    }
    to {
        clip-path: circle(35% at 50% 50%);
    }
`

const StyledImage1 = styled.img`
    width: 500px;
    height: 800px;
    margin: 0;
    clip-path: circle(15%);
    animation: ${slowCircleAnimation1} 3s ease-in alternate;
`

const StyledImage2 = styled.img`
    width: 500px;
    height: 800px;
    margin: 0;
    clip-path: circle(25%);
    animation: ${slowCircleAnimation2} 3s ease-in alternate;
`
const StyledImage3 = styled.img`
    width: 500px;
    height: 800px;
    margin: 0;
    clip-path: circle(35%);
    animation: ${slowCircleAnimation3} 3s ease-in alternate;
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

    return (
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