import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreDoctor } from '../../Test/Test';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { toast } from 'react-toastify';

// Local storage থেকে remove করার function
const removeFromStoreDB = (id) => {
  const storedDoctorData = getStoreDoctor();
  const updatedDoctorData = storedDoctorData.filter(docId => docId !== id);
  localStorage.setItem("doctorList", JSON.stringify(updatedDoctorData));
};

const AppointmentList = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedDoctorData = getStoreDoctor().map(id => parseInt(id));
    const listOfDoctor = data.filter(doctor => storedDoctorData.includes(doctor.id));
    setDoctorList(listOfDoctor);

    const chartReadyData = listOfDoctor.map(doc => ({
      id: doc.id,
      name: doc.name,
      value: Math.floor(Math.random() * 1800) + 400,
    }));
    setChartData(chartReadyData);
  }, [data]);

  // Custom Bar Shape
  const TriangleBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <path
        d={`M${x},${y + height}
            Q${x + width / 2},${y - height}
            ${x + width},${y + height}
            Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

  // Handle Cancel Button
  const handleCancel = (id) => {
    // 1. Remove from localStorage
    removeFromStoreDB(id);

    // 2. Remove from doctorList
    setDoctorList(prev => prev.filter(doc => doc.id !== id));

    // 3. Remove from chartData
    setChartData(prev => prev.filter(item => item.id !== id));
     setTimeout(() => {
                toast.success(`Appointment removed ${name} successfully!`);
                }, 100); 
  };
  

  return (
    <div className="w-10/12 mx-auto mt-10 bg-gray-100 min-h-screen py-10">

      {/* Chart Section */}
      {chartData.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow mb-10">
          <h2 className="text-center text-xl font-semibold mb-5">Doctor Popularity Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Appointments Section */}
      {
        doctorList.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No appointments yet.</p>
        ) : (
          <div>
            <div className='text-center space-y-3 mb-10'>
              <h1 className='text-3xl font-bold'>My Today Appointments</h1>
              <p className='text-gray-500'>Here's a more detailed look at how to find or book doctor appointments</p>
            </div>

            {doctorList.map(doctor => (
              <div key={doctor.id} className='bg-white w-10/12 mx-auto rounded-2xl space-y-3 p-6 mt-8 shadow'>
                <h3 className='font-bold text-xl'>{doctor.name}</h3>
                <div className='flex justify-between text-gray-500 text-sm'>
                  <p>{doctor.education}</p>
                  <p>Appointment Fee: 1200 Taka + VAT</p>
                </div>
                <hr className='border-dashed border-gray-300 mt-3' />
                <button
                  onClick={() => handleCancel(doctor.id)}
                  className='mt-5 w-full border border-red-700 text-red-700 py-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300'>
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default AppointmentList;






