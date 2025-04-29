import React from 'react';

import notFound from '../../assets/pages-not found.avif'

const ErrorPage = () => {

    return (
        <div className='min-h-screen bg-white flex items-center justify-center'>
            <img src={notFound} alt="" />
            <h1>Pages not found</h1>
        </div>
    );
};

export default ErrorPage;