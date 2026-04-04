import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            <h3>user details</h3>
            <p>{user.name}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserDetails;