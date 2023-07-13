import React from 'react'
import Gambar from '../Destinasi.json'

const Gallery = () => {
  return (
    <div className=''>
      <div className="w-full h-96 bg-blue-300">
      </div>
      <div className='m-auto items-center'>
          <div className='absolute top-[20%] w-full md:-[50%] h-full flex flex-col text-white p-4 items-center'>
            <h1 className="font-bold text-4xl">Welcome to Our Gallery</h1>
            <p className="text-xl py-4 italic">A Collection of Stunning Views from Our Selected Resorts</p>
          </div>
      </div>
      <div className="max-w-6xl m-auto w-full md:flex mt-[-100px]">
        {Gambar.slice(0, 3).map((Destinasi, index) => (
          <div className="relative p-4 flex-1" key={index}>
            <div className='relative'>
              <h3 className="absolute bottom-0 left-0 p-4 text-white text-2xl font-bold">
                {Destinasi.nama}
              </h3>
              <div className='aspect-[3/2]'>
                <img
                  className="w-full h-full object-cover border-4 border-white shadow-lg rounded-sm"
                  src={Destinasi.gambar}
                  alt=""  
                />
              </div>
            </div>
          </div>
          ))}
      </div>
      <div className='max-w-6xl m-auto w-full px-4 py-16 gap-4'>
        {Gambar.map((Destinasi, index) => (
          <div className='grid sm:grid-cols-5 gap-4 my-4 p-2 bg-white rounded-md' key={index}>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
              <img className='w-full h-full object-cover rounded-sm' src={Destinasi.gallery[0]} alt='' />
            </div>
            {Destinasi.gallery.slice(1).map((image, imageIndex) => (
              <div key={imageIndex}>
                <img className='w-full h-full object-cover rounded-sm' src={image} alt='' />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
