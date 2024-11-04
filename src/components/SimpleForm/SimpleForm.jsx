import React from "react";

const SimpleForm = () => {
    const handleSubmti = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log("form submitted");
    };
    return (
        <div>
            <h3 className='text-center text-4xl'>Simple Form</h3>
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
                        placeholder='Enter your name'
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
                        className='input input-bordered'
                        required
                    />
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

export default SimpleForm;
