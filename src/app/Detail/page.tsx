import Image from "next/image";
import React from "react";
import Reviews from "./reviews";


export default function DetailPage() {
  return (
    
<div className=" grid-col-1 lg:grid-col-3 max-w-7xl mx-auto mt-8 gap-6">

      {/* Sidebar */}
    
<div className="flex">
    
      <aside className="hidden lg:w-[360px] h-[520px] bg-white p-4 rounded-lg shadow-md sm:hidden lg:block">
        <div>
          <h3 className="w-[176px]  font-semibold mb-4">Type</h3>
          <ul>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" defaultChecked className="mr-2 " /> Sport (10)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" defaultChecked className=" mr-2" /> SUV (12)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className=" mr-2" /> MPV (16)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className="mr-2" /> Sedan (20)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className=" mr-2" /> Coupe (14)
            </li>
            <li className="mb-2w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className="mr-2 " /> Hatchback (14)
            </li>
          </ul>
        </div>
        <div className="mt-6 w-[176px] h-[180px] ">
          <h3 className="font-semibold mb-4">Capacity</h3>
          <ul>
            <li className="mb-2">
              <input type="checkbox" defaultChecked className="mr-2" /> 2 Person (10)
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" /> 4 Person (14)
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" /> 6 Person (12)
            </li>
            <li className="mb-2">
              <input type="checkbox" defaultChecked className="mr-2" /> 8 or More (16)
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold leading-[15.2px] tracking-[-2%] ">Price</h3>
          <input type="range" min="0" max="100" defaultValue="80" className="w-full" />
          <p className=" text-gray-600">Max. $100.00</p>
        </div>
      </aside>

   <div className="item center lg:flex">
      {/* Main Content */}
      <main className="flex-1 justify-between items-center w-[327px] lg:w-[492px] h-[232] lg:h-[500px]">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/blueBack.jpg')" }}>
         
          <h1 className="w-[372px] h-[75px]   tracking[-3%] font-Plus Jakarta Sans text-lg font-bold">
            Sports car with the best <br /> design and acceleration</h1>
          <p className=" w-[284px] h-[48px] text-sm">Safety and comfort while driving a futuristic and elegant sports car</p>
          <Image
            src="/image 8 (1).png"
            alt="Car"
            className="w-[190px] lg:w-[380px] h-[60px] lg:h-[120px]   left-[436px] hue-rotate-180 rounded-lg"
          /> </div>
          <div className="flex gap-2 mt-4 mb-4" >
            <div className="w-[96px] lg:w-[190px] h-[64px] lg:h-[124px] rounded pt-2 lg:pt-10 pl-2 lg:pl-6"style={{ backgroundImage: "url('/blueBack.jpg')"}}>
            <Image 
              src="/car (18).png"
              alt="car"
              className="w-[116px] h-[36px] top-[36px] left-[124px] hue-rotate-180  "
            />
            </div>
            <Image
              src="/View 2.png"
              alt="Interior"
              className="w-[96px] lg:w-[190px] h-[64px] lg:h-[124px] rounded-lg"
            />
             <Image
              src="/View 3.png"
              alt="Interior"
              className="w-[96px] lg:w-[190px] h-[64px] lg:h-[124px] rounded-lg "
            />
          
        </div>

        
      </main>
      

      {/* Right Section */}
      <aside className=" w-fll lg:w-1/4 h-[500px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Nissan GT – R</h2> <Image src="/Review star.png" alt="stars" className="w-[108px] h-[20px]"/>
        <p className="text-gray-600 mb-4">
          NISMO has become the embodiment of Nissans outstanding performance, inspired by the most
          unforgiving proving ground, the race track.
        </p>
        <ul className="mb-4 mt-9 ">
          <li className="flex justify-between ">
            <span>Type Car:</span> <span>Sport</span>
            <span>Capacity:</span> <span>2 Person</span>
          </li>
          <li className="flex justify-between">
            <span>Steering:</span> <span>Manual</span>
            <span>Gasoline:</span> <span>70L</span>
          </li>
          
        </ul>
        <div className="flex items-center gap-4 mt-20">
          <h3 className="text-xl font-bold text-black">$80.00/day</h3>
          <p className="line-through text-gray-400">$100.00</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
          Rent Now
        </button>
        
         </aside> </div> </div>
         <div className="flex-col">  <Reviews/> </div>
         
      
      
      </div>




 
  )}

 
