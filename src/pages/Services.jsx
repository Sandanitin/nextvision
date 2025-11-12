import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheckIcon,
  CloudIcon,
  SparklesIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const initialCategory = categoryParam ? parseInt(categoryParam, 10) : 0;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');
  const [expandedServices, setExpandedServices] = useState({});

  // Update active category when URL parameter changes
  useEffect(() => {
    if (categoryParam !== null) {
      const categoryIndex = parseInt(categoryParam, 10);
      // There are 4 service categories (0-3)
      if (!isNaN(categoryIndex) && categoryIndex >= 0 && categoryIndex <= 3) {
        setActiveCategory(categoryIndex);
      }
    }
  }, [categoryParam]);

  const serviceCategories = [
    {
      id: 0,
      name: 'Core IT Services',
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      services: {
        'Security & Protection': [
          'IT Security Assessments',
          'Managed Antivirus & Dual-Factor Authentication Solutions',
          'Intrusion Prevention Systems (IPS) & Firewalls',
          'Backup & Disaster Recovery',
          'Password Management / Vault',
          'Security Appliances',
          'PCI‑Compliant Secure Wireless Solutions',
          'Mobile Device Management'
        ],
        'Cloud & Infrastructure': [
          'Cloud Computing & Virtual Servers',
          'Hosted Email & Virtual Private Cloud',
          'Server Support & Networking',
          'Website Hosting',
          'Dedicated Servers / VPS Servers',
          'SSL Certificates',
          'Cloud Hosting & Cloud Backup Solutions'
        ],
        'Managed Services (MPS)': [
          'Dark Web Monitoring',
          'Security Awareness Training',
          'Security & Compliance',
          'Multi‑Factor Authentication',
          'Email Security',
          'Endpoint Security',
          'Cloud Backup',
          'Helpdesk Support (24/7/365, On‑site & Off‑site)'
        ],
        'Proactive & Consulting': [
          'Remote Monitoring & Management (24/7)',
          'Proactive Server Checkups',
          'Health Reports & Safety Checks',
          'Asset Management & Tracking Services'
        ],
        'IT Sales & Support': [
          'POS Systems for Businesses',
          'Laptops, Tablets & Printers (Installation Support)',
          'Remote Troubleshooting & IT Accessories',
          'Website Development & Business Software Solutions',
          'Outsourcing IT Services',
          'Email Spam/Virus Filtering & Continuity',
          'Internet & Threat Protection'
        ]
      }
    },
    {
      id: 1,
      name: 'AI Services',
      icon: <SparklesIcon className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      services: {
        'AI Security & Protection': [
          'AI‑Powered Threat Detection',
          'Automated Incident Response',
          'Fraud Detection & Prevention',
          'Biometric Security Solutions'
        ],
        'AI Cloud & Infrastructure': [
          'AI‑Powered Cloud Management',
          'AI Data Backup & Recovery',
          'Intelligent Network Optimization'
        ],
        'AI in Business Automation': [
          'Robotic Process Automation (RPA)',
          'AI Chatbots & Virtual Assistants',
          'Intelligent Document Processing',
          'Smart Workflow Automation'
        ],
        'AI in Data Analytics': [
          'Predictive Analytics Services',
          'AI‑Powered Business Intelligence (BI)',
          'NLP for Analytics',
          'Data Mining & Pattern Recognition'
        ],
        'AI for Industry‑Specific Solutions': [
          'Healthcare AI (diagnostics, patient monitoring)',
          'Retail AI (smart inventory, checkout)',
          'Finance AI (credit scoring, fraud detection)',
          'Legal AI (document review, compliance)',
          'Construction/Real Estate AI (timeline prediction, smart valuations)'
        ],
        'AI Productivity & Collaboration': [
          'AI‑Powered Email & Spam Filtering',
          'Smart Virtual Meeting Assistants',
          'AI Knowledge Management',
          'Speech‑to‑Text / Language Translation'
        ],
        'Cutting‑Edge AI Innovations': [
          'Generative AI Solutions (content, design, marketing)',
          'AI‑Powered Cyber Forensics',
          'Edge AI Solutions (IoT, logistics, smart cities)',
          'AI‑Powered WiFi Marketing'
        ]
      }
    },
    {
      id: 2,
      name: 'Digital Transformation',
      icon: <DocumentTextIcon className="w-5 h-5" />,
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-700',
      services: {
        'Branding & Design': [
          'Branding & Brand Consulting',
          'Design & Creative Services',
          'Product Design & Innovation',
          'Graphic Design',
          'Logo Design'
        ],
        'Web Development / Applications': [
          'Website Design & Development',
          'E‑commerce Websites',
          'Online Payment Systems',
          'Content Management Systems (PowerPanel, WordPress, Joomla, Drupal)',
          'Frontend (ReactJS, Angular, Vue.js)',
          'Backend (.NET, Laravel, Python, PHP, NodeJS)',
          'Mobile Apps (iOS, Android, Flutter, React Native)',
          'Hybrid Apps (Ionic, PhoneGap)',
          'App Store Optimization & Mobile App Marketing'
        ],
        'Digital Marketing': [
          'Advertising (Google Ads, Bing Ads, Programmatic Ads, Amazon Ads)',
          'PPC Marketing',
          'Social Media Marketing (Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok)',
          'Marketing Strategy',
          'SEO (Search Engine Optimization)',
          'Email Marketing',
          'Voice Search Optimization',
          'Digital PR & Reputation Management'
        ],
        'Business Software Solutions': [
          'CRM Systems (Netclues CRM, Salesforce, SAP, HubSpot)',
          'ERP / Company Management Systems',
          'POS Systems',
          'Custom API Integrations & SDK Development',
          'QuickBooks Integration',
          'Kiosk Applications',
          'SharePoint / Intranet Development & Hosting',
          'WiFi Marketing (social login, splash pages)'
        ],
        'Industry‑Specific IT Solutions': [
          'Retail IT (POS, CRM, hosting)',
          'Real Estate IT (CRM, portals, websites)',
          'Restaurant IT (POS, reservations, payroll)',
          'Banking & Finance IT (secure hosting, CRM)',
          'Government IT (eGovernment, document management)',
          'Travel & Tourism IT (reservations, mobile, CRM)',
          'Legal IT (document management, CRM)',
          'Healthcare IT (case management, patient portals)',
          'Spa IT (POS, CRM, booking)'
        ]
      }
    },
    {
      id: 3,
      name: 'Partners & Ecosystem',
      icon: <UserGroupIcon className="w-5 h-5" />,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      services: {
        'Marketing / Advertising Partners': [
          'Google Ads, Microsoft Ads, LinkedIn Marketing Solutions, Facebook Ads, Instagram Ads, Twitter Ads, AdRoll, Amazon Ads, HubSpot, SEMrush'
        ],
        'Technology / Hosting Partners': [
          'cPanel, Google Workspace, RapidSSL, Symantec Secured One, Amazon AWS, Microsoft Cloud Partner, ICANN'
        ],
        'Payment Processing Partners': [
          'FAC, PlugnPay, Authorize.net, First Data, Cayman Gateway, Latitude 19, PayPal, Apple Pay, Google Pay, Stripe, Moneris, 2Checkout'
        ],
        'Development / Framework Partners': [
          'WordPress, Joomla, Drupal',
          'Angular, ReactJS, VueJS',
          'Laravel, CakePHP, Zend, Magento, Shopify, PrestaShop',
          'Node.js, PHP, .NET, Java, MSSQL, MySQL, MongoDB',
          'iOS, Android, Flutter, React Native, Ionic, PhoneGap',
          'Wix, Weebly, JotForm, SharePoint, Salesforce'
        ],
        'Design / Creative Tools Partners': [
          'Sketch, Photoshop, Illustrator, InDesign, CorelDraw'
        ]
      }
    }
  ];

  // Count total services per category
  const serviceCounts = useMemo(() => {
    return serviceCategories.map(category => {
      return Object.values(category.services).reduce((total, serviceList) => total + serviceList.length, 0);
    });
  }, []);

  const toggleServiceCategory = (category) => {
    setExpandedServices(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setSearchParams({ category: index.toString() });
  };

  // Show first 5 services by default, expand for more
  const getVisibleServices = (items, category) => {
    const isExpanded = expandedServices[category];
    return isExpanded ? items : items.slice(0, 5);
  };

  return (
      <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-16 md:py-20 relative overflow-hidden">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-primary-sky mx-auto mb-4 rounded-full"></div>
            <p className="text-base md:text-lg text-primary-sky max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-gray-100 sticky top-16 z-40 shadow-md" aria-label="Service categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map((category, index) => {
              const isActive = activeCategory === index;
              return (
                <motion.button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleCategoryChange(index)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue shadow ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-md transform -translate-y-0.5`
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span className="text-sm">{category.name}</span>
                  <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-xs">
                    {serviceCounts[index]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input
                id="service-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, e.g. Cloud, Security, AI..."
                className="w-full rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:ring-primary-blue py-2.5 pl-10 pr-4 text-gray-800 placeholder:text-gray-400 transition-all shadow-sm focus:shadow"
              />
            </div>
            {query && (
              <p className="mt-2 text-xs text-gray-600">
                Showing results for <span className="font-medium text-gray-900">"{query}"</span>
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {Object.entries(serviceCategories[activeCategory].services).map(([category, items], index) => {
                const filtered = query
                  ? items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
                  : items;
                
                if (filtered.length === 0) return null;
                
                const visibleServices = getVisibleServices(filtered, category);
                const isExpanded = expandedServices[category];
                const hasMore = filtered.length > 5;
                
                // Get the current category for color styling
                const currentCategory = serviceCategories[activeCategory];
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`${currentCategory.bgColor} ${currentCategory.borderColor} border rounded-xl p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentCategory.color}`}></div>
                    <div className={`flex items-center justify-between mb-4 pb-3 border-b ${currentCategory.borderColor}`}>
                      <h3 className={`text-lg font-bold ${currentCategory.textColor}`}>{category}</h3>
                      <span className={`inline-flex items-center rounded-full ${currentCategory.bgColor.replace('50', '100')} ${currentCategory.textColor} text-xs font-medium px-2 py-0.5`}>
                        {filtered.length} item{filtered.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {visibleServices.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <div className="flex-shrink-0 mt-0.5 mr-2">
                            <div className={`w-5 h-5 rounded-full ${currentCategory.bgColor.replace('50', '200')} flex items-center justify-center`}>
                              <svg className={`w-3 h-3 ${currentCategory.textColor.replace('700', '500')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {hasMore && (
                      <button
                        onClick={() => toggleServiceCategory(category)}
                        className={`mt-4 flex items-center justify-center w-full py-2 ${currentCategory.textColor} text-sm font-medium rounded hover:${currentCategory.bgColor.replace('50', '100')} transition-colors duration-200`}
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUpIcon className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Show {filtered.length - 5} More</span>
                            <ChevronDownIcon className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-blue to-primary-mid text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '120+', label: 'Clients Served' },
              { value: '99.95%', label: 'Avg. Uptime' },
              { value: '500+', label: 'SLA Tickets / mo' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-sky/90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Our Services Stand Out</h2>
            <div className="w-12 h-1 bg-primary-blue mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base">
              We deliver exceptional value through our comprehensive approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <ShieldCheckIcon className="w-8 h-8" />, 
                title: 'End-to-End Security', 
                description: 'Comprehensive protection from threat detection to incident response',
                color: 'from-blue-500 to-blue-700'
              },
              { 
                icon: <LightBulbIcon className="w-8 h-8" />, 
                title: 'Innovative Solutions', 
                description: 'Cutting-edge technology implementations tailored to your business',
                color: 'from-purple-500 to-purple-700'
              },
              { 
                icon: <ChartBarIcon className="w-8 h-8" />, 
                title: 'Measurable Results', 
                description: 'Data-driven approaches with clear ROI and KPI tracking',
                color: 'from-teal-500 to-teal-700'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                <div className={`bg-gradient-to-r ${highlight.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-blue/5 to-primary-mid/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Service Process</h2>
            <div className="w-12 h-1 bg-primary-blue mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base">
              A streamlined approach to delivering exceptional IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <MagnifyingGlassIcon className="w-6 h-6" />, title: 'Discover', description: 'We assess your needs and challenges', color: 'bg-blue-500' },
              { icon: <ArrowsRightLeftIcon className="w-6 h-6" />, title: 'Design', description: 'Custom solutions tailored to your goals', color: 'bg-purple-500' },
              { icon: <CpuChipIcon className="w-6 h-6" />, title: 'Deploy', description: 'Implementation with minimal disruption', color: 'bg-teal-500' },
              { icon: <ServerIcon className="w-6 h-6" />, title: 'Support', description: 'Ongoing maintenance and optimization', color: 'bg-orange-500' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-mid"></div>
                <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's build your next vision</h2>
              <div className="w-12 h-1 bg-primary-sky rounded-full mb-3 md:hidden mx-auto"></div>
              <p className="text-primary-sky/90 text-base max-w-xl">
                Talk to our engineers about a tailored solution across security, cloud, AI, and digital transformation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary-blue font-medium px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Get a free consultation
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-transparent border-2 border-white text-white font-medium px-6 py-3 shadow-md hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Why Choose Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;