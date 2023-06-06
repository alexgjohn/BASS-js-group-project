import LeaderBoardTable from './LeaderBoardTable'

const LeaderBoard = ({ users }) => {
const listOfUserNames = users
    .map((user) => {
        if (user.played === 0){
            return {
                id: user._id,
                userName: user.userName,
                wins: user.wins,
                played: user.played,
                winRate: 0
            };
        } else {
            const winRate = Math.floor((user.wins / user.played) * 100);

            return {
                id: user._id,
                userName: user.userName,
                wins: user.wins,
                played: user.played,
                winRate: winRate
    };
        }
    })
    .sort((a, b) => b.winRate - a.winRate) // Sort in descending order based on winRate

return (
    <>
    <LeaderBoardTable users={listOfUserNames} />
    </>
);
};

export default LeaderBoard;