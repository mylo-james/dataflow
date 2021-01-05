import _ from 'lodash';
// Action Type Definitions
const SET_INSTRUCTORS = 'instructors/SET_INSTRUCTORS';

//Action Creators
const setInstructors = (payload) => ({
    type: SET_INSTRUCTORS,
    payload,
});

//Thunks
export const getInstructors = () => async (dispatch) => {
    const res = await fetch('/api/instructors');
    const instructors = await res.json();
    dispatch(setInstructors(instructors));
};

// Define an initial state
const initState = {
    1: {
        id: 1,
        name: 'James',
    },
};

//Reducer
const instructorsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INSTRUCTORS:
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
};

export default instructorsReducer;
