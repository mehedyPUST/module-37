import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    return (
        <div className='border border-green-500 rounded-xl p-5 relative'>
            <br />
            <button className='btn btn-primary absolute top-2 right-2' onClick={() => navigate(-1)}>X</button>
            <p>{post.body}</p>

        </div>
    );
};

export default PostDetail;