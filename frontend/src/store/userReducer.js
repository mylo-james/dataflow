// Action Type Definitions
const SET_USERS = 'users/SET_USERS';

//Action Creators
export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

//Thunks
export const getUsersByInstructor = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/instructors/${id}`);
    const users = await res.json();

    dispatch(setUsers(users));
};

// Define an initial state
const initState = {};

//Reducer
const userReducer = (state = initState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USERS:
            action.payload.forEach((user) => (newState[user.id] = user));
            return newState;
        default:
            return state;
    }
};

export default userReducer;
