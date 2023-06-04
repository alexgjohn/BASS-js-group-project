import React from 'react';

const InputGuessesBox = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          What's the name of the movie?
          <div>
            <input type="text" value={value} onChange={onChange} />
          </div>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputGuessesBox;
