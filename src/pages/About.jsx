import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  EyeIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We build trust through transparency.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly evolve to stay ahead of change.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We deliver solutions that exceed expectations.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We grow with our clients.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: 'Security',
      description: 'We protect what matters most — your data and business.',
      color: 'bg-purple-100 text-purple-600'
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-primary-sky max-w-3xl">
              Driving digital transformation with secure cloud, AI, and modern engineering — built for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About NEXT VISION IT (Cayman) Limited
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Founded in 2025 by experienced IT engineers, <span className="font-semibold text-primary-blue">NEXT VISION IT (Cayman) Limited</span> is a Caymanian company delivering a full spectrum of advanced IT services. We are recognized for our professionalism, innovation, and commitment to excellence in technology solutions.
                </p>
                <p>
                  With expertise spanning <strong>artificial intelligence, cloud computing, cybersecurity, and digital transformation</strong>, we empower organizations to stay secure, efficient, and ahead of the curve. Our clients extend across the Cayman Islands and the Caribbean, supported by technical resources throughout North, Central, and South America.
                </p>
                <p>
                  We continue to succeed in engineering and deploying intelligent, secure, and scalable systems that drive growth and innovation for businesses of all sizes.
                </p>
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
            >
              {[
                { label: 'Years Experience', value: '10+' },
                { label: 'Clients Served', value: '120+' },
                { label: 'Avg. Uptime', value: '99.95%' },
                { label: 'SLA Tickets / mo', value: '500+' },
              ].map((stat, i) => (
                <div key={stat.label} className="rounded-xl border-2 border-gray-200 bg-white p-5 text-center hover:shadow-md transition">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-blue">{stat.value}</div>
                  <div className="mt-1 text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🎯</span> Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At NEXT VISION IT, our mission is to make advanced technology <strong>simple, secure, and effective</strong> for your business. We combine cutting-edge AI, cloud, and cyber solutions with strategic IT expertise to deliver <strong>future-ready systems</strong> that give your company a competitive advantage.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  As a dynamic and visionary IT consulting firm, we provide responsive, efficient, and personalized services to meet every client’s unique needs. We value long-term relationships and continuously innovate to deliver technology that evolves with your business.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Our goal is to build the digital future of your organization — reliable, intelligent, and secure — using the latest global standards and best practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">👁️</span> Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the Caribbean's most trusted technology partner — enabling digital transformation through innovation, intelligence, and integrity.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className={`${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to accelerate your transformation?</h2>
              <p className="text-primary-sky/90 max-w-2xl">Work with a partner focused on security, reliability, and measurable results.</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary-blue font-semibold px-6 py-3 shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Speak to an expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

