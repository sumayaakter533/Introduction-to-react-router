import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className='border rounded-lg p-6'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>
                <button className='btn btn-neutral w-full mt-4'>
                    Show Details
                </button>
            </Link>
        </div>
    );
};

export default User;
