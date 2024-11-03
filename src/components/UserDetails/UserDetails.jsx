import React from "react";
import { useLoaderData } from "react-router-dom";
import "./userDetails.css";

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, website, phone, address, company } = user;
    return (
        <div>
            <h3 className='text-2xl text-center'>Details About User</h3>
            <ul className='border rounded-lg p-4 w-4/12 m-auto my-8 flex flex-col gap-2'>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Website: {website}</li>
                <li>Phone: {phone}</li>
                <li>
                    Address: {` `}
                    {address.street}, {` `}
                    {address.city}
                </li>
                <li>Company: {company.name}</li>
            </ul>
        </div>
    );
};

export default UserDetails;
