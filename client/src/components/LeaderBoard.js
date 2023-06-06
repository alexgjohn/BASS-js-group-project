import LeaderBoardTable from './LeaderBoardTable'

const LeaderBoard = ({ users }) => {
const listOfUserNames = users
    .map((user) => {
        if (user.played === 0){
            return {
                id: user._id,
                userName: user.userName,
                winRate: 0
            };
        } else {
            const winRate = Math.floor((user.wins / user.played) * 100);

            return {
                id: user._id,
                userName: user.userName,
                winRate: winRate,
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