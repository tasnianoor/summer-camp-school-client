import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const { data: allInstructors = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-instructors`);
            return response.data;
        },
    });
    return (
        <>
            <Helmet>
                <title>Rainbow || Instructors</title>
            </Helmet>
            <div className='w-full md:p-10 px-10 mt-20 mx-auto bg-rose-200 text-black'>
                <p className='text-3xl mb-10 font-extrabold my-5 text-center text-red-900' style={{ fontFamily: ['Lucida Bright'] }}>All Of Our Instructors </p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
                    {
                        allInstructors.map(instructor =>
                            <div key={instructor._id} className="card w-fullglass shadow-2xl group">
                                <figure><img className='group-hover:scale-110 w-full h-80' src={instructor?.image} alt={instructor.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p className='font-semibold'>Email: <span className='font-normal'>{instructor.email}</span></p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;