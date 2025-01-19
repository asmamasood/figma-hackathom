
import React from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BiDoughnutChart } from "react-icons/bi";

const RecentCars = [
  { id: 1, name: "Koenigsegg", type: "Sport", image: "/image7.png", price: "$99.00", oldPrice: "$120.00", features: { fuel: "90L", transmission: "Manual", people: "2 People" }, liked: false },
  { id: 2, name: "Nissan GT-R", type: "Sport", image: "/car (1).png", price: "$80.00", oldPrice: "$100.00", features: { fuel: "80L", transmission: "Manual", people: "2 People" }, liked: true },
  { id: 3, name: "Rolls-Royce", type: "Sedan", image: "/car (2).png", price: "$96.00", features: { fuel: "70L", transmission: "Manual", people: "4 People" }, liked: false },
]
const RecomendationCars=[
  { id: 1, name: "All New Rush", type: "SUV", image: "/car (4).png", price: "$72.00", oldPrice: "$80.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" }, liked: false },
  { id: 2, name: "CR-V", type: "SUV", image: "/car (5).png", price: "$80.00", features: { fuel: "80L", transmission: "Manual", people: "6 People" }, liked: true },
  { id: 3, name: "All New Terios", type: "SUV", image: "/car (6).png", price: "$74.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" }, liked: false },
];

const Reviews =() =>{
    return(
<div>

            {/* Reviews */}
            
            <div className="mt-2 w-full mb-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Reviews <button className="w-[44px] h-[24px] bg-[#3563E9] rounded text-white">13</button></h2>
          <div className="flex items-center mb-4">
            <Image
              src="/image.png"
              alt="Reviewer"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
                <div className="flex justify-between item center">
              <h3 className="font-semibold">Alex Stanton</h3> <span>21july2022</span></div>
              <div className="flex justify-between item center">
              <p className="text-gray-500">CEO at Bukalapak </p> <img src="Review star.png" alt="star" /></div>
              <p className="text-gray-600 text-small mt-2">
              We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars
               with good and comfortable facilities In addition, the service provided by the officers is also very friendly 
                and very polite.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/Profill.png"
              alt="Reviewer"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
            <div className="flex justify-between item center">
              <h3 className="font-semibold">Skylar Dias</h3><span>20july2022</span></div>
              <div className="flex justify-between item center">
              <p className="text-gray-500">CEO at Amazon</p><img src="Review star.png" alt="star" /></div>
              <p className="text-gray-600 text-normal">
              We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety
               of cars with good and comfortable facilities. In addition, the service provided by the officers is also very
                friendly and very polite.
              </p>
            </div>
          </div>
        </div>


<div className="w-[1016] h-[44] flex justify-between items-center bg-gray-200">Recent Car
         <p className="font-semi-bold w-[64px] text-right h-[44px] text-[#3563E9]">Veiw All</p></div>

         
            {/* Recent Cars Grid */}
            <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
                     {RecentCars.map((car) => (
                       <div key={car.id} className="bg-white rounded-lg shadow p-4 relative">
                         {/* Car Header */}
                         <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold">{car.name}</h3>
                           <button>
                             {car.liked ? (
                                 <div className="text-red-500 text-xl">
                               <AiFillHeart /></div>
                             ) : ( <div className="text-gray-300 text-xl">
                               <AiOutlineHeart /> </div>
                             )}
                           </button>
                         </div>
                         {/* Car Image */}
                         <Image src={car.image} alt={car.name} width={300} height={200} className="rounded-md" />
                         {/* Car Features */}
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
                         {/* Price and Button */}
                         <div className="flex justify-between items-center mt-4">
                           <div>
                             <p className="text-blue-500 text-lg">{car.price}/day</p>
                             {car.oldPrice && (
                               <p className="text-gray-400 line-through">{car.oldPrice}</p>
                             )}
                           </div>
                           <button className="bg-blue-500 text-white px-4 py-2 rounded">
                             Rent Now
                           </button>
                         </div>
                       </div>
                     ))}
                   </div>

 <div className="w-[1016] h-[44] flex justify-between items-center bg-gray-200">Recomendation Car
         <p className="font-semi-bold w-[64px] text-right h-[44px] text-[#3563E9]">Veiw All</p></div>

         
            {/* Recent Cars Grid */}
            <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
                     {RecomendationCars.map((car) => (
                       <div key={car.id} className="bg-white rounded-lg shadow p-4 relative">
                         {/* Car Header */}
                         <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold">{car.name}</h3>
                           <button>
                             {car.liked ? (
                                 <div className="text-red-500 text-xl">
                               <AiFillHeart /></div>
                             ) : ( <div className="text-gray-300 text-xl">
                               <AiOutlineHeart /> </div>
                             )}
                           </button>
                         </div>
                         {/* Car Image */}
                         <Image src={car.image} alt={car.name} width={300} height={200} className="rounded-md" />
                         {/* Car Features */}
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
                         {/* Price and Button */}
                         <div className="flex justify-between items-center mt-4">
                           <div>
                             <p className="text-blue-500 text-lg">{car.price}/day</p>
                             {car.oldPrice && (
                               <p className="text-gray-400 line-through">{car.oldPrice}</p>
                             )}
                           </div>
                           <button className="bg-blue-500 text-white px-4 py-2 rounded">
                             Rent Now
                           </button>
                         </div>
                       </div>
                     ))}
                 </div>
         
         </div>
                   
    )
}

export default Reviews;
