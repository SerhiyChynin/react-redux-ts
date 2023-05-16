import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useTypesSelectors } from '../hooks/useTypesSelectors';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';
import type {} from 'redux-thunk/extend-redux';
import { useAction } from '../hooks/useActions';



const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelectors(state => state.user);
    const {fetchUsers} = useAction();

    useEffect(() => {
        fetchUsers()
    }, [])
        if (loading) {
            return <h1>Идет загрузка...</h1>
        }
        if (error) {
            return <h1>{error}</h1>
        }
    
    
    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList;