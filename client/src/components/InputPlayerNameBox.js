import React, {useState} from 'react';

const InputPlayerNameBox = ({ onNameSubmit }) => {
    const [name, setName] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name.trim() !== '') {
        onNameSubmit(name);
      }
    };
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
        <>
            <h2>This is the InputPlayerNameBox</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}

export default InputPlayerNameBox;

