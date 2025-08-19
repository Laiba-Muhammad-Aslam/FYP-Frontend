// import React from 'react'

// export default function Navbar() {
//   return (
//     <div className='border-red-500 border-2 flex items-center justify-between py-3 px-4'>
//       <div className='text-blue-800 font-bold text-2xl'>Julius</div>
//       <div>
//         <ul className='flex items-center justify-center gap-6 font-medium'>
//         <li>Product</li>
//         <li>Use Cases</li>
//         <li>Resources</li>
//         <li>Security</li>
//         <li>Community</li>
//         <li>Pricing</li>
//         </ul>
//       </div>
//       <div>
//         <button className='bg-blue-700 font-medium text-white px-3 py-2 rounded-md'>Sign Up</button>
//       </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-blue-800 font-bold text-2xl">Julius</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-[#404040]">
        <li className="cursor-pointer hover:text-blue-700">Product</li>
        <li className="cursor-pointer hover:text-blue-700">Use Cases</li>
        <li className="cursor-pointer hover:text-blue-700">Resources</li>
        <li className="cursor-pointer hover:text-blue-700">Security</li>
        <li className="cursor-pointer hover:text-blue-700">Community</li>
        <li className="cursor-pointer hover:text-blue-700">Pricing</li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="bg-blue-700 font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Sign Up
        </button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-[#404040] absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center gap-4 py-6 font-medium md:hidden z-50">
          <li className="list-none cursor-pointer hover:text-blue-700">Product</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Use Cases</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Resources</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Security</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Community</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Pricing</li>

          <button className="bg-blue-700 font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
