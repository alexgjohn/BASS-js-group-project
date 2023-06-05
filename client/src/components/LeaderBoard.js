const LeaderBoard = ({ users }) => {
const listOfUserNames = users
    .map((user) => {
    const winRate = Math.floor((user.wins / user.played) * 100);

    return {
        id: user._id,
        userName: user.userName,
        winRate: winRate,
    };
    })
    .sort((a, b) => b.winRate - a.winRate) // Sort in descending order based on winRate
    .map((user) => (
    <li key={user.id}>
        {user.userName}: Win rate - {user.winRate}%
    </li>
    ));

return (
    <>
    <h2>This is the LeaderBoard (extension)</h2>
    <ul>{listOfUserNames}</ul>
    </>
);
};

export default LeaderBoard;