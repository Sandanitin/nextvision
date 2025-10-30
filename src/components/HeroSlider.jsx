import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Empowering Cayman Businesses Through Innovation, Security & Intelligence',
      subtitle: 'Future-ready IT, Cloud, and AI solutions that transform the way you work',
      description: 'Your Technology. Smarter. Safer. Faster.',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
      cta: 'Get a Free Consultation'
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity Solutions',
      subtitle: 'Protect your business with cutting-edge security technology',
      description: 'AI-powered threat detection and 24/7 monitoring to keep your data safe',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
      cta: 'Explore Security Services'
    },
    {
      id: 3,
      title: 'Cloud & AI Transformation',
      subtitle: 'Accelerate your digital journey with intelligent cloud solutions',
      description: 'Scalable infrastructure powered by artificial intelligence',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
      cta: 'Start Digital Transformation'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentIndex && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 59, 102, 0.75), rgba(0, 91, 158, 0.75)), url(${slide.bgImage})`
                }}
              />
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p className="text-xl md:text-2xl mb-6 text-primary-sky">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold mb-10 text-yellow-300">
                      {slide.description}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a
                      href="/contact"
                      className="inline-block bg-white text-primary-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-sky hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      {slide.cta}
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-12' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

