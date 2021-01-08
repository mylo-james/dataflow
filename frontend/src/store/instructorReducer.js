// ActionTypes
/* Create an ActionType called SET_INSTRUCTORS                           TODO */

//ActionCreators
/* Create an ActionCreator called setInstructor with a type 
   of SET_INSTRUCTORS and a payload of the data from
   your API.                                                             TODO */

//ThunkActionCreators
/* Create and export a ThunkActionCreator called 
   getInstructors that...
      1. Makes a fetch to '/api/instructors'
      2. Parses the data from the response
      3. Dispatches the ActionCreator 'setInstructors' 
        passing in the data from your API                                TODO */

// Initial state
/* Define your initial state. You are going to be using normalized state
   meaning that you will have an object that has id's as keys, and the 
   the data as values.                                                   TODO */
const initState = {};

//Reducer
/* Add a case to instructorReducer that looks for the action.type 
   of SET_INSTRUCTORS that...
    1. Iterates over the instructors and adds a key value pair to newState
        a. key - the instructor's id
        b. value - the instructor object
    2. Returns newState                                                  TODO */

const instructorsReducer = (state = initState, action) => {
    // eslint-disable-next-line no-unused-vars
    const newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state;
    }
};

export default instructorsReducer;
