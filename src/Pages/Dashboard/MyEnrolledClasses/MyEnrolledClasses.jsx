
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet';

const MyEnrolledClasses = () => {
    const { user } = useAuth()
    const { data: enrolledClasses = [], refetch } = useQuery({
        queryKey: ['selected-classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/enrolled-classes/${user?.email}`)
            return response.data
        }
    })
    return (
        <>
            <Helmet>
                <title>Rainbow || My Enrolled Classes</title>
            </Helmet>
            <div className='w-full h-full py-10 px-5 bg-red-200 text-black shadow-2xl'>
                <p className='text-3xl font-bold my-5 text-center'>My Enrolled Classes : {enrolledClasses.length}</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        
                        <thead className='bg-red-400 text-white'>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledClasses.map((classes, index) =>
                                <tr key={classes._id} className='hover '>
                                    <th>{index + 1}</th>
                                    <td><img className='w-20 h-20' src={classes.singleClass.image} alt="" /></td>
                                    <td>{classes.singleClass.className}</td>
                                    <td>{classes.singleClass.instructorName}</td>
                                    <td>{classes.singleClass.instructorEmail}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyEnrolledClasses;

