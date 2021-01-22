// ActionTypes
/* Create an ActionType called 'SET_USERS'                             TODO 9 */

//ActionCreators
/* Create an ActionCreator called 'setUsers' with a type of 
   'SET_USERS' and a payload of the data from
   your API.                                                           TODO 8 */

//ThunkActionCreators
/* Begin and export a ThunkActionCreator called 
   getUsersByInstructor that...
      1. Intakes an Instructor's id,
      2. Makes a fetch to '/api/groups/:id'                            TODO 5 */
export const getUsersByInstructor = (instructorId) => async (dispatch) => {};
/* Finish the ThunkActionCreator called etUsersByInstructor that...
      3. Parses the data from the response
      4. Dispatches the ActionCreator 'setUsers' passing in the data 
         from your API                                                 TODO 7 */

// Initial state
/* Define your initial state. You are going to be using normalized state
   meaning that you will have an object that has id's as keys, and the 
   the data as values.                                                 TODO 1 */

const initState = {
    1: {
        id: 1,
        name: 'Jeff',
        instructorId: 1,
        projectName: 'CoolProject',
        liveLink: 'http://live.com',
        repoLink: 'http://repo.com',
    },
};

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
        default:
            return state;
    }
};

export default userReducer;
