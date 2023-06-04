const baseURL = 'http://localhost:9000/api/users/';

//this would fetch all of our users
export const getUsers = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

//adds new user to the db
export const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(result => console.log("We got back:", result._id))
}

//delete a user, if we need to
export const deleteUser = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

//when user is created, db id is automatically added. We need a method for retrieving this so that we can run function below
//or main one, really. Updates the user's played and wins properties at end of each game.
export const putUser = (updatedPayload) => {
    return fetch(baseURL + updatedPayload._id, {
        method: 'PUT',
        body: JSON.stringify(updatedPayload),
        headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
}