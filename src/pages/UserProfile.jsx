import React from 'react'
import { industries, interests } from '../Helpers/data';

const UserProfile = () => {
  return (
    <div className="w-full h-screen flex-col items-center  bg-gradient-to-r from-blue-300 to-blue-600 flex justify-center ">

        <div className='mt-3 flex gap-3'>
          <select name="industry" className='select-user'>
            {industries.map((item, index) => (
              <option key={index} >{item}</option>
            ) )}
          </select>

          <select name='interests'className='select-user' >
            {interests.map((item, index) => (
              <option key={index} >{item}</option>
            ))}
          </select>
        </div>

            <div className="flex flex-col  px-20 mt-24 mb-6 w-[600px] relative items-center rounded-xl h-[300px] bg-white shadow-xl  max-[768px]:mx-2 ">
              <h2 className='absolute top-[15%] text-2xl font-bold ' >Update User Profile</h2>
              <div className='absolute top-[50%] flex  gap-5'>
                <input type="text" placeholder='Enter your new Name' className='outline-none  border py-2 rounded-md px-8 shadow-lg' />
                <button className='border px-5 rounded-md shadow-2xl bg-blue-500 text-white' >Update</button>
              </div>

            </div>
    </div>
  )
}

export default UserProfile;