import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    {
      icon: '🛒',
      title: 'Retail',
      description: 'POS, CRM & hosting systems for modern retail operations'
    },
    {
      icon: '🏢',
      title: 'Real Estate',
      description: 'CRM & portal development for property management'
    },
    {
      icon: '🍽️',
      title: 'Restaurants',
      description: 'POS, payroll, reservations, and customer management'
    },
    {
      icon: '💰',
      title: 'Finance',
      description: 'Secure hosting, AI-based fraud detection, compliance solutions'
    },
    {
      icon: '🏛️',
      title: 'Government',
      description: 'eGovernment platforms & document management systems'
    },
    {
      icon: '✈️',
      title: 'Travel & Tourism',
      description: 'Booking systems, mobile apps, and digital experiences'
    },
    {
      icon: '⚖️',
      title: 'Legal',
      description: 'AI-driven document management and case tracking'
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Case management, patient portals, and secure systems'
    },
    {
      icon: '💆',
      title: 'Spa & Wellness',
      description: 'POS & CRM systems tailored for wellness businesses'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-primary-sky">
              Industry-tailored IT and AI solutions for every business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Solutions for Your Industry
            </h2>
            <p className="text-lg text-gray-600">
              We understand that each industry has unique challenges. That's why we deliver tailored IT and AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-primary-blue to-primary-mid rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Don't see your industry listed?</h3>
            <p className="text-xl text-primary-sky mb-8">
              We work with businesses across all sectors. Contact us to discuss your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-sky hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

