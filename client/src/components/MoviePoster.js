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



const MoviePoster = ({targetMovie}) => {

    const [imageClass, setImageClass] = useState('StyledImage1');
    const classOptions = ['StyledImage1', 'StyledImage2', 'StyledImage3'];

    const handleClassChange = () => {
        const currentIndex = classOptions.indexOf(imageClass);
        const nextIndex = (currentIndex + 1) % classOptions.length;
        const nextClass = classOptions[nextIndex];
        setImageClass(nextClass);
    }


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
                <StyledImage1 src={posterPath}/>
                <StyledImage2 src={posterPath}/>
                <StyledImage3 src={posterPath}/>

                

            </div>
        </>
    )
}

export default MoviePoster