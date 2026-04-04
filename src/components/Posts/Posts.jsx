import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <p>cxvgdcb {posts.length}</p>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;