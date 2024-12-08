// components/Navbar.js
import React from "react";
import Link from "next/link";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-[#fff] py-5 px-10">
      {/* Navbar Links */}
      <div className="ml-[450px]">
        <ul className="flex list-none gap-20">
          <li className="text-black text-base font-normal hover:text-[#000000ac] transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black text-base font-normal hover:text-[#000000ac] transition-colors">
            <Link href="shop">Shop</Link>
          </li>
          <li className="text-black text-base font-normal hover:text-[#000000ac] transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="text-black text-base font-normal hover:text-[#000000ac] transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-5">
        <FaRegUser className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110" />
        <FiSearch className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110" />
        <FaRegHeart className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110" />
        <AiOutlineShoppingCart className="text-black text-2xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110" />
      </div>
    </div>
  );
};

export default Navbar;
