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

function GameOverPopupModal({ isOpen, onClose }) {

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
            <p>Exit</p>
            <button onClick={onClose}>Close</button>
        </PopupBox>
        </ReactModal>
    );
}

export default GameOverPopupModal;