
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import {  FaBars,FaUser } from 'react-icons/fa';
import logo1 from '../../../assets/images/logo1.png'
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FcNightLandscape } from 'react-icons/fc';

const Navbar = () => {
    const location = useLocation()
    const { user, signOutUser } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("business");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    console.log(theme)
    return (
        <div className="navbar fixed z-10 top-0 md:px-5 bg-opacity-50 bg-red-900 md:h-20 text-white">
            <div className='w-full flex justify-between'>
                <div className='flex'>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28 ' style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>
                            <Link className={location.pathname === '/' && 'text-red-600'} to='/'>Home</Link>
                            <Link className={location.pathname === '/instructors' && 'text-red-600'} to='/instructors'>Instructors</Link>
                            <Link className={location.pathname === '/classes' && 'text-red-600'} to='/classes'>Classes</Link>
                        </div>
                    </div>
                    {/* Comic Sans */}
                    <Link
                    to='/'
                    aria-label='Summer Camp Drawing School'
                    title='Summer Camp Drawing School'
                    className='inline -flex items-center'
                >
                <div className='flex items-center md:space-x-5 px-3 md:px-5'>
                    <img className='w-16 -ml-5 md:-mr-5 rounded-full' src={logo1} alt="logo" border="0" />
                    <p className=" text-xl hidden md:block md:text-3xl md:font-bold" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}><span className=' text-4xl animate-bounce'>R</span><span className='text-yellow-400 text-4xl animate-bounce'>A</span><span className=' text-4xl animate-bounce'>I</span><span className='text-4xl uppercase text-orange-500'>N</span><span className='text-4xl uppercase'>B</span ><span className='text-pink-500 text-4xl'>O</span><span className='text-4xl'>W</span> <span className='uppercase text-4xl text-yellow-200'>Sch</span><span className='uppercase text-4xl text-red-600'>ool</span></p>
               </div>
               </Link>
                </div>
                <div className='flex items-center space-x-2 md:hidden'>
                    {
                        theme === 'light' && <HiOutlineLightBulb />
                    }
                    {
                        theme === 'business' && <FcNightLandscape
                        className='text-black' />
                    }
                    <input type="checkbox" onChange={handleToggle} className="toggle " checked={theme === "light" ? false : true} />
                </div>
                {
                    user ? <div className='flex items-center bg-pink-400 pl-5 pr-2 h-10 rounded-3xl md:hidden lg:hidden'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={1} className="mx-3"><FaBars className={`${theme === 'light' && 'text-red-900'}`} /></label>
                            <ul tabIndex={1} className={`dropdown-content menu flex flex-col items-start p-2 shadow bg-base-100 rounded-box ${theme === 'light' && 'text-red-900'}`}>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleSignOut}>Sign Out</button></li>
                            </ul>
                        </div>
                        {
                            user?.photoURL ? <img className='w-7 h-7 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='h-5 w-5' />
                        }

                    </div> :
                        <Link className={`lg:hidden md:hidden ${location.pathname === '/login' && 'text-pink-500'} `} to='/login'>Login</Link>
                }
            </div>
            <div className='md:space-x-8 font-bold hidden md:flex'>
            <div className='flex items-center space-x-2'>
                    {
                        theme === 'light' && <HiOutlineLightBulb/>
                    }
                    {
                        theme === 'business' && <FcNightLandscape
                        className='text-black' />
                    }
                    <input type="checkbox" onChange={handleToggle} className="toggle " checked={theme === "light" ? false : true} />
                </div>
                <Link className={location.pathname === '/' && 'text-red-600 text-2xl' } to='/' style={{ fontFamily: ['Lucida Bright'] }}>Home</Link>
                <Link className={location.pathname === '/instructors' && 'text-red-600 text-2xl'} to='/instructors' style={{ fontFamily: ['Lucida Bright'] }}>Instructors</Link>
                <Link className={location.pathname === '/classes' && 'text-red-600 text-2xl'} to='/classes' style={{ fontFamily: ['Lucida Bright'] }}>Classes</Link>
                {
                    user ? <div className='flex items-center bg-pink-400 pl-5 pr-2 h-10 w-20 rounded-3xl'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="mx-3"><FaBars
                            className={`${theme === 'light' && 'text-red-900'}`} /></label>
                            <ul tabIndex={0} className={`dropdown-content menu flex flex-col items-start p-2 shadow bg-base-100 rounded-box ${theme === 'light' && 'text-red-900'}`}>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleSignOut}>Sign Out</button></li>
                            </ul>
                        </div>
                        {
                            user?.photoURL ? <img className='w-7 h-7 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='h-5 w-5' />
                        }

                    </div> :
                        <Link className={location.pathname === '/login' && 'text-pink-500 text-2xl' } to='/login' style={{ fontFamily: ['Lucida Bright'] }}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;