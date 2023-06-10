import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const PopularClasses = () => {
    const { user } = useAuth()
    const [classData, setClassData] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/popular-classes`)
            .then(res => setClassData(res.data))
    }, [])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
            .then(res => {
                setCurrentUser(res.data)
            })
    }, [])

    const handleSelect = (singleClass) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                text: 'Without login you can not select class',
                footer: '<a href="/login">Please login</a>'
            })
            return;
        }
        if (currentUser.role === 'admin') {
            Swal.fire({
                icon: 'error',
                text: 'As an admin you can not select any class',
            })
            return;
        }
        if (currentUser.role === 'instructor') {
            Swal.fire({
                icon: 'error',
                text: 'As an instructor you can not select any class',
            })
            return;
        }
        const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id }
        axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Class selected successfully',
                    })
                }
                // console.log(res.data)
            })
    }
    // console.log(classData)

    return (
        <div className='px-6 md:px-10 mb-10 mx-auto mt-10'>
            <p className='text-4xl font-bold mb-10 text-center'>Our Popular Classes</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5'>
                {classData.slice(0, 6).map((classes) =>
                    <Fade>
                        <div key={classes._id} className={`card w-full group glass ${classes.seats === 0 && 'bg-red-600'}`}>
                            <figure><img className='w-full h-80 group-hover:scale-110' src={classes.image} /></figure>
                            <div className="card-body">
                                <p className='font-semibold'>Class name: <span className='font-normal'>{classes.className}</span></p>
                                <p className='font-semibold'>Instructor Name: <span className='font-normal'>{classes.instructorName}</span></p>
                                <p className='font-semibold'>Available Seats: <span className='font-normal'>{classes.seats}</span></p>
                                <p className='font-semibold'>Enrolled Students: <span className='font-normal'>{classes?.enrolledStudents}</span></p>
                                <p className='font-semibold'>Price: <span className='font-normal'>${classes.price}</span></p>
                                <button onClick={() => handleSelect(classes)} className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default PopularClasses;