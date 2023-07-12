import React from 'react'

const Gallery = () => {
  return (
    <div className=''>
      <div className="w-full h-[50vh] bg-blue-300">
      </div>
      <div className='m-auto items-center'>
          <div className='absolute top-[20%] w-full md:-[50%] h-full flex flex-col text-white p-4 items-center'>
            <h1 className="font-bold text-4xl">Welcome to Our Gallery</h1>
            <p className="text-xl py-4 italic">Collections of Stunning View on the Island of Bujang</p>
          </div>
        </div>
        <div className="max-w-[1148px] m-auto w-full md:flex mt-[-100px]">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] translate-x-[50%] translate-y-[50%] text-white text-2xl font-bold ">Resort</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg" alt="" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] translate-x-[50%] translate-y-[50%] text-white text-2xl font-bold ">Resort</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg" alt="" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] translate-x-[50%] translate-y-[50%] text-white text-2xl font-bold ">Resort</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg" alt="" />
            </div>
        </div>
        <div className='max-w-[1148px] m-auto w-full px-4 py-16'>
          <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
              <img className='w-full h-full object-cover rounded-sm' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
            </div>
            <div>
              <img className='w-full h-full object-cover rounded-sm' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
            </div>
            <div>
              <img className='w-full h-full object-cover rounded-sm' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
            </div>
            <div>
              <img className='w-full h-full object-cover rounded-sm' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
            </div>
            <div>
              <img className='w-full h-full object-cover rounded-sm' src='https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg' alt='' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gallery
