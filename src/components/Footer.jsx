import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src="/images/logo.png" 
                alt="Next Vision IT Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Cayman Businesses Through Innovation, Security & Intelligence
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-sky transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-sky transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary-sky transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-sky transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-primary-sky transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-sky transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:text-primary-sky transition-colors">
                  +1 (XXX) XXX-XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@nextvisionit.ky" className="hover:text-primary-sky transition-colors">
                  info@nextvisionit.ky
                </a>
              </li>
              <li>Cayman Islands</li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Contact</h4>
            <form className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md bg-primary-dark/40 border border-gray-700 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-sky"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md bg-primary-dark/40 border border-gray-700 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-sky"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                className="w-full rounded-md bg-primary-dark/40 border border-gray-700 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-sky"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-primary-sky text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-blue transition"
              >
                Send
              </button>
            </form>
            <div className="mt-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-white/10 border border-white/10 text-gray-200 px-4 py-2 rounded-md hover:bg-white/5 transition"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Next Vision IT (Cayman) Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

