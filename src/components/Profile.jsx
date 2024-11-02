import React from 'react'
import fakhar from '../assets/fakhar.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";
const Profile = () => {
  return (
    <div className='w-1/5 flex items-center gap-2'>
  <img 
    src={fakhar}
    alt='xyz'
    className='w-10 h-10 rounded-full'
  />

  <p className='my-auto text-lg'>Fakhar Navdeep</p>
  <RiArrowDropDownLine className='text-3xl' />
</div>
  )
}

export default Profile
