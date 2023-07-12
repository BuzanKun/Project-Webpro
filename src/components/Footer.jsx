import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='max-w-[1200px] w-full py-8 m-auto mt-4 border-black border-t-2'>
        <div className='flex items-center m-auto justify-center'>
        <BsChatSquareDots size={30} className='mr-2'/>
        <h1 className='text-xl font-bold text-gray'>RIZKY TRAVEL</h1>
        </div>
    </div>
  )
}

export default Footer
