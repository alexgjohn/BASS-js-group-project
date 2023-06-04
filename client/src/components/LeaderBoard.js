const LeaderBoard = ({users}) => {

    const listOfUserNames = users.map((user) => {
        return (
            <li key={user._id}>{user.userName} - Wins: {user.wins}</li>
        )
    })
    return (
        <>
        <h2>This is the LeaderBoard (extension)</h2>
        <ul>
            {listOfUserNames}
        </ul>
        </>
    );
}

export default LeaderBoard;