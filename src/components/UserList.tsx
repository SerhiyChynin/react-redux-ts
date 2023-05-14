import React from 'react';
import { useSelector } from 'react-redux';
import { useTypesSelectors } from '../hooks/useTypesSelectors';



const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelectors(state => state.user);
    // console.log(state);
    
    return (
        <div>

        </div>
    )
}

export default UserList;