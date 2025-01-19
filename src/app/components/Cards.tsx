import Image from "next/image";
import { MdPeople } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiDoughnutChart } from "react-icons/bi";





interface ICardProps {
  name: string;
  image: string;
  type: string;
  price: string;
  oldPrice?: string;
  features: { fuel: string; transmission: string; people: string };
  liked: boolean;
}

const Card = (props: ICardProps) => {
  const { name, image, type, price, oldPrice, features, liked } = props;

  return (
    <div className="w-full max-w-sm border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition relative">
      {/* Heart Icon */}
      <button className="absolute top-2 right-2">
        {liked ? (
          <div className="text-red-500 text-xl">
            <AiFillHeart />
          </div>
        ) : (
          <div className="text-gray-300 text-xl">
            <AiOutlineHeart />
          </div>
        )}
      </button>

      {/* Car Name */}
      <h1 className="text-lg font-bold text-gray-700">{name}</h1>
      <div className="text-sm font-semibold text-gray-500">{type}</div>

      {/* Car Image */}
      <Image
        src={image}
        alt={name}
        width={232}
        height={72}
        className="object-contain my-4"
      />

      {/* Features */}
      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Image src="/gas-station.png" alt="fuel" width={16} height={16} />
          <span>{features.fuel}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-lg">
            <BiDoughnutChart />
          </div>
          <span>{features.transmission}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-lg">
            <MdPeople />
          </div>
          <span>{features.people}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-lg font-semibold text-gray-700">{price}/day</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              {oldPrice}
            </span>
          )}
        </div>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
          Rent Now
        </button>
      </div>
    </div>
  );
};

// Main Cars Component
const Cars = () => {
  const popularCars = [

    { id: 1,
        name: "Koenigsegg",
        type: "Sport",
        image: "/car (17).png",
        price: "$99.00",
        oldPrice: "$120.00",
        features: { fuel: "90L", transmission: "Manual", people: "2 People" },
        liked: true,
      },
      {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        image: "/car (1).png",
        price: "$80.00",
        oldPrice: "$100.00",
        features: { fuel: "80L", transmission: "Manual", people: "2 People" },
        liked: false,
      },
      {
        id: 3,
        name: "Rolls-Royce",
        type: "Sedan",
        image: "/Car (2).png",
        price: "$96.00",
        features: { fuel: "70L", transmission: "Manual", people: "4 People" },
        liked: true,
      },
      {
        id: 4,
        name: "Nissan GT-R",
        type: "Sport",
        image: "/car (3).png",
        price: "$80.00",
        oldPrice: "$100.00",
        features: { fuel: "80L", transmission: "Manual", people: "2 People" },
        liked: false,
      },
  ];

  const recommendations = [
              {
                id: 1,
                name: "AllNewRush",
                type: "SUV",
                image: "/Car (4).png",
                price: "$72.00",
                oldPrice: "$80.00",
                features: { fuel: "70L", transmission: "Manual", people: "6 People" },
                liked: false,
               },
               {
                id: 2,
                name: "CR-V",
                 type: "SUV",
                image: "/Car (5).png",
                 price: "$80.00",
                features: { fuel: "80L", transmission: "Manual", people: "6 People" },
                liked: false,
                },
                {
               id: 3,
                name: "AllNewTerios",
                type: "SUV",
                image: "/car (6).png",
                price: "$74.00",
                features: { fuel: "90L", transmission: "Manual", people: "6 People" },
                liked: false,
               },
              {
            id: 4,
               name: "CR-V",
               type: "SUV",
               image: "/car (8).png",
               price: "$80.00",
               features: { fuel: "80L", transmission: "Manual", people: "6 People" },
               liked: false,
               },
              
              {
               id: 5,
               name: "MGZX Exclusice",
               type: "Hatchback",
               image: "/car (9).png",
               price: "$76.00",
               oldPrice: "$80.00",
               features: { fuel: "70L", transmission: "Manual", people: "4 People" },
               liked: false,
              },
               {
               id: 6,
               name: "NewMGZS",
               type: "SUV",
               image: "/car (10).png",
               price: "$80.00",
               features: { fuel: "80L", transmission: "Manual", people: "6 People" },
               liked: false,
              },
              {
                id: 7,
                name: "MGZXExcite",
                type: "Hatchback",
                image: "/car (11).png",
                price: "$74.00",
               features: { fuel: "90L", transmission: "Manual", people: "4 People" },
                liked: false,
              },
           {
                id: 8,
                name: "NewMGZS",
                type: "SUV",
                image: "/car (14).png",
                 price: "$80.00",
                 features: { fuel: "80L", transmission: "Manual", people: "6 People" },
                liked: false,
           },
    
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Popular Cars Section */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Popular Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularCars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>

      {/* Recommendation Cars Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Recommendation Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendations.map((car) => (
            <Card key={car.id} {...car} />
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="mt-8 flex justify-center">
        <button 
        
         className="px-6 py-3 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
          Show more cars
        </button>
      </div>
    </div>
  );
};

export default Cars;