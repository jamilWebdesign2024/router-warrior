import React from 'react';
import Banner from '../Components/Banner/Banner';
import Doctors from '../Pages/Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {

    const doctorsData=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Doctors doctorsData={doctorsData}></Doctors>
        </div>
    );
};

export default Home;