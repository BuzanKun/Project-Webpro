import React from 'react'

const Deals = () => {
  return (
    <div className=''>
      <div className="w-full h-[50vh] bg-blue-300">
      </div>
      <div className="max-w-[1148px] m-auto w-full md:flex mt-[-75px] shadow-lg bg-white rounded-md">
        <div className='max-w-[1140px] m-auto w-full p-4'>
          <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
              <label className='font-bold pb-1'>Destination</label>
              <select className='lg:w-[500px] md:w-full border rounded-md p-2'>
                <option>Jakarta</option>
                <option>Jogjakarta</option>
                <option>Bali</option>
              </select>
            </div>
            <div className='flex w-full'>
              <div className='flex flex-col w-full lg:max-w[250px] my-2 p-2'>
                <label className='font-bold pb-1'>Check-In</label>
                <input className='border rounded-md p-2' type='date' />
              </div>
              <div className='flex flex-col w-full lg:max-w[250px] my-2 p-2'>
                <label className='font-bold pb-1'>Check-Out</label>
                <input className='border rounded-md p-2' type='date' />
              </div>
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
              <label className='font-bold pb-1'>Search</label>
              <button className='w-full rounded-md'>Rates & Availabilities</button>
            </div>
          </form>
        </div>
      </div>
      <div className='max-w-[1148px] m-auto w-full p-4 py-8'>
        <div className='grid md:grid-cols-4 gap-4'>
          <div className='md:col-span-2 bg-white rounded-md'>
            <h1 className='font-bold p-2 text-black'>Nama Tempat</h1>
            <hr />
            <p className='p-2 text-gray-700'>
              Check-In : *Tanggal
            <br/>
              Check-Out : *Tanggal
            </p>
            <hr />
            <img className='p-2 max-w-[250px] rounded-md' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
          </div> 
          <div className='md:col-span-2 rounded-md bg-white shadow-md'>
            <form >
              <h2 className='text-gray-700 ml-2 pl-2 pt-2'>Data Pemesan</h2>
              <div className='grid md:grid-cols-2'>
                <input className='border m-2 p-2 rounded-md' type='text' placeholder='First Name' />
                <input className='border m-2 p-2 rounded-md' type='text' placeholder='Last Name' />
                <input className='border m-2 p-2 rounded-md' type='email' placeholder='Email' />
                <input className='border m-2 p-2 rounded-md' type='tel' placeholder='Phone Number' />
                <input className='border m-2 p-2 col-span-2 rounded-md' type='text' placeholder='Note*' />
                <button className='m-2 col-span-2 rounded-md'>Submit</button> 
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>  
  )
}

export default Deals
