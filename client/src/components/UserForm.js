import { useState } from 'react';

const UserForm = ({createUser}) => {
    const [userName, setUserName] = useState("");
    // const [wins, setWins] = useState(0);
    // const [played, setPlayed] = useState(0);

    const handleNameChange = (ev) => setUserName(ev.target.value);
    //const handleEmailChange = (ev) => setEmail(ev.target.value);
    //const handleCheckInChange = (ev) => setCheckedIn(ev.target.checked ? ev.target.checked : false);

    const handleSubmit = ev => {
        ev.preventDefault();
        createUser({ //will send a post request to the database and add a user
            userName: userName,
            wins: 0,
            played: 0
        });
        setUserName("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <h1>Add a Username</h1>
        <div className="group">
            <label htmlFor="name">Username:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            value={userName} 
            required 
            onChange={handleNameChange}
            />
        </div>
        

        <input type="submit" name="submit" value="Save" />
        </form>
    )
};

export default UserForm;