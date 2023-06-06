import ReactModal from 'react-modal';
import styled from 'styled-components';


const PopupBox = styled.article`
    /* text-align: center; */
    `
    
    const Congrats = styled.h1`
    font-size: 50px;
    color: red;
    `
    const popUpStyle = {
        content: {
          width: '50%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
        },

      };

const SmallerPoster = styled.img`
    width: 150px;
    height: 240px;
`

function GameOverPopupModal({ targetMovie, isOpen, onClose }) {

    const movieTitle = targetMovie ? targetMovie.original_title : '';

    const posterPath = targetMovie ? `https://image.tmdb.org/t/p/original${targetMovie.poster_path}` : null

    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Popup Modal"
        style={popUpStyle}
        ariaHideApp={false}
        
        >
        <PopupBox>
            <Congrats>Game Over!</Congrats>
            <p>Play next game?</p>
            <p>The movie is <b>{movieTitle}</b></p>
            {posterPath && <SmallerPoster src={posterPath} />}
            <p>Exit</p>
            <button onClick={onClose}>Close</button>
        </PopupBox>
        </ReactModal>
    );
}

export default GameOverPopupModal;