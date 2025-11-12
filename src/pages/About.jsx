import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  EyeIcon,
  HeartIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon,
  SparklesIcon
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
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We grow with our clients.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: 'Vision',
      description: 'We see beyond today to tomorrow\'s possibilities.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Security',
      description: 'We protect what matters most — your data and business.',
      color: 'bg-indigo-100 text-indigo-600'
    },
  ];

  const expertiseAreas = [
    { icon: <ShieldCheckIcon className="w-6 h-6" />, title: 'Cybersecurity', description: 'Advanced threat protection and compliance solutions' },
    { icon: <CloudIcon className="w-6 h-6" />, title: 'Cloud Computing', description: 'Scalable infrastructure and migration services' },
    { icon: <SparklesIcon className="w-6 h-6" />, title: 'Artificial Intelligence', description: 'AI-powered business transformation' },
    { icon: <CpuChipIcon className="w-6 h-6" />, title: 'Digital Transformation', description: 'End-to-end modernization strategies' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-20 md:py-28 relative overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <div className="w-24 h-1 bg-primary-sky mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-primary-sky max-w-3xl mx-auto">
              Driving digital transformation with secure cloud, AI, and modern engineering — built for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About NEXT VISION IT (Cayman) Limited
              </h2>
              <div className="w-16 h-1 bg-primary-blue mx-auto mb-8 rounded-full"></div>
              <div className="prose prose-lg text-gray-600 space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-lg">
                  Founded in 2025 by experienced IT engineers, <span className="font-semibold text-primary-blue">NEXT VISION IT (Cayman) Limited</span> is a Caymanian company delivering a full spectrum of advanced IT services. We are recognized for our professionalism, innovation, and commitment to excellence in technology solutions.
                </p>
                <p className="text-lg">
                  With expertise spanning <strong>artificial intelligence, cloud computing, cybersecurity, and digital transformation</strong>, we empower organizations to stay secure, efficient, and ahead of the curve. Our clients extend across the Cayman Islands and the Caribbean, supported by technical resources throughout North, Central, and South America.
                </p>
                <p className="text-lg">
                  We continue to succeed in engineering and deploying intelligent, secure, and scalable systems that drive growth and innovation for businesses of all sizes.
                </p>
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
                <div className="w-16 h-1 bg-primary-blue mx-auto rounded-full"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Specialized knowledge across key technology domains
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                    <div className="bg-primary-blue/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary-blue">
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </motion.div>
                ))}
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
                <motion.div 
                  key={stat.label} 
                  className="rounded-xl border-2 border-gray-200 bg-white p-5 text-center hover:shadow-lg transition-all duration-300 hover:border-primary-blue hover:-translate-y-1 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-blue mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-blue p-3 rounded-lg mr-4">
                    <RocketLaunchIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <div className="w-12 h-1 bg-primary-sky rounded-full mb-6"></div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    At NEXT VISION IT, our mission is to make advanced technology <strong>simple, secure, and effective</strong> for your business. We combine cutting-edge AI, cloud, and cyber solutions with strategic IT expertise to deliver <strong>future-ready systems</strong> that give your company a competitive advantage.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a dynamic and visionary IT consulting firm, we provide responsive, efficient, and personalized services to meet every client's unique needs. We value long-term relationships and continuously innovate to deliver technology that evolves with your business.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our goal is to build the digital future of your organization — reliable, intelligent, and secure — using the latest global standards and best practices.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <div className="w-12 h-1 bg-purple-500 rounded-full mb-6"></div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To be the Caribbean's most trusted technology partner — enabling digital transformation through innovation, intelligence, and integrity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We envision a future where businesses thrive through seamless integration of technology, empowered by secure and intelligent systems that adapt to their evolving needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our commitment is to lead this transformation with cutting-edge solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <div className="w-16 h-1 bg-primary-blue mx-auto rounded-full"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  The principles that guide our work and define our culture
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                    <div className={`${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary-blue to-primary-mid rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
              </div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
                <div className="w-16 h-1 bg-primary-sky mx-auto mb-6 rounded-full"></div>
                <p className="text-primary-sky/90 max-w-2xl mx-auto mb-8 text-lg">
                  Our team of certified professionals brings decades of experience in cutting-edge technology solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {['Certified Engineers', 'Cybersecurity Experts', 'Cloud Architects', 'AI Specialists'].map((role, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {role}
                    </span>
                  ))}
                </div>
                {/* <button className="bg-white text-primary-blue font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  Learn About Our Team
                </button> */}
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to accelerate your transformation?</h2>
              <div className="w-16 h-1 bg-primary-sky rounded-full mb-4 md:hidden mx-auto"></div>
              <p className="text-primary-sky/90 text-lg">
                Work with a partner focused on security, reliability, and measurable results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary-blue font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Speak to an expert
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-transparent border-2 border-white text-white font-semibold px-8 py-4 shadow-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;