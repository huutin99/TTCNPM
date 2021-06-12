import * as types from '../constants/ActionTypes';

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}