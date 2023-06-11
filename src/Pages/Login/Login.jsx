// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// import { useAuth } from '../../Hooks/useAuth';
// import logo1 from '../../assets/images/login3.gif'
// import Loader from '../Shared/Loader/Loader';

// const Login = () => {
//     const [show, setShow] = useState(true)
//     const [error, setError] = useState('')
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { setUser, loading, setLoading, signInUser, googleSignInUser, updateUserProfile} = useAuth()
//     const onSubmit = data => {
        
//         setError('')

//         signInUser(data.email, data.password)
//         .then(result =>{
//             const user = result.user;
//             setLoading(false)
//         })
//         .catch(err =>{
//             const errorMessage = err.message
//             if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
//                 setError('Please Input a valid email address')
//                 setLoading(false)
//             } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
//                 setError('wrong password. Please try again')
//                 setLoading(false)
//             }

//             console.log(errorMessage)
//         })
//         // console.log(data.photo[0].name);
//     }
//     const handleGoogleSignIn = () =>{
//         googleSignInUser()
//         .then(result =>{
//             setUser(result.user)
//             setLoading(false)
//         })
//         .catch(err =>{
//             console.log(err.message)
//             setLoading(false)
//         })
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>MindFulness || Login</title>
//             </Helmet>
//             {/* <div className=' mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg flex flex-col'> */}
//             <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0" style={{ backgroundImage: `url("https://www.istockphoto.com/photo/little-blonde-girl-painting-on-big-white-paper-while-laying-on-the-floor-indoors-gm1020966732-274242377?phrase=kids%2Bdrawing")` }}>
//             <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm bg-yellow-300 rounded-2xl my-20"  >
//                 {
//                     loading && <Loader/>
//                 }
                
//                 <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
//                 <p className='text-3xl font-bold text-center mb-5'>Login</p>
//                     <label className='text-xl font-semibold mb-3'>Email</label>
//                     <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
//                     {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                    <label className='text-xl font-semibold mb-3'>Password</label>
//                     <div className='relative w-full'>
//                         <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none' type={show ? 'text' : 'password'} {...register('password', { required: true })}/>
//                         <div onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
//                             {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
//                         </div>
//                     </div>
//                     {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                     <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
//                     <p className='text-red-800 py-3'>{error}</p>
//                     <button type='submit' className='btn  btn-primary font-bold'>Login</button>
//                 </form>
//                 <div className='divider'>Or</div>
//                 <div onClick={handleGoogleSignIn} className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full'><FcGoogle className='w-7 h-7' /> <p className='font-bold md:text-xl text-center'>Sign in with Google</p></div>

               
//             </div>
//             <div className="flex justify-items-center items-center h-full w-full">
//                 <img src={logo1}/>
//       </div>
//             </div>
//         </>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// import { useAuth } from '../../Hooks/useAuth';
// import Loader from '../Shared/Loader/Loader';
// import logo1 from '../../assets/images/login3.gif'
// import axios from 'axios';

// const Login = () => {
//     const [show, setShow] = useState(true)
//     const [error, setError] = useState('')
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { setUser, loading, setLoading, signInUser, googleSignInUser, updateUserProfile} = useAuth()
//     const onSubmit = data => {
        
//         setError('')

//         signInUser(data.email, data.password)
//         .then(result =>{
//             const user = result.user;
//             setLoading(false)
//         })
//         .catch(err =>{
//             const errorMessage = err.message
//             if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
//                 setError('Please Input a valid email address')
//                 setLoading(false)
//             } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
//                 setError('wrong password. Please try again')
//                 setLoading(false)
//             }

//             console.log(errorMessage)
//         })
//         // console.log(data.photo[0].name);
//     }
//     const handleGoogleSignIn = () =>{
//         googleSignInUser()
//         .then(result =>{
//             const user = result.user
//             const savedUser = {name: user.displayName ,email: user.email}
//             axios.post(`${import.meta.env.VITE_BASE_URL}/all-users`, savedUser)
//             setUser(user)
//             setLoading(false)
//         })
//         .catch(err =>{
//             if(err.message === 'Firebase: Error (auth/popup-closed-by-user).'){
//                 setLoading(false)
//             }
//             console.log(err.message)
//             setLoading(false)
//         })
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>Rainbow || Login</title>
//             </Helmet>
//             <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0" style={{ backgroundImage: `url("https://www.istockphoto.com/photo/little-blonde-girl-painting-on-big-white-paper-while-laying-on-the-floor-indoors-gm1020966732-274242377?phrase=kids%2Bdrawing")` }}>
//              <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm bg-yellow-300 rounded-2xl my-20"  >
//                 {
//                     loading && <Loader/>
//                 }
//                 <p className='text-4xl font-bold text-center mb-5'>Login</p>
//                 <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
//                     <label className='text-xl font-semibold mb-3'>Email</label>
//                     <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
//                     {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                     <label className='text-xl font-semibold mb-3'>Password</label>
//                     <div className='relative w-full'>
//                         <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none' type={show ? 'text' : 'password'} {...register('password', { required: true })}/>
//                         <div onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
//                             {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
//                         </div>
//                     </div>
//                     {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                     <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
//                     <p className='text-red-800 py-3'>{error}</p>
//                     <button type='submit' className='btn  btn-primary font-bold'>Login</button>
//                 </form>
//                 <div className='divider'>Or</div>
//                 <div onClick={handleGoogleSignIn} className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full'><FcGoogle className='w-7 h-7' /> <p className='font-bold md:text-xl text-center'>Sign in with Google</p>
//                 </div>
//                 </div>
//                 <div className="flex justify-items-center items-center h-full w-full"> 
//                    <img src={logo1}/>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// import { useAuth } from '../../Hooks/useAuth';
// import Loader from '../Shared/Loader/Loader';
// import logo1 from '../../assets/images/login3.gif'
// import axios from 'axios';

