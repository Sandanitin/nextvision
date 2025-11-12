import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const NAV_LINKS = [
  {
    name: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    to: "/about",
    icon: UserGroupIcon,
  },
  {
    name: "Services",
    to: "/services",
    icon: Cog6ToothIcon,
  },
  {
    name: "Contact",
    to: "/contact",
    icon: EnvelopeIcon,
  },
];

export default function MobileSidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button - Simple hamburger icon */}
      <button
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        aria-label="Open mobile menu"
        onClick={() => setIsOpen(true)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile menu overlay and sidebar - Simple version */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50">
            {/* Close button */}
            <div className="flex justify-end p-4 border-b">
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation links */}
            <nav className="p-4">
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium ${
                        location.pathname === link.to
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={closeMenu}
                    >
                      <span className="flex-shrink-0">
                        {React.createElement(link.icon, { className: 'w-5 h-5' })}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}