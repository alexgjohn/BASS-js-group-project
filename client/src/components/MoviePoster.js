
import styled from "styled-components"


const StyledImage = styled.img`
    width: 500px;
    height: 800px;
`

const MoviePoster = ({targetMovie}) => {

    if (targetMovie === undefined){
        return null
    } else if (targetMovie === null) {
        return null
    }

    const posterPath = `https://image.tmdb.org/t/p/original${targetMovie.poster_path}`

    return(
        <>
            <StyledImage src={posterPath}/>
        </>
    )
}

export default MoviePoster