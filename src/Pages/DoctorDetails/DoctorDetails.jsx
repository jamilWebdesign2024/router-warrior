import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { LiaRegisteredSolid } from "react-icons/lia";

const DoctorDetails = () => {
    const {id} = useParams();
    const docId=parseInt(id);
    const data = useLoaderData()
    const singleDoctor =data.find(doc=>doc.id === docId);
    
    
    const {image, name, education, speciality, experience, registration_number, view_details}=singleDoctor;
    
    

    return (
        <div>
            <div>
                <h1>Doctor's Profile Details</h1>
                <p>A doctor's profile typically includes their specialty, educational background, residency, insurance networks accepted, awards, languages spoken, and links to publications. It can also showcase their clinical experience, affiliations with hospitals, and relevant skills</p>
            </div>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p><small>{education}</small></p>
                    <p><small>Working at <br /><span>Chittagong Medical College & Hospital</span></small></p>
                    <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
                    <p><LiaRegisteredSolid /> <span>Reg No: {registration_number}</span></p>
                    <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
                    <p>Availability ${}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;



// import React from 'react';

// const Weekdays = () => {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const currentDay = new Date().getDay(); // 0 = Sunday, 6 = Saturday

//   return (
//     <div className="flex gap-4">
//       {days.map((day, index) => (
//         <div
//           key={day}
//           className={`px-4 py-1 rounded-full text-sm font-medium 
//             ${index === currentDay 
//               ? 'text-orange-500 bg-orange-100' // Current day style
//               : 'text-gray-400 bg-gray-100'    // Other days style (optional)
//             }`}
//         >
//           {day}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Weekdays;
