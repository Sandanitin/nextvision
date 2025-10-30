// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  SparklesIcon,
  ChartBarIcon,
  ClockIcon,
  UsersIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

/**
 * Modern, animated Home page
 * - Replace/adjust images in /public/images as needed
 * - Tailwind classes assume your theme contains colors:
 *   primary-blue, primary-sky, primary-mid, etc. Adjust or replace with hex classes.
 */

  const services = [
    {
    icon: ShieldCheckIcon,
      title: 'Cybersecurity & Protection',
    description:
      'Intelligent security, backup, and compliance with 24/7 monitoring and advanced threat detection.',
    colorClass: 'text-primary-blue',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: CloudIcon,
      title: 'Cloud & Infrastructure',
    description:
      'Scalable and resilient cloud infrastructure built for performance and cost-efficiency.',
    colorClass: 'text-primary-sky',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: SparklesIcon,
      title: 'AI & Automation',
    description:
      'AI-driven automation and predictive analytics to reduce cost and increase velocity.',
    colorClass: 'text-yellow-400',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: ChartBarIcon,
      title: 'Digital Transformation',
    description:
      'End-to-end digital strategy, UX, and engineering to scale modern customer experiences.',
    colorClass: 'text-green-500',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  const stats = [
  { icon: UsersIcon, value: '200+', label: 'Satisfied Clients' },
  { icon: ClockIcon, value: '24/7', label: 'Support Available' },
  { icon: ChartBarSquareIcon, value: '50+', label: 'Projects Completed' },
  { icon: GlobeAltIcon, value: '9', label: 'Industries Served' },
  ];

  const features = [
    {
      title: 'Enterprise-Grade Security',
    description:
      'Advanced threat detection, multi-factor authentication, and backups to protect business-critical data.',
    },
    {
      title: 'Scalable Cloud Solutions',
    description:
      'Flexible infrastructure patterns and IaC practices so your technology grows with your business.',
    },
    {
      title: 'AI-Powered Automation',
    description:
      'Automate routine tasks and make better decisions with predictive models and workflow automation.',
    },
    {
      title: 'Expert Team Support',
    description:
      'Certified engineers and architects offering hands-on guidance from planning to production.',
  },
];

const clientTestimonials = [
  {
    name: 'Michael Thompson',
    role: 'CIO, Cayman Logistics',
    quote:
      'Next Vision IT modernized our cloud footprint with AI-driven automation and robust observability. Deployments are faster, costs are predictable, and uptime has improved across our logistics network. Security controls are now standardized and audit-ready.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Alicia Grant',
    role: 'COO, Coral Bank',
    quote:
      'Their security-first approach helped us strengthen zero-trust access and harden our core systems. With 24/7 monitoring and clear SLAs, we’ve reduced operational risk while accelerating new digital products. Our board has greater confidence in our resilience posture.',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Samuel Rodriguez',
    role: 'Head of Technology, Sunset Capital',
    quote:
      'Next Vision IT delivered a scalable, secure data platform in the cloud with automated guardrails. Reporting cycles are faster, and sensitive workloads meet regulatory requirements. It’s a tangible step forward in our digital transformation roadmap.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop'
  },
];

const floatAnimation = {
  initial: { y: 0 },
  animate: { y: [-8, 8, -8] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
};

// ---------- Framer Motion stagger headline variants ---------- //
const headlineStagger = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

const Home = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C2B4E] to-[#114C92] text-white min-h-[88vh] flex items-center">
        {/* Soft animated SVG blobs bg */}
        <svg className="absolute left-[-8vw] top-[-10vw] w-[40vw] h-[40vw] opacity-30 z-0 select-none" viewBox="0 0 300 300"><defs><radialGradient id="heroBlob" cx="50%" cy="50%" r="75%"><stop offset="0%" stop-color="#1897ED"/><stop offset="100%" stop-color="#0C2B4E"/></radialGradient></defs><ellipse cx="150" cy="150" rx="150" ry="130" fill="url(#heroBlob)"/></svg>
        <svg className="absolute bottom-[-8vw] right-[-12vw] w-[34vw] h-[34vw] opacity-20 z-0 select-none" viewBox="0 0 300 300"><defs><radialGradient id="heroBlob2" cx="50%" cy="50%" r="58%"><stop offset="0%" stop-color="#FFD166"/><stop offset="100%" stop-color="#114C92"/></radialGradient></defs><ellipse cx="150" cy="150" rx="150" ry="120" fill="url(#heroBlob2)"/></svg>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 md:py-28">
            {/* Left: Stagger-animated headline */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div
                  variants={headlineStagger}
                  custom={1}
                  className="uppercase tracking-widest text-sm md:text-base font-semibold text-white/90"
                >
                  Cloud & AI Transformation
                </motion.div>
                <motion.h1
                  variants={headlineStagger}
                  custom={2}
                  className="text-3xl md:text-5xl lg:text-6xl leading-tight font-extrabold max-w-2xl"
                >
                  Accelerate your digital journey
                  <span className="text-yellow-300 block md:inline"> with intelligent cloud solutions</span>
                </motion.h1>
                <motion.p
                  variants={headlineStagger}
                  custom={3}
                  className="text-lg md:text-xl text-white/90 max-w-xl"
                >
                  Scalable infrastructure powered by artificial intelligence — secure, compliant, and engineered for performance.
                </motion.p>
                
              </motion.div>
              {/* Microfeatures row, styled as before ... */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                <div className="bg-white/6 border border-white/8 rounded-xl px-3 py-2 text-sm text-white/90">24/7 Support</div>
                <div className="bg-white/6 border border-white/8 rounded-xl px-3 py-2 text-sm text-white/90">Enterprise-grade</div>
                <div className="bg-white/6 border border-white/8 rounded-xl px-3 py-2 text-sm text-white/90">AI First</div>
                <div className="bg-white/6 border border-white/8 rounded-xl px-3 py-2 text-sm text-white/90">Cayman & Caribbean</div>
              </div>
            </div>
            {/* Right: Hero image in organic SVG mask + animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex justify-center md:justify-end items-center"
            >
              {/* Professional image card with gradient border */}
              <div className="relative w-[320px] md:w-[400px] lg:w-[480px] flex justify-center items-center">
                <div className="relative rounded-3xl p-[6px] bg-gradient-to-tr from-[#1897ED] via-[#66c3ff] to-[#FFD166] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <motion.img
                    whileHover={{ scale: 1.02, y: -6 }}
                    src="/images/hero.jpg"
                    alt="Businesses transforming with Cloud and AI"
                    className="block rounded-2xl object-cover w-[calc(100%-0px)] h-[390px] md:h-[440px] lg:h-[480px] bg-white"
                  />
                </div>
                {/* Floating accent: yellow orb bottom right */}
                <motion.div
                  className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full bg-yellow-300 shadow-lg z-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative py-14">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              const gradients = [
                'from-[#0ea5e9] to-[#2563eb]',
                'from-[#22c55e] to-[#16a34a]',
                'from-[#f59e0b] to-[#ef4444]',
                'from-[#a855f7] to-[#6366f1]'
              ];
              const gradient = gradients[i % gradients.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br ${gradient} shadow-[0_14px_40px_rgba(0,0,0,0.18)]`}
                >
                  <div className="h-full w-full rounded-2xl bg-[#0C2B4E]/90 backdrop-blur-md px-5 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-white">
                        <div className="text-3xl font-extrabold leading-none">
                          {typeof s.value === 'string' && /^\\d+\\+?$/.test(s.value) ? (
                            <CountUp end={parseInt(s.value)} duration={1.6} suffix={s.value.endsWith('+') ? '+' : ''} />
                          ) : (
                            s.value
                          )}
                        </div>
                        <div className="mt-1 text-[13px] uppercase tracking-wide text-white/80">{s.label}</div>
                      </div>
                    </div>
                  </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SNAPSHOT ===================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
              <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 text-primary-blue px-3 py-1 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" /> Since 2025
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                About Next Vision IT
              </h2>
              <p className="text-gray-700 mb-3">
                <strong className="text-primary-blue">Next Vision IT (Cayman) Limited</strong> builds secure, scalable and
                intelligent systems—bringing together <span className="font-semibold">Cybersecurity</span>, <span className="font-semibold">Cloud</span>,
                and <span className="font-semibold">AI</span> to accelerate business growth across the Caribbean.
              </p>
              <p className="text-gray-700 mb-5">
                We design practical, measurable solutions that reduce risk, improve reliability, and unlock new
                opportunities—so your teams can move faster with confidence.
              </p>

              {/* Key points */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-blue mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span className="text-gray-700">Certified experts in AI, Cloud and Security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-blue mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span className="text-gray-700">24/7 support with proactive monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-blue mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span className="text-gray-700">Proven results across 9+ industries</span>
                </li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-primary-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-mid transition"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* Illustrative image panel */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#1897ED22] to-[#FFD16622] blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaborating on technology"
                className="relative rounded-2xl w-full h-[320px] md:h-[380px] object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== GROW YOUR BUSINESS ===================== */}
      <section className="relative py-12 md:py-20 bg-white">
        {/* subtle wave background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <svg className="absolute left-0 top-0 w-[60vw] h-[60vw] opacity-[0.06] text-primary-blue" viewBox="0 0 600 600" fill="none">
            <path d="M0 300C120 200 240 400 360 300C480 200 540 260 600 200V600H0V300Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left image card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#1897ED22] to-[#FFD16622] blur-2xl" />
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                  alt="Team discussing strategy"
                  className="w-full h-[360px] md:h-[440px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FB8500]/10 text-[#FB8500] px-3 py-1 text-xs font-semibold mb-3">
                Thinking of expanding
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                We are here to help you
                <span className="block text-primary-blue">grow your business</span>
              </h2>
              <p className="text-gray-700 mb-6 max-w-xl">
                A BSM approach helps understand the impact of business needs on IT services and infrastructure. We plan and
                support evolving objectives with security-first, cloud-ready, AI‑powered solutions—so your teams can move
                faster with confidence.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 6l2 4 4 .5-3 3 .7 4.5L12 16l-3.7 2 1-4.5-3-3 4-.5L12 6z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Well Experience</div>
                    <p className="text-gray-600 text-sm">Delivered by seasoned engineers and consultants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100% Satisfaction</div>
                    <p className="text-gray-600 text-sm">We iterate with you and measure outcomes, not just outputs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Thoughtful Solutions</div>
                    <p className="text-gray-600 text-sm">Designed for your context with security, UX, and scale in mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 20h10M12 4v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Professionalism</div>
                    <p className="text-gray-600 text-sm">Clear SLAs, transparent communication, and reliable delivery.</p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <Link to="/services" className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-xl shadow hover:bg-primary-mid transition">
                  Read More
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Our Core Services</h2>
            <p className="text-gray-600 mt-2">Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>

          {/* Browse by category pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link to="/services" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition">Core IT Services</Link>
            <Link to="/services" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition">AI Services</Link>
            <Link to="/services" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition">Digital Transformation</Link>
            <Link to="/services" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition">Partners & Ecosystem</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.article
                  key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/hero.jpg'; }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient corner badge */}
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs text-white bg-gradient-to-r from-[#0ea5e9] to-[#2563eb]">
                      <Icon className="w-4 h-4 text-white" />
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{svc.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{svc.description}</p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-primary-blue font-semibold">
                        Learn more
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-block bg-primary-blue text-white px-6 py-3 rounded-xl shadow hover:bg-primary-mid transition">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-12 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-primary-blue mb-2">Testimonials</h2>
            <p className="text-gray-600">How we help businesses move faster, safer, and smarter</p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            aria-label="Client testimonials carousel"
          >
            {clientTestimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-b from-white to-blue-50/40 rounded-2xl p-8 shadow border border-gray-100 h-full"
                >
                  <div className="absolute -top-4 -left-3 text-primary-blue/20" aria-hidden>
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17 6A5.17 5.17 0 002 11.17V22h8v-8H6.83A4.83 4.83 0 0111.66 9H12V2H9.17C8.1 2 7.17 2.93 7.17 4v2zM17.17 6A5.17 5.17 0 0012 11.17V22h8v-8h-3.17A4.83 4.83 0 0121.66 9H22V2h-2.83c-1.07 0-2 .93-2 2v2z"/></svg>
                  </div>
                  <div className="flex items-center gap-4 mb-4 justify-center">
                    <img src={t.avatar} alt={`${t.name} portrait`} className="w-12 h-12 rounded-full object-cover shadow" onError={(e)=>{e.currentTarget.style.display='none';}} />
                    <div className="text-left">
                      <div className="font-bold text-primary-blue leading-tight">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700">“{t.quote}”</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination style tweak */}
          <style>{`.swiper-pagination-bullet{background:#93c5fd;opacity:.7}.swiper-pagination-bullet-active{background:#2563eb;opacity:1}`}</style>
        </div>
      </section>

      {/* ===================== FEATURES & CTA ===================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 text-primary-blue px-3 py-1 text-xs font-semibold mb-3">
              Why Choose Us
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Why Choose Next Vision IT</h2>
            <p className="text-gray-600">Delivering exceptional technology solutions with unmatched expertise</p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#1897ED] via-[#66c3ff] to-[#FFD166] shadow-[0_12px_36px_rgba(2,6,23,0.12)]"
              >
                <div className="rounded-2xl bg-white p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] text-white flex items-center justify-center shadow">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{f.title}</h3>
                      <p className="text-gray-700">{f.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Commitment + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span className="text-gray-700">Locally owned and globally connected</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span className="text-gray-700">24/7/365 helpdesk and on-site support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span className="text-gray-700">Certified IT and AI professionals</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-[#0C2B4E] to-[#114C92] shadow-xl"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0C2B4E] to-[#114C92] p-6 text-white">
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#1897ED]/20 blur-3xl" />
                <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
                <p className="mb-6 text-white/80">
                  Let’s build your secure and intelligent IT environment today. Our experts will help you navigate the path
                  to digital transformation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary-blue px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
                >
                  Contact Our Experts
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
