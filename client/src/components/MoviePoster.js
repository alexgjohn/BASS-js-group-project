import React, {useState} from 'react'
import styled from "styled-components"


const StyledImage1 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(20%);
`

const StyledImage2 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(40%);
`
const StyledImage3 = styled.img`
    width: 500px;
    height: 800px;
    clip-path: circle(60%);
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