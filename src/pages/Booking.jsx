import React, { useState } from 'react'

const Booking = () => {
  const [Destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  return (
    <div className=''>
      <div className="w-full h-96 bg-blue-300">
        <div className='h-full flex flex-col text-white p-4 items-center justify-center'>
          <h1 className="font-bold text-4xl">Plan Your Travel Righ Now!</h1>
          <p className="text-xl py-4 italic">We will book your plan immediately</p>
        </div>
      </div>
      <div className="max-w-6xl w-full md:flex mt-[-75px] m-auto align-middle p-2">
        <div className='max-w-6xl m-auto w-full p-4 bg-white rounded-md shadow-lg'>
          <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
              <label className='font-bold pb-1'>Destination</label>
              <select className='lg:w-[500px] md:w-full border rounded-md p-2' onChange={(e) => setDestination(e.target.value)}     >
                <option hidden>Pilihan Destinasi</option>
                <option>Pulau Ayer Resort</option>
                <option>Bali Dynasty Resort</option>
                <option>Meridian Adventure Marina Club & Resort Waisai</option>
              </select>
            </div>
            <div className='lg:flex w-full  '>
              <div className='flex flex-col w-full my-2 p-2 lg:w-1/2'>
                <label className='font-bold pb-1'>Check-In</label>
                <input className='border rounded-md p-2' type='date' onChange={(e) => setCheckIn(e.target.value)}/>
              </div>
              <div className='flex flex-col w-full my-2 p-2 lg:w-1/2'>
                <label className='font-bold pb-1'>Check-Out</label>
                <input className='border rounded-md p-2' type='date' onChange={(e) => setCheckOut(e.target.value)}/>
              </div>
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
              <label className='font-bold pb-1'>Search</label>
              <button className='w-full rounded-md'>Rates & Availabilities</button>
            </div>
          </form>
        </div>
      </div>
      <div className='max-w-6xl m-auto w-full px-4 py-8 md:grid md:grid-cols-2 gap-4'>
          <div className='md:col-span-1 bg-white rounded-md shadow-md mb-4'>
            <h1 className='font-bold px-4 py-2 text-xl text-black'>{Destination ? Destination : 'Chosen Destination'}</h1>
            <hr />
            <p className='p-2 text-gray-700'>
              Check-In: <span className='text-black font-semibold'>{checkIn ? checkIn : '-'}</span>
            <br/>
              Check-Out: <span className='text-black font-semibold'>{checkOut ? checkOut : '-'}</span>
            <br/>
            </p>
            <hr />
            <img className='p-2 rounded-md' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
          </div> 
          <div className='md:col-span-1 rounded-md bg-white shadow-md mb-4'>
            <form>
              <h2 className='text-gray-700 ml-2 pl-2 pt-2'>Customer Data</h2>
              <div className='lg:grid lg:grid-cols-2'>
                <input className='border m-2 p-2 rounded-md' type='text' placeholder='First Name' />
                <input className='border m-2 p-2 rounded-md' type='text' placeholder='Last Name' />
                <input className='border m-2 p-2 rounded-md' type='email' placeholder='Email' />
                <input className='border m-2 p-2 rounded-md' type='tel' placeholder='Phone Number' />
                <input className='border m-2 p-2 lg:col-span-2 rounded-md' type='text' placeholder='Note*' />
                <button className='m-2 col-span-2 rounded-md'>Submit</button> 
              </div>
            </form>
          </div>
      </div>
    </div>  
  )
}

export default Booking
