// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // icons for hamburger & close

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 bg-[#ffffff]">
//       {/* Logo */}
//       <div className="text-[#2563eb] font-bold md:text-[24px] text-[19px] cursor-pointer">Julius</div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex items-center md:text-[14px] gap-6 font-[600] text-[#404040]">
//         <li className="cursor-pointer hover:text-blue-700">Product</li>
//         <li className="cursor-pointer hover:text-blue-700">Use Cases</li>
//         <li className="cursor-pointer hover:text-blue-700">Resources</li>
//         <li className="cursor-pointer hover:text-blue-700">Security</li>
//         <li className="cursor-pointer hover:text-blue-700">Community</li>
//         <li className="cursor-pointer hover:text-blue-700">Pricing</li>
//       </ul>

//       {/* Desktop Button */}
//       <div className="hidden md:block">
//         <button className="cursor-pointer bg-[#2563eb] font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
//           Sign Up
//         </button>
//       </div>

//       {/* Hamburger Button (Mobile) */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {/* {isOpen && (
//         <div className="text-[#404040] absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center gap-4 py-6 font-medium md:hidden z-50">
//           <li className="list-none cursor-pointer hover:text-blue-700">Product</li>
//           <li className="list-none cursor-pointer hover:text-blue-700">Use Cases</li>
//           <li className="list-none cursor-pointer hover:text-blue-700">Resources</li>
//           <li className="list-none cursor-pointer hover:text-blue-700">Security</li>
//           <li className="list-none cursor-pointer hover:text-blue-700">Community</li>
//           <li className="list-none cursor-pointer hover:text-blue-700">Pricing</li>

//           <button className="bg-[#2563eb] font-medium text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
//             Sign Up
//           </button>
//         </div>
//       )} */}

// {/* Mobile Menu */}
// {isOpen && (
//   <div className="fixed inset-0 bg-white flex flex-col z-50">
//     <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//       <div className="text-[#2563eb] font-bold text-[20px]">Julius</div>
//       <button onClick={() => setIsOpen(false)} className="focus:outline-none">
//         <X size={28} />
//       </button>
//     </div>

//     <div className="flex flex-col items-center justify-center flex-1 gap-6 font-medium text-[#404040]">
//       <li className="list-none cursor-pointer hover:text-blue-700">Product</li>
//       <li className="list-none cursor-pointer hover:text-blue-700">Use Cases</li>
//       <li className="list-none cursor-pointer hover:text-blue-700">Resources</li>
//       <li className="list-none cursor-pointer hover:text-blue-700">Security</li>
//       <li className="list-none cursor-pointer hover:text-blue-700">Community</li>
//       <li className="list-none cursor-pointer hover:text-blue-700">Pricing</li>

//       <button className="bg-[#2563eb] font-medium text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
//         Sign Up
//       </button>
//     </div>
//   </div>
// )}

//     </nav>
//   );
// }


import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === "#" || !sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 64; // Navbar height offset
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false); // Close mobile menu if open
  };
  

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-[#2563eb] font-bold text-xl cursor-pointer">
            <img
              src={'src/assets/logo_black.svg'}
              alt="Julius Logo"
              className="h-8 w-auto" // Adjust height as needed
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold text-gray-700">
            
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-blue-700">
              Features
            </a>
            <a href="#" className="hover:text-blue-700">
              Use Cases
            </a>
            <a href="#" className="hover:text-blue-700">
              Resources
            </a>
            <a href="#" className="hover:text-blue-700">
              Security
            </a>
            <a href="#" className="hover:text-blue-700">
              Community
            </a>
            <a href="#" className="hover:text-blue-700">
              Pricing
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="bg-[#2563eb] text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (full screen) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col z-40">
          {/* Header inside menu */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="text-[#2563eb] font-bold text-xl">Julius</div>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center flex-1 gap-6 text-lg font-medium text-gray-700">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Product
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Use Cases
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Resources
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Security
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Community
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-700"
            >
              Pricing
            </a>

            <button className="bg-[#2563eb] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

