import React, { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState("");

    const handleSubmti = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordError("Password must be 8 characters or longer");
        } else {
            setPasswordError("");
            console.log(name);
            console.log(email);
            console.log(password);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h3 className='text-center text-4xl'>Stateful Form</h3>
            <form
                onSubmit={handleSubmti}
                className='card-body border rounded-2xl w-6/12 mx-auto mt-8 mb-12'>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={handleNameChange}
                        className='input input-bordered'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        onChange={handleEmailChange}
                        className='input input-bordered'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={handlePasswordChange}
                        className='input input-bordered'
                        required
                    />
                    <div>
                        {passwordError && (
                            <p className='btn btn-error mt-2 w-full justify-start'>
                                {passwordError}
                            </p>
                        )}
                    </div>
                </div>
                <div className='form-control mt-6'>
                    <button value='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StatefulForm;
