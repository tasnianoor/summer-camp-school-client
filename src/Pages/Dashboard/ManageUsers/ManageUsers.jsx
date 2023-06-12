// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React from 'react';
// import { FaUserAlt } from 'react-icons/fa';
// import { RiAdminFill } from 'react-icons/ri';
// import Swal from 'sweetalert2';

// const ManageUsers = () => {
//     const { data: allUsers = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-users`);
//             return response.data;
//         },
//     });

//     const handleUpdate = (id, role) =>{
//         axios.put(`${import.meta.env.VITE_BASE_URL}/all-users/${id}?role=${role}`)
//         .then(res => {
//             if (res.data.modifiedCount > 0) {
//                 refetch()
//                 Swal.fire({
//                     icon: 'success',
//                     text: 'Role updated Successfully',
//                   })
//             }
//             console.log(res.data)
//         })
//     }
//     return (
//         <div className='w-full h-full py-10 px-5 bg-fuchsia-100 shadow-2xl'>
//         <p className='text-3xl font-bold my-5 text-center'>All Users: {allUsers.length}</p>
//         <div className="overflow-x-auto">
//             <table className="table w-full">
//                 {/* head */}
//                 <thead className='bg-fuchsia-400 text-purple-950'>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Make Instructor</th>
//                         <th>Make Admin</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {allUsers.map((user, index) =>
//                         <tr key={user._id} className='hover'>
//                             <th>{index + 1}</th>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td><button disabled={user.role === 'instructor' ? 'disabled' : ''} onClick={()=>handleUpdate(user._id, 'instructor')} className='btn btn-primary text-white'><FaUserAlt className='w-5 h-5'/></button></td>
//                             <td><button disabled={user.role === 'admin' ? 'disabled' : ''} onClick={()=>handleUpdate(user._id, 'admin')}  className='btn btn-primary text-white'><RiAdminFill className='w-5 h-5'/></button></td>
                           
//                         </tr>)}

//                 </tbody>
//             </table>
//         </div>
//     </div>
//     );
// };

// export default ManageUsers;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import {  RiAdminLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-users`);
            return response.data;
        },
    });

    const handleUpdate = (id, role) =>{
        axios.put(`${import.meta.env.VITE_BASE_URL}/all-users/${id}?role=${role}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    icon: 'success',
                    text: 'Role updated Successfully',
                  })
            }
            console.log(res.data)
        })
    }
    return (
        <div className='w-full h-full py-10 px-5 bg-fuchsia-100 shadow-2xl '>
        <p className='text-3xl font-bold my-5 text-center'>All Users: {allUsers.length}</p>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-fuchsia-400 text-purple-950'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) =>
                        <tr key={user._id} className='hover'>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button disabled={user.role === 'instructor'} onClick={()=>handleUpdate(user._id, 'instructor')} className='btn btn-primary text-white'><FaChalkboardTeacher className='w-5 h-5'/></button></td>
                            <td><button disabled={user.role === 'admin'} onClick={()=>handleUpdate(user._id, 'admin')}  className='btn btn-primary text-white'><RiAdminLine className='w-5 h-5'/></button></td>
                           
                        </tr>)}

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;