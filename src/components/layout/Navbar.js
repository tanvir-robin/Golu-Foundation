'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLeaf, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'হোম', href: '#home', id: 'home' },
    { name: 'আমাদের সম্পর্কে', href: '#about', id: 'about' },
    { 
      name: 'স্কুল', 
      href: '#school', 
      id: 'school',
      hasDropdown: true,
      dropdownItems: [
        { name: 'স্কুলের বিবরণ', href: '/school' },
        { name: 'ভর্তি তথ্য', href: '/school#admission' }
      ]
    },
    { 
      name: 'পরিবেশ', 
      href: '#environment', 
      id: 'environment',
      hasDropdown: true,
      dropdownItems: [
        { name: 'বৃক্ষরোপণ কর্মসূচি', href: '/tree-plant' },
        { name: 'পরিবেশ সংরক্ষণ', href: '#environment' }
      ]
    },
    { name: 'যোগাযোগ', href: '#contact', id: 'contact' },
  ];

  // Scroll spy and navbar visibility effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPosition = currentScrollY + 120;
      setScrolled(currentScrollY > 50);

      // Show/hide navbar based on scroll direction
      if (currentScrollY < 100) {
        // Always show navbar at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Check which section is currently in view
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <Image
                src="/images/logo/logo_transparent.png"
                alt="GoLu Foundation Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                GoLu Foundation
              </h1>
              <p className="text-sm text-gray-500 font-medium">God Lives Universal</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 bg-gray-50/80 rounded-full p-2 backdrop-blur-sm">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <motion.button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setOpenDropdown(openDropdown === item.id ? null : item.id);
                      } else {
                        handleNavClick(item.href, item.id);
                      }
                    }}
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.id)}
                    onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                    className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Active section indicator */}
                    <AnimatePresence>
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-lg"
                          layoutId="activeSection"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover indicator */}
                    {activeSection !== item.id && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"
                        whileHover={{ width: '80%', x: '-50%' }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setOpenDropdown(item.id)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dropdownIndex * 0.05 }}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              className="group relative bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <FaHeart className="w-4 h-4 group-hover:animate-pulse" />
                <span>Donate Now</span>
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-700 hover:text-green-600 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-3 bg-white/95 backdrop-blur-md">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.button
                      onClick={() => {
                        if (item.hasDropdown) {
                          setOpenDropdown(openDropdown === item.id ? null : item.id);
                        } else {
                          handleNavClick(item.href, item.id);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="flex items-center space-x-2">
                          {activeSection === item.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                          {item.hasDropdown && (
                            <motion.div
                              animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="w-4 h-4"
                            >
                              ▼
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.button>

                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {dropdownItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 mt-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHeart className="w-4 h-4" />
                  <span>Donate Now</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </motion.nav>
  );
};

export default Navbar; 