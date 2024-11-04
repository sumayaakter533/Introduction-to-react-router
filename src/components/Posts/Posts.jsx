import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h3 className='text-2xl text-center py-8'>
                Available Posts: {posts.length}
            </h3>
            <div className='w-6/12 p-4 m-auto border rounded-md flex flex-col gap-4 mb-10'>
                {posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
        </div>
    );
};

export default Posts;
