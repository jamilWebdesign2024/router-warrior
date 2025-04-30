// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { getStoreDoctor } from '../../Test/Test';
// import Doctor from '../Doctor/Doctor';

// const ApointList = () => {

//     const [doctorList, setDoctorList]=useState([]);

//     const data = useLoaderData();
//     console.log(data);

//     useEffect(()=>{
//         const storedDoctorData = getStoreDoctor();
//         const convertedStoreddoctors = storedDoctorData.map(id=>parseInt(id))
//         const listOfDoctor = data.filter(doctor=>convertedStoreddoctors.includes(doctor.id));
//         setDoctorList(listOfDoctor);
        
        
        
        
//     },[data])
    

//     return (
//         <div>
//             <button>doctor List: {doctorList.length}</button>
//             {/* {
//                 doctorList.map(doc=><Doctor key={doc.id} doctor={doc}></Doctor>)
//             } */}
//         </div>
//     );
// };

// export default ApointList;

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreDoctor } from '../../Test/Test';
import Doctor from '../Doctor/Doctor';

const ApointList = () => {
    const [doctorList, setDoctorList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedDoctorData = getStoreDoctor();
        const convertedStoreddoctors = storedDoctorData.map(id => parseInt(id));
        const listOfDoctor = data.filter(doctor => convertedStoreddoctors.includes(doctor.id));
        setDoctorList(listOfDoctor);
    }, [data]);

    return (
        <div className="w-10/12 mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-5">Appointment List: {doctorList.length}</h2>
            
            {
                doctorList.length === 0 ?
                <p className="text-gray-500">No appointments yet.</p>
                :
                <div>
                    <div className='bg-white w-10/12 mx-auto'>

                    </div>
                    <div>
                        <h1>My Today Appointments</h1>
                        <p>Here's a more detailed look at how to find or book doctor appointments</p>
                    </div>
                    <div className='bg-white w-10/12 mx-auto rounded-2xl space-y-2 p-5'>
                        <h3>{doctorList.name}</h3>
                        <div>
                            <p>{doctorList.education}</p>
                            <p>Appointment Fee: 1200Taka+Vat</p>
                        </div>
                        <div className='border-t-2 border-dashed border-gray-200 mt-3 flex items-center justify-center'></div>
                        <button           
                    className='mt-10 w-full bg-red-700 text-white py-1 rounded-4xl cursor-pointer hover:text-white hover:bg-cyan-700'>
                    Cancel Appointment
                </button>
                    </div>
                </div>
            }
                
            
        </div>
    );
};

export default ApointList;
