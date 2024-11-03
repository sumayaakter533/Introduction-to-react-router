import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className='w-6/12 m-auto'>
            <h3 className='text-2xl text-center my-8'>
                {users.length} Users Informations
            </h3>
            <div className='grid grid-cols-2 gap-4 my-8'>
                {users.map((user) => (
                    <User key={user.id} user={user}>
                        User
                    </User>
                ))}
            </div>
        </div>
    );
};

export default Users;
