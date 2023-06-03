const baseURL = 'http://localhost:9000/api/games_history/';

//this would fetch all of our user's previous games history (wins, losses, etc.)
export const getGamesHistory = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

//this would save a new entry to the db, used whenever a game is completed
//the 'payload' is the data that makes up this new entry, held in state during games and passed to this function upon end of game.
export const postGameHistory = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

//i don't actually think we'll need this one, unless maybe they quit mid game. It might be easier to have a 'give up' button that automatically saves the game as a loss
//also, the clarify, this would delete only a single game from memory, not all of them.
export const deleteGameHistory = (id) => {
    return fetch(baseURL, {
        method: 'DELETE'
    })
}

//used for updating an entry, if we want to go this way.
//HOW WOULD THIS WORK?: we could create a gameHistory entry at start of game instead and update it as we go.
export const putGameHistory = (updatedPayload) => {
    return fetch(baseURL + updatedPayload._id, {
        method: 'PUT',
        body: JSON.stringify(updatedPayload),
        headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
}