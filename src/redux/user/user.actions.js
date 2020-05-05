export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', //same type the user reducer is expecting
    payload: user
})