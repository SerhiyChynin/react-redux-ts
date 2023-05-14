import { UserActionTypes } from "../../types/todo"
import { Dispatch } from 'redux';


export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
        }
        catch (err) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR})
            // https://jsonplaceholder.typicode.com/users
        }
    }
}