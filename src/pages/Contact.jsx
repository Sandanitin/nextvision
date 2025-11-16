import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: 'Phone',
      content: '+1 (345) 325-3231',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: 'Email',
      content: 'info@nextvisioncayman.com',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Website',
      content: 'www.nextvisioncayman.com',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Support',
      content: '24/7/365 Helpdesk',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: 'Location',
      content: '480# Building, North Sound Road, Across From The CUC Building, Georgetown, Grand Cayman, Cayman Islands',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
     <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-sky rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-primary-sky mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-primary-sky max-w-3xl mx-auto">
              Let's build your next vision in technology together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your business with cutting-edge technology? Our team is here to help you every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden gradient-border"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                    <div className={`${info.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-sky/10 to-primary-blue/10 rounded-2xl p-8 border border-primary-sky/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support Available</h3>
                <p className="text-gray-700 mb-5">
                  Our dedicated support team is available around the clock to assist you with any technical issues or questions.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Remote troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>On-site assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Emergency response</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-mid text-white px-6 py-4 rounded-lg font-semibold hover:from-primary-mid hover:to-primary-blue transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <div className="w-16 h-1 bg-primary-sky rounded-full mb-4 md:hidden mx-auto"></div>
              <p className="text-primary-sky/90 text-lg">
                Let's build your secure and intelligent IT environment today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary-blue font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg bg-transparent border-2 border-white text-white font-semibold px-8 py-4 shadow-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;