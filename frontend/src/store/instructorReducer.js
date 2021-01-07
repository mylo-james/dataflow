// Action Type Definitions
const SET_INSTRUCTORS = 'instructors/SET_INSTRUCTORS';

//Action Creators
export const setInstructors = (payload) => ({
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
const initState = {};

//Reducer
const instructorsReducer = (state = initState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_INSTRUCTORS:
            action.payload.forEach(
                (instructor) => (newState[instructor.id] = instructor)
            );
            return newState;
        default:
            return state;
    }
};

export default instructorsReducer;
