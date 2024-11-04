import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='w-5/12 m-auto mb-10'>
            <h3 className='text-center text-2xl mb-8'>
                Post Details of Id {id}
            </h3>
            <div className='border p-4 rounded-lg'>
                <h5>
                    <span className='underline font-bold'>Title:</span>{" "}
                    <small>{title}</small>
                </h5>
                <p>
                    <span className='underline font-bold'>Description:</span>{" "}
                    <small>{body}</small>
                </p>
                <button
                    onClick={handleGoBack}
                    className='btn btn-neutral w-full mt-4'>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
