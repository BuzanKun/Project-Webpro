import React, { useState, useEffect } from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Fungsi untuk memperbarui waktu saat ini
    const updateTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours %= 12;
        hours = hours || 12;
        const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
          minutes < 10 ? "0" + minutes : minutes
        } ${ampm}`;
        setCurrentTime(formattedTime);
    };

    // Memperbarui waktu saat ini setiap detik
    const interval = setInterval(updateTime, 1000);

    // Membersihkan interval ketika komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BiSolidPlaneAlt
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">RIZKY TRAVEL</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">{currentTime}</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">+62 812-3996-8469</p>
        </div>
        <button className="rounded">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
