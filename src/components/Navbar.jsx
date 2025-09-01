import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { redirectUserToUrl } from '../utility';

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
              src={"/assets/logo_black.svg"}
              alt="Volt AI Logo"
              className="h-8 w-auto" // Adjust height as needed
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold text-gray-700">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="hover:text-blue-700"
            >
              Features
            </a>
            <a
              href="#discover"
              onClick={(e) => scrollToSection(e, "discover")}
              className="hover:text-blue-700"
            >
              Discover
            </a>
            <a
              href="#workspace"
              onClick={(e) => scrollToSection(e, "workspace")}
              className="hover:text-blue-700"
            >
              Workspace
            </a>
            <a
              href="#hub"
              onClick={(e) => scrollToSection(e, "hub")}
              className="hover:text-blue-700"
            >
              Hub
            </a>
            <a
              href="#our-team"
              onClick={(e) => scrollToSection(e, "our-team")}
              className="hover:text-blue-700"
            >
              Our Team
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button onClick={() => redirectUserToUrl()} className="cursor-pointer bg-[#2563eb] text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">
              Try Volt AI Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (animated fade-down) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ease-out ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        {/* Header inside menu */}
        <div className="flex items-center justify-between px-4 border-b border-gray-200 h-16">
          <div className="text-[#2563eb] font-bold text-xl">
            <img
              src={"/assets/logo_black.svg"}
              alt="Volt AI Logo"
              className="h-8 w-auto"
            />
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center flex-1 gap-6 text-lg font-medium text-gray-700">
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="hover:text-blue-700"
          >
            Features
          </a>
          <a
            href="#discover"
            onClick={(e) => scrollToSection(e, "discover")}
            className="hover:text-blue-700"
          >
            Discover
          </a>
          <a
            href="#workspace"
            onClick={(e) => scrollToSection(e, "workspace")}
            className="hover:text-blue-700"
          >
            Workspace
          </a>
          <a
            href="#hub"
            onClick={(e) => scrollToSection(e, "hub")}
            className="hover:text-blue-700"
          >
            Hub
          </a>
          <a
            href="#our-team"
            onClick={(e) => scrollToSection(e, "our-team")}
            className="hover:text-blue-700"
          >
            Our Team
          </a>

          <button onClick={()=>redirectUserToUrl()} className="cursor-pointer bg-[#2563eb] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
            Try Volt AI Now
          </button>
        </div>
      </div>
    </nav>
  );
}

