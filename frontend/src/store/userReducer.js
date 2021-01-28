// ActionTypes
/* Create an ActionType called 'SET_USERS'                             TODO 9 */
const SET_USERS = 'users/SET_USERS';
const SET_USER = 'users/SET_USER';
//ActionCreators
/* Create an ActionCreator called 'setUsers' with a type of 
   'SET_USERS' and a payload of the data from
   your API.                                                           TODO 8 */
const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

//ThunkActionCreators
export const getUserById = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user));
        return user;
    }
};
/* Begin and export a ThunkActionCreator called 
   getUsersByInstructor that...
      1. Intakes an Instructor's id,
      2. Makes a fetch to '/api/groups/'                            TODO 5 */
export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/groups');

    if (res.ok) {
        const users = await res.json();
        dispatch(setUsers(users));
    }
};
/* Finish the ThunkActionCreator called etUsersByInstructor that...
      3. Parses the data from the response
      4. Dispatches the ActionCreator 'setUsers' passing in the data 
         from your API                                                 TODO 7 */

// Initial state
/* Define your initial state. You are going to be using normalized state
   meaning that you will have an object that has id's as keys, and the 
   the data as values.                                                 TODO 1 */

const initState = {};

//Reducer
/* Add a case to userReducer that looks for the action.type 
   of SET_USERS that...
    1. Iterates over the users and adds a key value pair to newState
        a. key - the user's id
        b. value - the user object
    2. Returns newState                                               TODO 10 */

const userReducer = (state = initState, action) => {
    // eslint-disable-next-line no-unused-vars
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USERS:
            for (let user of action.payload) {
                newState[user.id] = user;
            }
            return newState;
        case SET_USER:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default userReducer;
