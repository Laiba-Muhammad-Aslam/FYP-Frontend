import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 bg-[#ffffff]">
      {/* Logo */}
      <div className="text-[#2563eb] font-bold md:text-[24px] text-[19px] cursor-pointer">Julius</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center md:text-[14px] gap-6 font-[600] text-[#404040]">
        <li className="cursor-pointer hover:text-blue-700">Product</li>
        <li className="cursor-pointer hover:text-blue-700">Use Cases</li>
        <li className="cursor-pointer hover:text-blue-700">Resources</li>
        <li className="cursor-pointer hover:text-blue-700">Security</li>
        <li className="cursor-pointer hover:text-blue-700">Community</li>
        <li className="cursor-pointer hover:text-blue-700">Pricing</li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="cursor-pointer bg-[#2563eb] font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
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
      {/* {isOpen && (
        <div className="text-[#404040] absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center gap-4 py-6 font-medium md:hidden z-50">
          <li className="list-none cursor-pointer hover:text-blue-700">Product</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Use Cases</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Resources</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Security</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Community</li>
          <li className="list-none cursor-pointer hover:text-blue-700">Pricing</li>

          <button className="bg-[#2563eb] font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
            Sign Up
          </button>
        </div>
      )} */}

{/* Mobile Menu */}
{isOpen && (
  <div className="fixed inset-0 bg-white flex flex-col z-50">
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="text-[#2563eb] font-bold text-[20px]">Julius</div>
      <button onClick={() => setIsOpen(false)} className="focus:outline-none">
        <X size={28} />
      </button>
    </div>

    <div className="flex flex-col items-center justify-center flex-1 gap-6 font-medium text-[#404040]">
      <li className="list-none cursor-pointer hover:text-blue-700">Product</li>
      <li className="list-none cursor-pointer hover:text-blue-700">Use Cases</li>
      <li className="list-none cursor-pointer hover:text-blue-700">Resources</li>
      <li className="list-none cursor-pointer hover:text-blue-700">Security</li>
      <li className="list-none cursor-pointer hover:text-blue-700">Community</li>
      <li className="list-none cursor-pointer hover:text-blue-700">Pricing</li>

      <button className="bg-[#2563eb] font-medium text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
        Sign Up
      </button>
    </div>
  </div>
)}

    </nav>
  );
}