// const Login = () => {
//     const [show, setShow] = useState(true)
//     const [error, setError] = useState('')
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { setUser, loading, setLoading, signInUser, googleSignInUser, updateUserProfile} = useAuth()
//     const onSubmit = data => {
        
//         setError('')

//         signInUser(data.email, data.password)
//         .then(result =>{
//             const user = result.user;
//             setLoading(false)
//         })
//         .catch(err =>{
//             const errorMessage = err.message
//             if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
//                 setError('Please Input a valid email address')
//                 setLoading(false)
//             } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
//                 setError('wrong password. Please try again')
//                 setLoading(false)
//             }

//             console.log(errorMessage)
//         })
//         // console.log(data.photo[0].name);
//     }
//     const handleGoogleSignIn = () =>{
//         googleSignInUser()
//         .then(result =>{
//             const user = result.user
//             const savedUser = {name: user.displayName ,email: user.email, role: 'student'}
//             axios.post(`${import.meta.env.VITE_BASE_URL}/all-users`, savedUser)
//             setUser(user)
//             setLoading(false)
//         })
//         .catch(err =>{
//             if(err.message === 'Firebase: Error (auth/popup-closed-by-user).'){
//                 setLoading(false)
//             }
//             console.log(err.message)
//             setLoading(false)
//         })
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>Rainbow || Login</title>
//             </Helmet>
//             <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 " style={{ backgroundImage: `url("https://www.istockphoto.com/photo/little-blonde-girl-painting-on-big-white-paper-while-laying-on-the-floor-indoors-gm1020966732-274242377?phrase=kids%2Bdrawing")` }}>
//              <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm bg-rose-300 rounded-2xl my-20"  >
//                 {
//                     loading && <Loader/>
//                 }
//                 <p className='text-4xl font-bold text-center mb-5'>Login</p>
//                 <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
//                     <label className='text-xl font-semibold mb-3'>Email</label>
//                     <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
//                     {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                     <label className='text-xl font-semibold mb-3'>Password</label>
//                     <div className='relative w-full'>
//                         <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none' type={show ? 'text' : 'password'} {...register('password', { required: true })}/>
//                         <div onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
//                             {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
//                         </div>
//                     </div>
//                     {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
//                     <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
//                     <p className='text-red-800 py-3'>{error}</p>
//                     <button type='submit' className='btn  btn-error font-bold'>Login</button>
//                 </form>
//                 <div className='divider'>Or</div>
//                 <div onClick={handleGoogleSignIn} className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-red-800 rounded-full'><FcGoogle className='w-7 h-7' /> <p className='font-bold md:text-xl text-center text-red-900'>Sign in with Google</p></div>
//                 </div>
//                 <div className="flex justify-items-center items-center h-full w-full"> 
//                    <img src={logo1}/>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useAuth } from '../../Hooks/useAuth';
import Loader from '../Shared/Loader/Loader';
import logo1 from '../../assets/images/login3.gif'
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { setUser, loading, setLoading, signInUser, googleSignInUser} = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || '/'

    const onSubmit = data => {
        
        setError('')

        signInUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            Swal.fire({
                icon: 'success',
                text: 'Login Successfully',
            })
            navigate(from, {replace : true});
            setLoading(false)
            reset()
        })
        .catch(err =>{
            const errorMessage = err.message
            if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
                setError('Please Input a valid email address')
                setLoading(false)
            } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
                setError('wrong password. Please try again')
                setLoading(false)
            }

            console.log(errorMessage)
        })
        // console.log(data.photo[0].name);
    }
    const handleGoogleSignIn = () =>{
        googleSignInUser()
        .then(result =>{
            const user = result.user
            const savedUser = {name: user.displayName ,email: user.email, image: user.photoURL, role: 'student'}
            axios.post(`${import.meta.env.VITE_BASE_URL}/all-users`, savedUser)
            setUser(user)
            setLoading(false)
            Swal.fire({
                icon: 'success',
                text: 'Login Successfully',
              })
            navigate(from, {replace : true});
        })
        .catch(err =>{
            if(err.message === 'Firebase: Error (auth/popup-closed-by-user).'){
                setLoading(false)
            }
            console.log(err.message)
            setLoading(false)
        })
    }

    return (
        <>
            <Helmet>
                <title>Rainbow || Login</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 " style={{ backgroundImage: `url("https://www.istockphoto.com/photo/little-blonde-girl-painting-on-big-white-paper-while-laying-on-the-floor-indoors-gm1020966732-274242377?phrase=kids%2Bdrawing")` }}>
              <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm bg-rose-300 rounded-2xl my-20"  >
                {
                    loading && <Loader/>
                }
                <p className='text-4xl font-bold text-center mb-5'>Login</p>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-xl font-semibold mb-3'>Email</label>
                    <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
                    {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                    <label className='text-xl font-semibold mb-3'>Password</label>
                    <div className='relative w-full'>
                        <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none' type={show ? 'text' : 'password'} {...register('password', { required: true })}/>
                        <div onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
                            {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
                        </div>
                    </div>
                    {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                    <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
                    <p className='text-red-800 py-3'>{error}</p>
                    <button type='submit' className='btn  btn-error font-bold'>
                         Login</button>
                </form>
                <div className='divider'>Or</div>
                <div onClick={handleGoogleSignIn} className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-red-900 rounded-full'><FcGoogle className='w-7 h-7' /> <p className='font-bold md:text-xl text-center'>Sign in with Google</p></div>
            </div>
            <div className="flex justify-items-center items-center h-full w-full"> 
                  <img src={logo1}/>
                </div>

            </div>
        </>
    );
};

export default Login;