import React from "react";
import Image from "next/image";
import { MdPeople } from "react-icons/md";
import { BiDoughnutChart } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function categoryPage() {
  const cars = [
    { id: 1, name: "Koenigsegg", type: "Sport", image: "/image7.png", price: "$99.00", oldPrice: "$120.00", features: { fuel: "90L", transmission: "Manual", people: "2 People" },liked:true },
    { id: 2, name: "Nissan GT-R", type: "Sport", image: "/car (1).png", price: "$80.00", oldPrice: "$100.00", features: { fuel: "80L", transmission: "Manual", people: "2 People" },liked:false },
    { id: 3, name: "Rolls-Royce", type: "Sedan", image: "/car (2).png", price: "$96.00", features: { fuel: "70L", transmission: "Manual", people: "4 People" } ,liked:false},
    { id: 4, name: "All New Rush", type: "SUV", image: "/car (4).png", price: "$72.00", oldPrice: "$80.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" },liked:false },
    { id: 5, name: "CR-V", type: "SUV", image: "/car (5).png", price: "$80.00", features: { fuel: "80L", transmission: "Manual", people: "6 People" }, liked:true},
    { id: 6, name: "All New Terios", type: "SUV", image: "/car (6).png", price: "$74.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" },liked:false },
    { id: 7, name: "MGZX Exclusive", type: "Hatchback", image: "/Car (9).png", price: "$76.00", oldPrice: "$80.00", features: { fuel: "70L", transmission: "Electric", people: "4 People" },liked:false},
    { id: 8, name: "New MGZS", type: "SUV", image: "/Car (11).png", price: "$80.00", features: { fuel: "80L", transmission: "Manual", people: "6 People" },liked:false },
    { id: 9, name: "MGZX Excite", type: "Hatchback", image: "/Car (9).png", price: "$74.00", features: { fuel: "70L", transmission: "Electric", people: "4 People",liked:true } },
  ];

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex gap-5">
        {/* Sidebar */}
        <aside className=" hidden lg: w-[200px] bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Type</h2>
          <ul>
            {["Sport(10)", "SUV(12)", "MPV(16)", "Sedan(20)", "Coupe(14)", "Hatchback(14)"].map((type) => (
              <li key={type} className="mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>
          <div>
            <h2 className="text-lg font-bold mt-6 mb-4">Capacity</h2>
            <ul>
              {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
                <li key={capacity} className="mb-2">
                  <label className="wflex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{capacity}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-lg font-bold mt-6 mb-4">Price</h2>
          <input type="range" className="w-full" min="0" max="100" />
          <p className="text-right mt-2">Max. $100.00</p>
        </aside>
 
        {/* Main Content */}
        <div className="flex-1">
          {/* Pick-Up and Drop-Off Section */}
          <div className="bg-white p-5 rounded-lg shadow mb-8">
            <div className="flex flex-col  lg:flex-row justify-between items-start gap-10">
              {/* Pick-Up Section */}
              <div className="w-[295px] h-[88px] lg:w-[486px] h-[132px]flex-1">
              <span className="w- [18px] h-[18px] bg-blue-500 rounded-full"></span>
                <h3 className=" leading-[24px] tracking-[-2%] Plus Jakarta Sans text-xl font-semibold mb-4">Pick-Up</h3>
                <div className="flex items-center gap-4">
                  <div className=" flex flex-col">
                    <label className="w-[76px] h-[16px] text-xs lg:text-sm font-semibold">Locations</label>
                    <select className=" lg:w-40 bg-gray-100 border rounded-md p-1">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Date</label>
                    <select className="lg:w-40 bg-gray-100 border rounded-md p-1">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Time</label>
                    <select className=" lg:w-40 bg-gray-100 border rounded-md p-1">
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
              <div className=" lg:w-[486px] h-[132px]flex-1">
              <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                <h3 className="text-xl font-semibold mb-4">Drop-Off</h3>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Locations</label>
                    <select className=" lg:w-40 bg-gray-100 border rounded-md p-1">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Date</label>
                    <select className=" lg:w-40 bg-gray-100 border rounded-md p-1">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Time</label>
                    <select className=" lg:w-40 bg-gray-100 border rounded-md p-1">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div> 



          <div className="bg-gray-100 p-5">
      <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow p-4">
            {/* Car Header with Name and Heart Icon */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <button>
                {car.liked ? (<div className="text-red-500 text-xl">
                  <AiFillHeart /></div>
                 
                ) : ( <div className="text-gray-300 text-xl" >
                  <AiOutlineHeart /> </div>
                )}
              </button>
            </div>
            {/* Car Details */}
            <p className="text-gray-500 mb-3">{car.type}</p>
            <Image src={car.image} alt={car.name} width={300} height={200} className="rounded-md" />
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Image src="/gas-station.png" alt="Fuel" width={16} height={16} />
                <span>{car.features.fuel}</span>
              </div>
              <div className="flex items-center gap-1">
                <BiDoughnutChart />
                <span>{car.features.transmission}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdPeople />
                <span>{car.features.people}</span>
              </div>
            </div>
            {/* Pricing and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-blue-500 text-lg">{car.price}/day</p>
                {car.oldPrice && <p className="text-gray-400 line-through">{car.oldPrice}</p>}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></div></div></div> 
  );
}

