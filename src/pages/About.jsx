import React from 'react'

const About = () => {
  return (
      <div className="">
        <div className="w-full h-96 bg-blue-300"></div>
        <div className="flex justify-center">
          <div className='absolute top-[17.5%] w-full md:-[50%] h-full flex flex-col text-white p-4 items-center'>
            <h1 className="font-bold text-4xl">About Us</h1>
          </div>
          <div className="w-full md:max-w-5xl bg-white md:mt-[-200px] m-4 py-2 px-4 rounded-lg shadow-md">
            <p className="text-xl py-4 italic text-center">
              Selamat datang di Rizky Travel!<br/>Rizky Travel adalah perusahaan yang berdedikasi untuk menyediakan pengalaman liburan yang tak terlupakan bagi pelanggan kami. Kami adalah mitra perjalanan pilihan yang menawarkan berbagai pilihan resort eksklusif di destinasi yang menarik di Indonesia. Kami memahami bahwa setiap perjalanan adalah pengalaman pribadi yang unik, dan itulah mengapa kami berusaha untuk menyediakan layanan yang disesuaikan dengan kebutuhan dan preferensi setiap pelanggan. Rizky Travel menawarkan beragam pilihan resort yang berkualitas tinggi dan menyediakan fasilitas dan layanan terbaik. Kami berkomitmen untuk memastikan bahwa setiap resort yang kami tawarkan memenuhi standar kualitas yang tinggi dan memberikan pengalaman liburan yang tak terlupakan. Terima kasih telah memilih Rizky Travel sebagai mitra perjalanan Anda. Bersama-sama, mari kita menjelajahi dunia dan menciptakan kenangan indah yang akan dikenang sepanjang masa.
            </p>
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto p-4 py-16"></div>
      </div>
    );
  };

export default About
