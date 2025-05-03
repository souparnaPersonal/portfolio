"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Updated import
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Updated to use usePathname()

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    if (pathname !== "/") {
      // If we are not on the home page, navigate to the given href
      router.push(`${href}`); // Navigate to /#about or /#contact
    } else {
      // If we are on the homepage, just scroll to the section
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: pathname === "/" ? "#about" : "/#about", label: "About" },
    { href: pathname === "/" ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Souparna
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-gray-700 hover:text-blue-600 transition  ${
                  pathname === link.href ? "font-semibold text-blue-600" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`block text-gray-700 hover:text-blue-600 transition  ${
                pathname === link.href ? "font-semibold text-blue-600" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
