import * as types from '../constants/ActionTypes';
var initState = {}

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_USER:
            localStorage.setItem('user', JSON.stringify(action.user));
            state = action.user;
            return state;
        default:
            return state;
    }
};

export default myReducer;