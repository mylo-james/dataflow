import _ from 'lodash';
// Action Type Definitions
const SET_USERS = 'users/SET_USERS';

//Action Creators
const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});

//Thunks
export const getUsersByInstructor = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/instructors/${id}`);
    const users = await res.json();
    console.log(users);
    dispatch(setUsers(users));
};

// Define an initial state
const initState = {
    1: {
        id: 1,
        name: 'Student',
        instructorId: 4,
        projectName: 'SafeSpace',
        projectRepoLink: 'https://github.com/mylo-james/dataflow',
        projectLiveLink: 'https://safespace-mjames.herokuapp.com/',
    },
};

//Reducer
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            let newState = _.mapKeys(action.payload, 'id');
            console.log(newState);
            return newState;
        default:
            return state;
    }
};

export default userReducer;
