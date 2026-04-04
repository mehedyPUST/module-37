import React from 'react';

const User = ({ user }) => {
    return (
        <div className='border border-purple-500 p-3 rounded-xl shadow-md bg-white'>
            <p>{user.name}</p>
            <h3>Username: {user.username}</h3>
            <h3><small>Email: {user.email}</small></h3>
        </div>
    );
};

export default User;