import React from 'react'
import { BiSolidPlaneAlt } from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='max-w-[1200px] w-full py-8 m-auto mt-4 border-black border-t-2 text-center'>
        <div className='flex items-center m-auto justify-center'>
        <BiSolidPlaneAlt size={30} className='mr-2'/>
        <h1 className='text-xl font-bold text-gray'>RIZKY TRAVEL</h1>
        </div>
        © 2023 Rizky Travel.
    </div>
  )
}

export default Footer
