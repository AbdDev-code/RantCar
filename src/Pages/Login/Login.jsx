import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleHomePage = (e)=>{
        e.preventDefault()
        
            navigate('/')
    }
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
        <form className='bg-[#003049] w-[40vw] h-[50vh] rounded-2xl text-white flex flex-col justify-normal items-start px-16 pt-5'>
            <h1 className='text-center w-full text-[48px] mb-10'>Login</h1>
            <label className='text-[26px]' htmlFor="userName">Username</label>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text"  className='w-full p-4 text-[#003049] rounded-md  outline-none mb-8'/>
            <label className='text-[26px]' htmlFor="userName">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"  className='w-full p-4 text-[#003049] rounded-md  outline-none mb-8'/>
            <NavLink className='flex justify-center items-center w-full' to='/home'>
            <button type='submit' onClick={handleHomePage} className='rounded-lg text-[18px] font-medium bg-white text-[#003049] py-[14px] px-10'>Login</button>
            </NavLink>
        </form>
        
    </div>
  )
}

export default Login