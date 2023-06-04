const LeaderBoard = ({users}) => {


    const listOfUserNames = users.map((user) => {
        if (user === undefined) {
            return null
        }
        return (
            <li key={user._id}>{user.userName} - Played: {user.played}, Wins: {user.wins}</li>
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