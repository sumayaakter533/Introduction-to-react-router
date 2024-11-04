import React from "react";

const Hero = () => {
    return (
        <div className='mockup-window bg-base-300 w-11/12 m-auto h-[400px]'>
            <div className='bg-base-200 flex justify-center px-4 py-16 h-[400px]'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <h1 className='text-5xl font-bold'>Hello there</h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
