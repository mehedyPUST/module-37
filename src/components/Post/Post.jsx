import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { body, title, id } = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='p-4 rounded-xl border border-green-500'>
            <p className='font-bold text-xl'>{title}</p>

            <Link to={`/posts/${id}`}>
                <button>Show Details</button>

            </Link>

            <button onClick={handleNavigate}>details of {id}</button>
        </div>
    );
};

export default Post;