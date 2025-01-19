import Image from 'next/image';
import React from 'react';


const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div
          className="relative text-white rounded-xl shadow-lg overflow-hidden h-[450px] p-8 flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: "url('/lightBluebg.jpg')" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              The Best Platform for Car Rental
            </h2>
            <p className="text-base text-gray-200">
              Ease of doing car rental safely and reliably. Of course at a low price.
            </p>
          </div>
          <div className="relative z-10 mt-8">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
              Rental Car
            </button>
          </div>
          <div>
          <Image 
  src="/image7.png" 
  alt="car" 
  width={775} 
  height={775} 
/>

          </div>
          

        {/* Right Card */}
        <div
          className="relative text-white rounded-xl shadow-lg overflow-hidden h-[450px] p-8 flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: "url('/blueBack.jpg')" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-base text-gray-200">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
          </div>
          <div className="relative z-10 mt-8">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
              Rental Car
            </button>
          </div>  <div> <img src="./image8.png" alt="car" width={775} height={775}/>
          </div>
        </div>
      </div>  




<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-6 gap-6">
  {/* Pick-Up Section */}
  <div className="flex-1">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Pick-Up</p>
    </div>
    <div className="flex gap-4">
      {/* Locations  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Locations</label>
        <select className="w-40 bg-white text-[#90A3BF]">
          <option>Select your city</option>
        </select>
      </div>
      {/* Date  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>Select your date</option>
        </select>
      </div>
      {/* Time  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>Select your time</option>
        </select>
      </div>
    </div>
  </div>

  {/* Swap Button */}
  <div className="flex-shrink-0">
    <div className="flex items-center justify-center bg-[#3563E9] text-white rounded-lg shadow-md h-12 w-12 hover:bg-blue-600 transition">
      <Image src="Swap.png" alt="Swap Icon" className="h-6 w-6" />
    </div>
  </div>

  {/* Drop-Off Section */}
  <div className="flex-1">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Drop-Off</p>
    </div>
    <div className="flex gap-4">
      {/* Locations Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Locations</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>Select your city</option>
        </select>
      </div>
      {/* Date Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
        <option>Select your date</option>
        </select>
      </div>
      {/* Time Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>Select your time</option>
        </select>
      </div>
    </div>
  </div>
</div>


 

  <div className="flex justify-between items-center w-full max-w-[1440px] bg-[#F6F7F9] py-4 px-4 sm:px-6 md:px-8">
  {/* Popular Car */}
  <h2 className="text-gray-700 font-bold Plus Jakarta Sans text-lg sm:text-xl leading-[20.16px]">
    Popular Car
  </h2>

  {/* View */}
  <div className="text-[#3563E9] Plus Jakarta Sans font-medium text-[16px] sm:text-[18px] leading-[20.16px] hover:underline cursor-pointer">
    View
  </div>
</div>


        {/* Grid Layout */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
         
         
         
         </div>
</div>
      
     </section>
    
  );
};

export default HeroSection;
