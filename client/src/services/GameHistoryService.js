const baseURL = 'http://localhost:9000/api/games_history/';

export const getGamesHistory = () => {
    return fetch(baseURL)
    .then(res => res.json())
}