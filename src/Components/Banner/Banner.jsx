import React from 'react';

import doctors1 from '../../assets/doctors1.jpg';
import doctors2 from '../../assets/doctors2.jpg'


const Banner = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto p-10 text-center space-y-4 bg-cyan-50 rounded-4xl mt-10 border-white border-3">
                <h1 className='font-bold lg:text-6xl text-4xl'>Dependable Care, Backed by Trusted <br />
                Professionals.</h1>
                <p className='text-base text-gray-500'>Encompasses the diagnosis, treatment, and prevention of diseases and injuries, as well as the promotion of health and well-being. It is a broad field involving various professionals like doctors, nurses, and therapists, and encompasses a wide range of services from routine check-ups to specialized treatments</p>
                <div className='flex items-center justify-center gap-5'>
                    <input className='border-black border-2 rounded-4xl px-10 py-1.5 text-start lg:w-8/12 w-4/12' type="text"  placeholder='Search any doctor'/>
                    <button className='px-6 py-2 bg-cyan-600 hidden lg:block font-semibold rounded-4xl text-white cursor-pointer'>Search Now</button>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 p-10'>
                    <img className='w-full rounded-xl' src={doctors1} alt=""/>
                    <img className='w-full rounded-xl' src={doctors2} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;