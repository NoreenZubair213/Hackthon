import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-[30px] h-[555px]">
      {/* Content Wrapper */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[80%] px-4">
        {/* Address Section */}
        <div>
          <p className="text-gray-700 leading-relaxed">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-gray-800 font-bold mb-2">Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-gray-800 font-bold mb-2">Help</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/payment-options" className="text-gray-600 hover:text-gray-800">Payment Options</Link>
            </li>
            <li>
              <Link href="/returns" className="text-gray-600 hover:text-gray-800">Returns</Link>
            </li>
            <li>
              <Link href="/privacy-policies" className="text-gray-600 hover:text-gray-800">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-gray-800 font-bold mb-2">Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 p-2 border border-gray-300 rounded-l"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t mt-8 pt-4 text-center text-gray-600 h-[20%]">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
