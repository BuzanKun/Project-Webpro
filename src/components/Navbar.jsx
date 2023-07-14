import React, { useState } from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaInstagram,
    FaBars
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
const [nav,setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
	return (
		<div className="w-full min-h-[50px] flex justify-between items-center text-white absolute z-10 bg-gray-700/80">
			<ul className="hidden sm:flex px-4">
				<li className="px-5 hover:bg-blue-300 rounded">
					<Link to="/">Home</Link>
				</li>
				<li className="px-5 hover:bg-blue-300 rounded">
					<Link to="/Gallery">Gallery</Link>
				</li>
				<li className="px-5 hover:bg-blue-300 rounded">
					<Link to="/Booking">Booking</Link>
				</li>
				<li className="px-5 hover:bg-blue-300 rounded">
					<Link to="/About">About Us</Link>
				</li>
			</ul>
            <div className="flex justify-between">
                <FaFacebookF className='mx-4' />
                <FaTwitter className='mx-4' /> 
                <FaGooglePlusG className='mx-4'/>
                <FaInstagram className='mx-4'/>
            </div>
                {/* Bar Icon */}
            <div onClick={handleNav} className="sm:hidden z-10">
                <FaBars size={20} className="mr-4 cursor-pointer"/>
            </div>
                {/* Mobile Menu */}
            <div onClick={handleNav} className={ nav ? "overflow-y-hidden md-hidden ease-in duration-300 absolute left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" : "absolute top-0 h-screen left-[-100%] ease-in duration-500 "}>
            <ul className="h-full w-full text-center pt-12">
				<li className="text-2xl py-8">
					<Link to="/">Home</Link>
				</li>
				<li className="text-2xl py-8">
					<Link to="/Gallery">Gallery</Link>
				</li>
				<li className="text-2xl py-8">
					<Link to="/Booking">Booking</Link>
				</li>
				<li className="text-2xl py-8">
					<Link to="/About">About Us</Link>
				</li>
			</ul>
            </div>
		</div>
	);
};
export default Navbar;
