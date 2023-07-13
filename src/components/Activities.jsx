import React from "react";
import Gambar from '../Destinasi.json';

const Activities = () => {
    return (
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
    );
};

export default Activities;