import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const ErrorPage = () => {
    return (
            <div className='flex relative justify-center'>
                <img className='h-screen w-full' src="https://images.squarespace-cdn.com/content/v1/5745ef062eeb81676268630d/1548131756702-VL3XAVHP8BSZY68VOMSG/404-Dribbble.gif?format=1500w" />
                <Link className='absolute bottom-10' to='/'><button className='btn'><HiArrowLeft className='w-5 h-5 mx-2'/>Back To Home</button></Link>
            </div>
    );
};

export default ErrorPage;