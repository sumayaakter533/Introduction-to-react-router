import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex flex-col justify-center h-screen items-center gap-10'>
            <h1 className='text-6xl font-bold'>Oops!!</h1>
            <p className='text-2xl'>{error.statusText || error.message}</p>
            {error.status === 404 && (
                <p className='text-lg'>
                    Go back to{" "}
                    <Link to='/' className='btn'>
                        Home
                    </Link>
                </p>
            )}
        </div>
    );
};

export default ErrorPage;
