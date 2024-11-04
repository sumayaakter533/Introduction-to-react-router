import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    };

    return (
        <div className='border p-2 rounded-md text-white'>
            <h5 className='text-lg'>Post id: {id}</h5>
            <p>{title}</p>
            <Link to={`/post/${id}`} className='btn btn-neutral w-full mt-4'>
                Post Details
            </Link>

            {/* Show details by button onclick function */}
            <button
                onClick={handleShowDetails}
                className='btn btn-neutral w-full mt-2'>
                Show Details OnClick
            </button>
        </div>
    );
};

export default Post;
