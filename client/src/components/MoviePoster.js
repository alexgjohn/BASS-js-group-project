import React, {useState} from 'react'
import styled, { keyframes } from "styled-components"


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
        clip-path: circle(30% at 50% 50%);
    }
`
const slowCircleAnimation3 = keyframes`
    from {
        clip-path: circle(30% at 50% 50%);
    }
    to {
        clip-path: circle(50% at 50% 50%);
    }
`

const StyledImage1 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(15%);
    animation: ${slowCircleAnimation1} 3s ease-in alternate;
`

const StyledImage2 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(30%);
    animation: ${slowCircleAnimation2} 3s ease-in alternate;
`
const StyledImage3 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(50%);
    animation: ${slowCircleAnimation3} 3s ease-in alternate;
`
const StyledImage4 = styled.img`
    width: 500px;
    height: 800px;
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
            <div className="poster-container">
                {numberOfGuesses === 0? <StyledImage1 src={posterPath}/> : null}
                {numberOfGuesses === 1? <StyledImage2 src={posterPath}/> : null}
                {numberOfGuesses === 2? <StyledImage3 src={posterPath}/> : null}
                {numberOfGuesses === 3? <StyledImage4 src={posterPath}/> : null}

                

            </div>
        </>
    )
}

export default MoviePoster