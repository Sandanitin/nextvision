import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
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
  const containerRef = useRef(null);
  const location = useLocation();

  // Dimensions/clip util
  const height = 1000; // Roomy value

  const sidebarVariants = {
    open: {
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.15,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Nav list variants
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.21 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 25,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  // Toggle icon cross/hamburger with fixed blue color
  const Path = ({ d, ...rest }) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#1897ED" // Fixed blue color
      strokeLinecap="round"
      {...rest}
      d={d}
    />
  );

  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button - Fixed blue color */}
      <button
        className="relative inline-flex items-center justify-center rounded-full p-2 text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none z-50"
        aria-label="Open mobile menu"
        onClick={() => setIsOpen(true)}
        key="mobile-menu-button"
      >
        <svg width="28" height="28" viewBox="0 0 23 23">
          <Path
            d="M 2 2.5 L 20 2.5"
            animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.1 }}
          />
          <Path
            d="M 2 16.346 L 20 16.346"
            animate={isOpen ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 20 16.346" }}
          />
        </svg>
      </button>
      
      {/* Mobile menu overlay and sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeMenu}
            aria-label="Close menu overlay"
            key="menu-overlay"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-[85vw] max-w-xs bg-blue-900 shadow-2xl z-50 px-2 py-4 flex flex-col"
            style={{ borderRight: '1px solid #1897ED', boxShadow: '0 6px 24px -2px #1897ED', marginTop: '4rem' }}
            ref={containerRef}
            aria-label="Sidebar navigation"
            key="mobile-sidebar"
          >
            <button
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-blue-200 hover:text-blue-100"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.ul className="mt-16 space-y-2" variants={navVariants}>
              {NAV_LINKS.map(link => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.035 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center gap-4 text-lg px-5 py-3 rounded-xl text-blue-100 hover:bg-blue-800 hover:text-white font-semibold tracking-wide transition-colors duration-300 ${location.pathname === link.to ? 'bg-blue-800 text-white' : ''}`}
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <span className="flex-shrink-0 bg-blue-800 p-2 rounded-full bg-opacity-30 mr-1">
                      {React.createElement(link.icon, { className: 'w-6 h-6' })}
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}