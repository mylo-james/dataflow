// Action Type Definitions
const SET_USERS_BY_HOUSE = 'users/SET_USERS_BY_HOUSE';

//Action Creators
const setUsersByHouse = (payload) => ({
    type: SET_USERS_BY_HOUSE,
    payload,
});

//Thunk Action Creators
export const getUsersByHouse = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/houses/${id}`);
    const users = await res.json();
    dispatch(setUsersByHouse(users));
};

// Define an initial state
const initState = [
    {
        id: 0,
        name: 'Test User',
        House: {
            name: 'Ravenclaw',
        },
        teacher: false,
    },
    {
        id: 1,
        name: 'Test User2',
        House: {
            name: 'Hufflepuff',
        },
        teacher: true,
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
