// Action Type Definitions
/*      TO DO       */

//Action Creators
/*      TO DO       */

//Thunks
/*      TO DO       */

// Define an intial state
const initState = [
    {
        name: 'Test User',
        houseId: 4,
        teacher: false,
    },
];

//Reducer
const userReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
