import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  Bars3Icon,
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
    name: "Industries",
    to: "/industries",
    icon: BuildingOffice2Icon,
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

  // Toggle icon cross/hamburger
  const Path = ({ d, ...rest }) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#fff"
      strokeLinecap="round"
      {...rest}
      d={d}
    />
  );

  return (
    <>
      <button
        className="relative inline-flex items-center justify-center rounded-full p-2 text-primary-blue bg-primary-sky/10 hover:bg-primary-sky focus:outline-none z-50"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
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
            className="fixed top-0 left-0 h-full w-[85vw] max-w-xs bg-primary-dark shadow-2xl z-50 px-2 py-4 flex flex-col"
            style={{ borderRight: '1px solid #044', boxShadow: '0 6px 24px -2px #003D66' }}
            ref={containerRef}
            aria-label="Sidebar navigation"
          >
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-primary-sky"
            >
              <XMarkIcon className="h-7 w-7" />
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
                    className={`flex items-center gap-4 text-lg px-5 py-3 rounded-xl text-white/90 hover:bg-primary-sky/20 hover:text-primary-sky font-semibold tracking-wide transition-colors duration-300 ${location.pathname === link.to ? 'bg-primary-sky/20 text-primary-sky' : ''}`}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <span className="flex-shrink-0 bg-primary-sky p-2 rounded-full bg-opacity-30 mr-1">
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
