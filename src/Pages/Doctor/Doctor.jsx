import React from 'react';

const Doctor = ({doctor}) => {

    const {image, name, education, speciality, experience, registration_number, view_details}=doctor;

    return (
        <div className='p-7 h-auto bg-cyan-50 rounded-xl space-y-3'>
            <div className='bg-cyan-800  pt-5 rounded-lg flex justify-center '>
                <img className='w-[200px]' src={image} alt="" />
            </div>
            <div className='flex justify-between mb-5'>
                <button className='px-5 py-0.5 rounded-2xl bg-gradiant-lr bg-green-100 text-green-400'>Available</button>
                <button className='px-5 py-0.5 bg-gradiant-lr bg-cyan-100 text-cyan-500 font-semibold rounded-2xl'>{experience}</button>
            </div>
            <div>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-gray-400'><small>{education}</small></p>
                <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
            </div>
                <p className='text-gray-400'><small>{registration_number}</small></p>
            
            <div className='flex justify-center mt-5'>
            <button className='px-30 py-2 border-1 border-cyan-500 cursor-pointer text-cyan-700 rounded-4xl hover:text-white hover:bg-cyan-700'>View Details</button>
            </div>
        </div>
    );
};

export default Doctor;