import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPlayerNameBox = () => {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleButtonClick = () => {
// need to put logic hereeeee

// https://reactnavigation.org/docs/navigating/#:~:text=The%20navigate%20function%20roughly%20means,that%20it%20would%20do%20nothing
    navigate(`/game?name=${playerName}`);
  };

  return (
    <div>
      <input type="text" value={playerName} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Start Game</button>
    </div>
  );
};

export default InputPlayerNameBox;
