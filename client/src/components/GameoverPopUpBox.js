import ReactModal from 'react-modal';

function GameoverPopupModal({ isOpen, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Modal"
    >
      {/* Content for the pop-up window */}
      <h2>Popup Content</h2>
      <p>Game over!</p>
      <p>Play another game?</p>
      <p>Exit</p>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
}

export default GameoverPopupModal;