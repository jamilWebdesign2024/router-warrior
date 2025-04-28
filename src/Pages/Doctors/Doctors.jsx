import React, { Suspense } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doctorsData}) => {

    console.log(doctorsData);
    

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='space-y-3 text-center'>
                <h1 className='text-4xl font-bold'>Our Best Doctors</h1>
                <p className='text-gray-600'>Best Doctors was founded on the ideal that a person’s location should not limit the quality of their care. As a result, our mission is to bring together the best medical minds in the world to get you the right diagnosis and treatment, no matter where you live. We are proud to offer a variety of services which focus on getting you the very best care-each available without the need to travel</p>
            </div>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 p-7 rounded-xl'>
                        {
                            doctorsData.map((doctor)=><Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
            </Suspense>
        </div>
    );
};

export default Doctors;










