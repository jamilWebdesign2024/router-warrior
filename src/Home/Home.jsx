import React from 'react';
import Banner from '../Components/Banner/Banner';
import Doctors from '../Pages/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import StatsCounter from '../SetCount/StatsCounter';

const Home = () => {

    const doctorsData=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Doctors doctorsData={doctorsData}></Doctors>
            <StatsCounter></StatsCounter>
            
        </div>
    );
};

export default Home;