import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    console.log(user);
  return (  
    <div>
        <h2>List of Users</h2>
        {user.isLoading && <div>Loading...</div>}
        {!user.isLoading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.isLoading && user.users.length ? (
            <ul>
                {
                    user.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        ) : null}
    </div>
  )
}
