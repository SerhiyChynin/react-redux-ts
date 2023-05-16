import axios from "axios";
import { UserAction, UserActionTypes } from "../../types/user"
import { Dispatch } from 'redux';
import UserList from "../../components/UserList";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 700)
        }
        catch (err) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузке пользователей!'
            })
           
        }
    }
}