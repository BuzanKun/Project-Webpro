import React from "react";
import foto from "../image/rizkiawaluddin.png";
import foto1 from "../image/rizkyramdhani.jpg";
import '../index.css'

const About = () => {
	return (
		<div className="">
			<div className="w-full h-[60vh] bg-blue-300"></div>
				<div className='absolute top-[20%] w-full md:-[50%] h-full flex flex-col text-white p-4 items-center'>
						<h1 className="font-bold text-4xl">Welcome to Our Gallery</h1>
						<p className="text-xl py-4 italic">Know Us!</p>
				</div>
			<div className="flex justify-center">
				<div className="flex flex-col w-full h-full bg-white md:mt-[-150px] m-4 py-2 px-4 rounded-lg shadow-md">
					<p className="text-xl py-4 m-8 italic text-center ">
						<h2 className="text-blue-500 text-center">
							SELAMAT DATANG DI RIZKY TRAVEL!
						</h2>
						<br />
						Rizky Travel adalah perusahaan yang berdedikasi untuk menyediakan
						pengalaman liburan yang tak terlupakan bagi pelanggan kami.<br/>Kami
						adalah mitra perjalanan pilihan yang menawarkan berbagai pilihan
						resort eksklusif di destinasi yang menarik di Indonesia. Kami
						memahami bahwa setiap perjalanan adalah pengalaman pribadi yang
						unik, dan itulah mengapa kami berusaha untuk menyediakan layanan
						yang disesuaikan dengan kebutuhan dan preferensi setiap pelanggan.
						Rizky Travel menawarkan beragam pilihan resort yang berkualitas
						tinggi dan menyediakan fasilitas dan layanan terbaik. Kami
						berkomitmen untuk memastikan bahwa setiap resort yang kami tawarkan
						memenuhi standar kualitas yang tinggi dan memberikan pengalaman
						liburan yang tak terlupakan. Terima kasih telah memilih Rizky Travel
						sebagai mitra perjalanan Anda. Bersama-sama, mari kita menjelajahi
						dunia dan menciptakan kenangan indah yang akan dikenang sepanjang
						masa.
					</p>
				</div>
			</div>
			<div className="flex justify-center md:mt-[70px] md:mb-[-70px]">
				<h1 className="text-blue-500 font-bold text-5xl"> Our Team </h1>
			</div>
			<div className="flex justify-center md:mt-[10vh] md:mb-[20vh] p-5 m-4 rounded-lg">
				<div className="w-[40vh] shadow-md md:max-w-2xl p-2 py-10 m-5 md:mt-[50px] bg-white rounded-lg">
					<div className="flex justify-center">
						<img
							className="rounded-[50%] w-[80%] h-[30vh] p-[-5vh] md:mt-[20px] md:max-w-auto md:max-h-auto"
							src={foto}
							alt=""
						/>
					</div>
					<h3 className=" font-bold text-center text-xl md:mt-[20px]">
						M Rizki Awaluddin M <br /> TI-2B/2207411049
					</h3>
				</div>
				<div className="flexjustify-center w-[40vh] shadow-md p-2 py-10 m-5 md:mt-[50px] bg-white rounded-lg md:min-h-[5xl]">
					<div className="flex justify-center p-4">
						<img
							className="rounded-[50%] w-[95%] h-[30vh] p-[-5vh] md:mt-[7px] "
							src={foto1}
							alt=""
						/>
					</div>
					<h3 className=" font-bold text-center text-xl md:mt-[-2px] ">
						M Rizky Ramdhani <br /> TI-2B/2207411044
					</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
