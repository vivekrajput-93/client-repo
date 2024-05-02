import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex bg-neutral-200 justify-center items-center'>
    <div className='auth-container w-[600px] h-[300px] bg-white flex flex-col justify-center items-center gap-5'>
        <button className='w-[300px] bg-blue-500 py-2 text-white rounded-xl shadow-xl '>
        <Link to="/register" >Register</Link>
        </button>
         <p>OR</p>
         <button className='w-[300px] bg-blue-500 py-2 text-white rounded-xl shadow-xl '><Link to="/login" >Login</Link></button>
    </div>
    </div>
  )
}

export default Home