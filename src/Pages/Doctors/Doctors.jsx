import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ doctorsData }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleDoctors = showAll ? doctorsData : doctorsData.slice(0, 6);

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='space-y-3 text-center'>
                <h1 className='text-4xl font-bold'>Our Best Doctors</h1>
                <p className='text-gray-600'>
                    Best Doctors was founded on the ideal that a persons location should not limit the quality of their care. As a result, our mission is to bring together the best medical minds in the world to get you the right diagnosis and treatment, no matter where you live.
                </p>
            </div>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 p-7 rounded-xl'>
                    {
                        visibleDoctors.map((doctor) => (
                            <Doctor key={doctor.id} doctor={doctor} />
                        ))
                    }
                </div>
            </Suspense>

           
            {
                doctorsData.length > 6 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 bg-cyan-700 hover:bg-cyan-900 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'Show All Doctors'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Doctors;











