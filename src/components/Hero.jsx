import React from "react";

const Hero = () => {
	return (
		<div className="w-full h-[100vh]">
			<img
				src="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-cari-tahu-tentang-pantai-dengan-pasir-terhalus-di-asia-yang-terletak-di-maluku-tenggara/pantai.jpg"
				alt=""
				className="w-full h-full obejct-cover"
			/>
			<div className="max-w-[1140px] m-auto">
				<div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
					<h1 className="font-bold text-4xl">Find Your Special Trip</h1>
					<h2 className="text-4xl py-4 italic">With Rizky Travel</h2>
					<p>
						Plan your trip with Rizky Travel. Explore world & live life your
						way!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
