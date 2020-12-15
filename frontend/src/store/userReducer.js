// Action Type Definitions
const SET_USERS_BY_HOUSE = 'users/SET_USERS_BY_HOUSE';

//Action Creators
const setUsersByHouse = (payload) => ({
    type: SET_USERS_BY_HOUSE,
    payload,
});

//Thunks
export const getUsersByHouse = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/house/${id}`);
    const users = await res.json();
    dispatch(setUsersByHouse(users));
};

// Define an intial state
const initState = [
    {
        id: 0,
        name: 'Test User',
        houseId: 4,
        teacher: false,
    },
];

//Reducer
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS_BY_HOUSE:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
