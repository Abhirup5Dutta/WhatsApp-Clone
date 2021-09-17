export const initialState = {
    user: null,
};

// We can dispatch actions into the data layer from this reducer
export const actionTypes = {
    SET_USER: "SET_USER",
    DELETE_USER: "DELETE_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionTypes.DELETE_USER:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
};

export default reducer;