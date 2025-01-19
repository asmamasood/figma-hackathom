import React from 'react';
import Image from 'next/image';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";

import Link from 'next/link';


    const Navbar = () => { 
      return (
        <>
          {/* Desktop Navbar */}
          <header className="hidden lg:flex bg-white py-4 px-4 md:px-8 shadow-md items-center justify-between">
            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4 lg:space-x-20">
              {/* Logo */}
              <div className="text-xl md:text-2xl font-bold text-blue-600">MORENT</div>
              
              {/* Search Bar */}
              <div className="relative w-[492px] h-[44px]">
                <input
                  type="text"
                  placeholder="Search something here"
                  className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm 
                  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ borderRadius: '70px' }}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FaSearch />
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <VscSettings />
                </div>
              </div>
            </div>
    
            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/favorites">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                 <div className="text-lg text-gray-600 cursor-pointer">
                  <FaHeart  /></div>
                </div>
              </Link>
              <Link href="/notifications">
                <div className="relative w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <div className="text-lg text-gray-600 cursor-pointer"><FaBell  /></div>
                  <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                </div>
              </Link>
              <Link href="/settings">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="text-lg text-gray-600 cursor-pointer"> <FaCog  /></div>
                </div>
              </Link>
              <Link href="/profile">
                <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
                  <Image src="./Image.png" alt="Profile" className="w-full h-full" />
                </div>
              </Link>
            </div>
          </header>
    
          {/* Mobile Navbar */}
          <header className="lg:hidden bg-white py-4 px-4 shadow-md flex flex-col items-start space-y-4">
            {/* Logo and Profile */}
            <div className="flex items-center justify-between w-full">
              <div className="text-xl font-bold text-blue-600">MORENT</div>
              <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
                <Image src="./Image.png" alt="Profile" className="w-full h-full" />
              </div>
            </div>
    
            {/* Search Bar */}
            <div className="relative w-full h-[44px]">
              <input
                type="text"
                placeholder="Search something here"
                className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm 
                border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderRadius: '70px' }}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch />
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <VscSettings />
              </div>
            </div>
          </header>
        </>
      );
    };
    
 

export default Navbar;