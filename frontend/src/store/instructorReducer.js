// ActionTypes
/* Create an ActionType called SET_INSTRUCTORS                         TODO 9 */

//ActionCreators
/* Create an ActionCreator called setInstructor with a type 
   of SET_INSTRUCTORS and a payload of the data from
   your API.                                                           TODO 8 */

//ThunkActionCreators
/* Begin writing and export a ThunkActionCreator called 
   getInstructors that...
      1. Makes a fetch to '/api/instructors'                           TODO 5 */
export const getInstructors = () => async (dispatch) => {
    const res = await fetch('/api/instructors');
};

/* Finish writing the getInstructors ThunkActionCreator that...
      1. Parses the data from the response
      2. Dispatches the ActionCreator 'setInstructors' 
        passing in the data from your API                              TODO 7 */

// Initial state
/* Define your initial state. You are going to be using normalized state
   meaning that you will have an object that has id's as keys, and the 
   the data as values.                                                 TODO 1 */
const initState = {
    1: {
        id: 1,
        name: 'Mylo',
    },
    2: {
        id: 2,
        name: 'Nish',
    },
};

//Reducer
/* Add a case to instructorReducer that looks for the action.type 
   of SET_INSTRUCTORS that...
    1. Iterates over the instructors and adds a key value pair to newState
        a. key - the instructor's id
        b. value - the instructor object
    2. Returns newState                                               TODO 10 */

const instructorsReducer = (state = initState, action) => {
    // eslint-disable-next-line no-unused-vars
    const newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state;
    }
};

export default instructorsReducer;
