import React, { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheckIcon,
  CloudIcon,
  SparklesIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [query, setQuery] = useState('');

  const serviceCategories = [
    {
      id: 0,
      name: 'Core IT Services',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
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
      icon: <SparklesIcon className="w-8 h-8" />,
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
      icon: <DocumentTextIcon className="w-8 h-8" />,
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
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-sky">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-gray-100 sticky top-16 z-40 shadow-sm" aria-label="Service categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-orientation="horizontal" className="flex flex-wrap gap-4 justify-center">
            {serviceCategories.map((category, index) => {
              const isActive = activeCategory === index;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategory(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCategory(index);
                    }
                    if (e.key === 'ArrowRight') {
                      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
                    }
                    if (e.key === 'ArrowLeft') {
                      setActiveCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
                    }
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue ${
                    isActive
                      ? 'bg-primary-blue text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10">
            <label htmlFor="service-search" className="sr-only">Search services</label>
            <div className="relative">
              <input
                id="service-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, e.g. Cloud, Security, AI..."
                className="w-full rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:ring-primary-blue py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-400 transition"
              />
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z" />
              </svg>
            </div>
            {query && (
              <p className="mt-3 text-sm text-gray-600">
                Showing results for <span className="font-semibold text-gray-900">“{query}”</span>
              </p>
            )}
          </div>

          {/** Filtered data memoization for performance */}
          {/* eslint-disable react-hooks/exhaustive-deps */}
          {/* We only depend on query and activeCategory, the dataset is static */}
          {/* prettier-ignore */}
          {null}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {Object.entries(serviceCategories[activeCategory].services).map(([category, items], index) => {
                const filtered = query
                  ? items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
                  : items;
                if (filtered.length === 0) return null;
                return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-sky hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-primary-blue">
                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-primary-blue text-sm font-semibold px-3 py-1">
                      {filtered.length} item{filtered.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {filtered.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-blue mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-mid text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Let’s build your next vision</h2>
              <p className="text-primary-sky/90 max-w-2xl">
                Talk to our engineers about a tailored solution across security, cloud, AI, and digital transformation.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary-blue font-semibold px-6 py-3 shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Get a free consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

